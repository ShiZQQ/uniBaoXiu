<template>
	<view scroll-y="true" :class="[view, 'wrap', isIPX ? 'scroll_view_X' : '']" @tap="onTap" upper-threshold="-50"
		:scroll-into-view="toView" id="msgList"> <!-- 新增 id 用于选择器定位 -->
		<view>
			<u-modal v-model="show" title="消息举报" ref="uModal" confirm-text="举报" :async-close="true"
				@confirm="reportMsg">
				<view class="slot-content">
					<u-field v-model="reason" label="举报原因" placeholder="请填写举报原因" type="textarea" :auto-height="false"
						:clearable="false" maxlength="100">
					</u-field>
				</view>
			</u-modal>
			<u-action-sheet :list="list" @click="onMenuClick" v-model="showRpt"></u-action-sheet>
			<u-action-sheet :list="typeList" @click="onReportTypeClick" v-model="showRptType"></u-action-sheet>
		</view>
		<view class="tips"></view>
		<!-- 1. 移除无效外层循环，直接遍历chatMsg + 移除可选链 -->
		<!-- 2. 强化空值过滤 + 唯一key生成 -->
		<view @longtap="onMsgTap(item)" class="message" v-for="(item, idx) in chatMsg.filter(Boolean)"
			:key="`msg_${(item && item.mid) || idx}_${(item && item.time) || Date.now()}`" :id="item && item.mid">
			<view class="main" :class="(item && item.style) || ''">
				<view class="user">
					<!-- 3. 完善空值保护：移除可选链 -->
					<text v-if="(item && item.style === '') && (item && item.yourname)" class="user-text">
						{{ showMessageListNickname(item.yourname) }} {{ handleTime(item) }}
					</text>
				</view>
				<!-- 4. 头像空值兜底：移除可选链 -->
				<image class="avatar" :src="showMessageListAvatar(item)" />
				<view class="msg">
					<!-- 5. 消息失败图标：完善style/isFail判断 + 移除可选链 -->
					<image class="err"
						:class="((item && item.style === 'self') && (item && item.isFail)) ? 'show' : 'hide'"
						src="/static/images/msgerr.png" />

					<image v-if="item && item.style === 'self'" src="/static/images/poprightarrow2x.png"
						class="msg_poprightarrow" />
					<image v-if="item && item.style === ''" src="/static/images/popleftarrow2x.png"
						class="msg_popleftarrow" />

					<!-- 6. 图片/视频消息：深度空值保护 + 移除可选链 -->
					<view
						v-if="(item && item.msg && item.msg.type) && ['img', 'video'].includes(item.msg.type) && (item && item.msg && item.msg.data)">
						<image v-if="item.msg.type === 'img'" class="avatar" :src="item.msg.data"
							style="width:90px; height:120px; margin:2px auto;" mode="aspectFit" @tap="previewImage"
							:data-url="item.msg.data" />
						<video v-if="item.msg.type === 'video'" :src="item.msg.data" controls style="width:300rpx;"
							@error="(e) => console.error('视频加载失败', e)" />
					</view>

					<!-- 7. 音频/文件消息：组件传参兜底 + 移除可选链 -->
					<audio-msg v-if="item && item.msg && item.msg.type === 'audio'" :msg="item || {}"></audio-msg>
					<file-msg v-if="item && item.msg && item.msg.type === 'file'" :msg="item || {}"></file-msg>

					<!-- 8. 文本/表情消息：完善数组判断 + 空值过滤 + 移除可选链 -->
					<view
						v-else-if="(item && item.msg && item.msg.type) && ['txt', 'emoji'].includes(item.msg.type) && Array.isArray(item && item.msg && item.msg.data)">
						<view class="template" v-for="(d_item, d_index) in item.msg.data.filter(Boolean)"
							:key="`data_${d_index}_${(d_item && d_item.type) || 'default'}`">
							<text :data-msg="item" @tap="clickMsg"
								v-if="(d_item && d_item.type === 'txt') && (d_item && d_item.data !== undefined) && (d_item && d_item.data !== null)"
								class="msg-text" style="float:left;" selectable="true">{{ d_item.data }}</text>

							<image v-if="(d_item && d_item.type === 'emoji') && (d_item && d_item.data)" class="avatar"
								:src="`/static/images/faces/${d_item.data}`"
								style="width:25px; height:25px; margin:0 0 2px 0; float:left;"
								@error="(e) => console.error('表情加载失败', e)" />
						</view>
					</view>

					<!-- 兜底：未知消息类型提示 -->
					<view v-else class="msg-unknown" style="color: #999; font-size: 12px;">
						不支持的消息类型
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	let msgStorage = require("../msgstorage");
	let disp = require("../../../utils/broadcast");
	let WebIM = require("../../../utils/WebIM")["default"];
	import audioMsg from "./type/audio/audio";
	import fileMsg from "./type/file";

	const LIST_STATUS = {
		SHORT: "scroll_view_change",
		NORMAL: "scroll_view"
	};

	export default {
		components: {
			audioMsg,
			fileMsg
		},
		props: {
			username: {
				type: Object,
				default: () => ({
					myName: "",
					your: "",
					groupId: ""
				})
			}
		},
		data() {
			return {
				view: LIST_STATUS.NORMAL,
				toView: "",
				chatMsg: [],
				__visibility__: false,
				isIPX: false,
				title: '消息举报',
				list: [{
					text: '举报'
				}],
				show: false,
				showRpt: false,
				showRptType: false,
				rptMsgId: '', // 举报消息id
				rptType: '', // 举报类型
				reason: '',
				typeList: [{
						text: "涉政"
					},
					{
						text: "涉黄"
					},
					{
						text: "广告"
					},
					{
						text: "辱骂"
					},
					{
						text: "暴恐"
					},
					{
						text: "违禁"
					}
				],
				defaultAvatar: "/static/images/theme2x.png",
				defaultGroupAvatar: "/static/images/groupTheme.png",
				curChatMsg: [], // 当前聊天消息
				page: 0,
				Index: 0,
				curMsgMid: '', // 消息ID
				isFail: false, // 消息发送失败状态
				// 新增：事件回调引用（用于准确移除监听）
				sendMsgErrCallback: null
			};
		},
		computed: {
			// 消息列表头像展示 - 全量空值保护（移除可选链）
			showMessageListAvatar() {
				return (item) => {
					// 空值兜底
					if (!item) return this.defaultAvatar;

					// 全局数据兜底（移除可选链）
					const globalData = getApp() && getApp().globalData || {};
					const friendUserInfoMap = globalData.friendUserInfoMap || new Map();
					const myUserInfos = globalData.userInfoFromServer || {};

					if (item.style === '') {
						const friendInfo = friendUserInfoMap.get(item.username) || {};
						return (friendInfo && friendInfo.avatarurl) || this.defaultAvatar;
					} else {
						return (myUserInfos && myUserInfos.avatarurl) || this.defaultAvatar;
					}
				};
			},
			// 消息列表昵称显示 - 空值保护（移除可选链）
			showMessageListNickname() {
				return (hxId) => {
					if (!hxId) return '未知用户';
					const globalData = getApp() && getApp().globalData || {};
					const friendUserInfoMap = globalData.friendUserInfoMap || new Map();
					const friendInfo = friendUserInfoMap.get(hxId) || {};
					return (friendInfo && friendInfo.nickname) || hxId || '未知用户';
				};
			},
			// 处理时间显示 - 异常捕获 + 空值保护（移除可选链）
			handleTime() {
				return (item) => {
					if (!item || !item.time) return '未知时间';
					try {
						// 兼容时间戳/字符串格式
						const time = typeof item.time === 'string' ? parseInt(item.time) : item.time;
						return this.$u && this.$u.timeFormat ? this.$u.timeFormat(time, 'mm/dd hh:MM') : new Date(time)
							.toLocaleString();
					} catch (e) {
						console.error('时间格式化失败', e);
						return '未知时间';
					}
				};
			}
		},
		created() {},
		beforeMount() {
			this.__visibility__ = true;
			this.page = 0;
			this.Index = 0;
			// 初始化事件回调引用
			this.sendMsgErrCallback = this.handleSendMsgErr.bind(this);
		},
		mounted() {
			// 适配IPX（移除可选链）
			this.isIPX = (getApp() && getApp().globalData && getApp().globalData.isIPX) || false;

			const myUsername = uni.getStorageSync("myUsername") || '';
			const {
				groupId,
				your
			} = this.username;
			const sessionKey = groupId ? `${groupId}_${myUsername}` : `${your}_${myUsername}`;

			// 初始化聊天消息 - 严格空值保护
			const chatMsg = uni.getStorageSync(sessionKey) || [];
			this.renderMsg(null, null, Array.isArray(chatMsg) ? chatMsg : [], sessionKey);
			uni.setStorageSync(sessionKey, []); // 清空临时存储

			// 监听发送消息失败事件（指定回调引用）
			disp.on('em.error.sendMsgErr', this.sendMsgErrCallback);

			// 监听新消息
			msgStorage.on("newChatMsg", this.dispMsg);
		},
		beforeUnmount() {
			this.__visibility__ = false;
			// 移除事件监听（使用引用确保准确移除）
			msgStorage.off("newChatMsg", this.dispMsg);
			if (this.sendMsgErrCallback) {
				disp.off('em.error.sendMsgErr', this.sendMsgErrCallback);
			}
		},
		methods: {
			// 处理发送消息失败（抽离为独立方法）
			handleSendMsgErr(err) {
				this.isFail = true;
				this.curMsgMid = (err && err.data && err.data.mid) || '';
				console.log('发送失败', err);

				if (!this.curMsgMid) return;

				// 更新失败状态 - 空值保护（移除可选链）
				this.chatMsg = (this.chatMsg || []).map(item => {
					if (!item || !item.mid) return item;

					const itemMid = item.mid.substring(item.mid.length - 10);
					const curMid = this.curMsgMid.substring(this.curMsgMid.length - 10);
					if (itemMid === curMid) {
						if (item.msg && item.msg.data && item.msg.data[0]) {
							item.msg.data[0].isFail = true;
						}
						item.isFail = true;
					}
					return item;
				});

				// 更新当前聊天消息（移除可选链）
				if (this.curChatMsg && this.curChatMsg[0] && this.curChatMsg[0].mid === this.curMsgMid) {
					if (this.curChatMsg[0].msg && this.curChatMsg[0].msg.data && this.curChatMsg[0].msg.data[0]) {
						this.curChatMsg[0].msg.data[0].isShow = false;
					}
					if (this.curChatMsg[0]) {
						this.curChatMsg[0].isShow = false;
					}
				}

				const myUsername = uni.getStorageSync("myUsername") || '';
				const {
					groupId,
					your
				} = this.username;
				const sessionKey = groupId ? `${groupId}_${myUsername}` : `${your}_${myUsername}`;
				if (sessionKey) {
					uni.setStorageSync(`rendered_${sessionKey}`, this.chatMsg);
				}
			},
			normalScroll() {
				this.view = LIST_STATUS.NORMAL;
			},
			// 分发消息 - 全量空值保护（移除可选链）
			dispMsg(renderableMsg, type, curChatMsg, sesskey) {
				if (!this.__visibility__) return; // 非当前会话不处理

				const myUsername = uni.getStorageSync("myUsername") || '';
				const {
					groupId,
					your
				} = this.username;
				const sessionKey = groupId ? `${groupId}_${myUsername}` : `${your}_${myUsername}`;

				this.curChatMsg = Array.isArray(curChatMsg) ? curChatMsg : [];

				// 校验会话匹配 - 空值保护（移除可选链）
				const isGroupMatch = groupId && (
					(renderableMsg && renderableMsg.info && renderableMsg.info.from === groupId) ||
					(renderableMsg && renderableMsg.info && renderableMsg.info.to === groupId)
				);
				const isSingleMatch = !groupId && (
					(renderableMsg && renderableMsg.info && renderableMsg.info.from === your) ||
					(renderableMsg && renderableMsg.info && renderableMsg.info.to === your)
				);

				if ((isGroupMatch || isSingleMatch) && sesskey === sessionKey) {
					this.renderMsg(renderableMsg, type, this.curChatMsg, sessionKey, 'newMsg');
				}
			},
			shortScroll() {
				this.view = LIST_STATUS.SHORT;
			},
			onTap() {
				this.$emit("msglistTap", null, {
					bubbles: true
				});
			},
			// 长按消息 - 强化空值保护（移除可选链）
			onMsgTap(item) {
				if (!item || !item.id || (item && item.style === 'self')) return; // 仅举报他人有效消息
				this.showRpt = true;
				this.rptMsgId = item.id;
			},
			onMenuClick(idx) {
				if (idx === 0) {
					this.showRptType = true;
				}
			},
			// 举报消息 - 完善异常处理 + 模态框状态重置
			async reportMsg() {
				if (!this.rptMsgId) {
					uni.showToast({
						title: "未选中举报消息",
						icon: 'none'
					});
					this.$refs.uModal && this.$refs.uModal.clearLoading();
					return;
				}
				if (!this.rptType) {
					uni.showToast({
						title: "请选择举报类型",
						icon: 'none'
					});
					this.$refs.uModal && this.$refs.uModal.clearLoading();
					return;
				}
				if (!this.reason) {
					uni.showToast({
						title: "请填写举报原因",
						icon: 'none'
					});
					this.$refs.uModal && this.$refs.uModal.clearLoading();
					return;
				}

				try {
					// 兼容WebIM.conn.reportMessage异步调用
					const result = await WebIM.conn.reportMessage({
						reportType: this.rptType,
						reportReason: this.reason,
						messageId: this.rptMsgId
					});
					console.log('举报成功', result);
					uni.showToast({
						title: "举报成功",
						icon: 'success'
					});
				} catch (e) {
					console.error('举报失败', e);
					uni.showToast({
						title: "举报失败：" + (e.message || '未知错误'),
						icon: 'none'
					});
				} finally {
					// 重置举报表单
					this.reason = '';
					this.rptType = '';
					this.rptMsgId = '';
					this.show = false;
					this.showRpt = false;
					this.showRptType = false;
					// 清理modal加载状态（移除可选链）
					this.$refs.uModal && this.$refs.uModal.clearLoading();
				}
			},
			onReportTypeClick(idx) {
				this.rptType = (this.typeList[idx] && this.typeList[idx].text) || '';
				this.show = true;
			},
			// 预览图片 - 空值保护（移除可选链）
			previewImage(event) {
				const url = event && event.target && event.target.dataset && event.target.dataset.url;
				if (url) {
					uni.previewImage({
						urls: [url],
						fail: (e) => console.error('预览图片失败', e)
					});
				}
			},
			// 获取历史消息 - 完善空值保护（移除可选链）
			getHistoryMsg() {
				const myUsername = uni.getStorageSync("myUsername") || '';
				const {
					groupId,
					your
				} = this.username;
				const sessionKey = groupId ? `${groupId}_${myUsername}` : `${your}_${myUsername}`;

				const historyChatMsgs = uni.getStorageSync(`rendered_${sessionKey}`) || [];
				if (this.Index < (historyChatMsgs && historyChatMsgs.length || 0)) {
					const timesMsgList = historyChatMsgs.slice(-this.Index - 10, -this.Index) || [];
					this.chatMsg = timesMsgList.concat(this.chatMsg || []);
					if (timesMsgList.length) {
						this.toView = (timesMsgList[timesMsgList.length - 1] && timesMsgList[timesMsgList.length - 1]
							.mid) || '';
					}
					this.Index += timesMsgList.length;

					if (timesMsgList.length === 10) {
						this.page++;
					}

					uni.stopPullDownRefresh();
				}
			},
			// 渲染消息 - 全量空值保护 + 逻辑优化（移除可选链）
			renderMsg(renderableMsg, type, curChatMsg, sessionKey, isnew) {
				// 空值校验
				if (!sessionKey || !Array.isArray(curChatMsg)) return;

				// 合并历史消息
				let historyChatMsgs = uni.getStorageSync(`rendered_${sessionKey}`) || [];
				historyChatMsgs = Array.isArray(historyChatMsgs) ? historyChatMsgs : [];
				historyChatMsgs = historyChatMsgs.concat(curChatMsg);

				// 更新聊天消息列表
				if (isnew === 'newMsg') {
					this.chatMsg = (this.chatMsg || []).concat(curChatMsg);
					this.toView = (historyChatMsgs[historyChatMsgs.length - 1] && historyChatMsgs[historyChatMsgs.length -
						1].mid) || '';
				} else {
					const last10Msg = historyChatMsgs.slice(-10) || [];
					this.chatMsg = last10Msg;
					if (last10Msg.length) {
						this.toView = (last10Msg[last10Msg.length - 1] && last10Msg[last10Msg.length - 1].mid) || '';
					}
				}

				// 存储渲染后的消息
				uni.setStorageSync(`rendered_${sessionKey}`, historyChatMsgs);

				// 清理重复消息
				let chatMsg = uni.getStorageSync(sessionKey) || [];
				chatMsg = Array.isArray(chatMsg) ? chatMsg : [];
				chatMsg = chatMsg.filter(item => {
					return !curChatMsg.some(item2 => (item2 && item2.mid) === (item && item.mid));
				});
				uni.setStorageSync(sessionKey, chatMsg);

				this.Index = ((historyChatMsgs.slice(-10) && historyChatMsgs.slice(-10).length) || 0);

				// 兼容滚动（替换为 uni 多端兼容写法）
				setTimeout(() => {
					uni.createSelectorQuery().in(this).select('#msgList').boundingClientRect(rect => {
						uni.pageScrollTo({
							scrollTop: 999999, // 滚动到底部（保持原有逻辑）
							duration: 300,
							fail: (e) => console.error("滚动失败：", e)
						});
					}).exec();
				}, 100);

				// 处理失败消息渲染
				if (this.isFail) {
					this.renderFail(sessionKey);
				}
			},
			// 渲染失败消息 - 空值保护（移除可选链）
			renderFail(sessionKey) {
				if (!this.curMsgMid || !sessionKey) return;

				// 更新失败状态
				this.chatMsg = (this.chatMsg || []).map(item => {
					if (!item || !item.mid) return item;

					const itemMid = item.mid.substring(item.mid.length - 10);
					const curMid = this.curMsgMid.substring(this.curMsgMid.length - 10);
					if (itemMid === curMid) {
						if (item.msg && item.msg.data && item.msg.data[0]) {
							item.msg.data[0].isFail = true;
						}
						item.isFail = true;
					}
					return item;
				});

				// 更新当前聊天消息（移除可选链）
				if (this.curChatMsg && this.curChatMsg[0] && this.curChatMsg[0].mid === this.curMsgMid) {
					if (this.curChatMsg[0].msg && this.curChatMsg[0].msg.data && this.curChatMsg[0].msg.data[0]) {
						this.curChatMsg[0].msg.data[0].isShow = false;
					}
					if (this.curChatMsg[0]) {
						this.curChatMsg[0].isShow = false;
					}
				}

				// 存储更新后的消息
				uni.setStorageSync(`rendered_${sessionKey}`, this.chatMsg);
				this.isFail = false;
			},
			// 点击消息 - 空值保护（移除可选链）
			clickMsg(event) {
				const msgData = event && event.target && event.target.dataset && event.target.dataset.msg;
				if (msgData && typeof msgData === 'object' && (msgData && msgData.msg && msgData.msg.ext && msgData.msg.ext
						.msg_extension)) {
					this.$emit("clickMsg", msgData.msg.ext);
				}
			}
		}
	};
</script>

<style>
	@import "./msglist.css";

	/* 新增未知消息类型样式 */
	.msg-unknown {
		padding: 2px 5px;
		border-radius: 3px;
		background: #f5f5f5;
	}

	/* 修复滚动容器样式 */
	.wrap {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
	}
</style>