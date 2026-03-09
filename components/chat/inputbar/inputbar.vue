<template>
	<view class="room_bar">
		<chatSuitEmoji ref="chatSuitEmoji" @newEmojiStr="emojiAction"></chatSuitEmoji>
		<chatSuitMain ref="chatSuitMain" :username="username" :chatType="chatType" @inputFocused="closeAllModal"
			@openEmoji="openEmoji" @openRecordModal="toggleRecordModal" @openFunModal="openFunModal"></chatSuitMain>
		<chatSuitImage ref="chatSuitImage" :username="username" :chatType="chatType"></chatSuitImage>
		<chatSuitPtopcall ref="chatSuitPtopcall" :chatType="chatType" @makeVideoCall="onMakeVideoCall">
		</chatSuitPtopcall>

		<swiper :class="showFunModal" :indicator-dots="true" :autoplay="false" :interval="5000" :duration="1000">
			<swiper-item>
				<view :class="['other_func', isIPX ? 'other_func_X' : '']">
					<view class="open_camera" @tap="openCamera">
						<image src="/static/images/camora.png"></image>
						相机
					</view>
					<view class="menu_wrap" @tap="sendImage">
						<image src="/static/images/pic.png"></image>
						相册
					</view>
					<!-- #ifdef APP-PLUS -->
					<view class="menu_wrap">
						<chatSuitAttach :username="username" :chatType="chatType">
							<image style="background-color: #fff" src="/static/images/file.png"></image>
							附件
						</chatSuitAttach>
					</view>
					<!-- #endif -->
					<view class="menu_wrap" @tap="edit_group" v-show="chatType === 'chatRoom'">
						<image src="/static/images/pic.png"></image>
						群信息
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	let RecordStatus = require("./suit/audio/record_status").RecordStatus;
	let msgType = require("../msgtype");
	import chatSuitEmoji from "./suit/emoji/emoji";
	import chatSuitImage from "./suit/image/image";
	import chatSuitLocation from "./suit/location/location";
	import chatSuitMain from "./suit/main/main";
	import chatSuitPtopcall from "./suit/ptopcall/ptopcall.vue";
	import chatSuitAttach from "./suit/attach";

	const FUNMODAL_STATUS = {
		OPENED: "showFunModal",
		CLOSED: "fun_list"
	};

	export default {
		components: {
			chatSuitEmoji,
			chatSuitImage,
			chatSuitLocation,
			chatSuitMain,
			chatSuitPtopcall,
			chatSuitAttach
		},
		props: {
			username: {
				type: Object,
				default: () => ({})
			},
			chatType: {
				type: String,
				default: msgType.chatType.SINGLE_CHAT
			}
		},
		data() {
			return {
				recordStatus: RecordStatus.HIDE,
				RecordStatus,
				// 关键：必须在data中初始化__comps__为对象，不能缺省
				__comps__: {
					// main: null,
					// emoji: null,
					// image: null,
					// location: null,
					// video: null
				},
				showEmoji: false,
				isIPX: false,
				showFunModal: FUNMODAL_STATUS.CLOSED
			};
		},
		created() {},
		beforeMount() {},
		mounted() {

			// 确保组件初始化完成
			this.__comps__ = this.$refs || {};
			console.log("inputbar 组件初始化完成", this.__comps__);
			this.isIPX = typeof getApp === 'function' ? (getApp().globalData?.isIPX || false) : false;

			// 增加双重兜底：先判断__comps__是否存在，再赋值
			if (this.__comps__) {
				this.__comps__.main = this.$refs.chatSuitMain || null;
				this.__comps__.emoji = this.$refs.chatSuitEmoji || null;
				this.__comps__.image = this.$refs.chatSuitImage || null;
				this.__comps__.location = this.$refs.chatSuitLocation || null;
			} else {
				console.error('__comps__ 未初始化，请检查data定义');
				// 兜底初始化
				this.__comps__ = {
					main: this.$refs.chatSuitMain || null,
					emoji: this.$refs.chatSuitEmoji || null
				};
			}
		},
		methods: {
			// 切换录音模态框
			toggleRecordModal() {
				this.$emit("tapSendAudio", null, {
					bubbles: true,
					composed: true
				});
			},
			// 打开相机
			openCamera() {
				if (this.$refs.chatSuitImage && typeof this.$refs.chatSuitImage.openCamera === 'function') {
					this.$refs.chatSuitImage.openCamera();
				}
			},
			// 打开表情面板
			openEmoji() {
				setTimeout(() => {
					this.showFunModal = FUNMODAL_STATUS.CLOSED;
				}, 100);
				if (this.$refs.chatSuitEmoji && typeof this.$refs.chatSuitEmoji.openEmoji === 'function') {
					this.$refs.chatSuitEmoji.openEmoji();
				}
			},
			// 取消表情面板
			cancelEmoji() {
				if (this.$refs.chatSuitEmoji && typeof this.$refs.chatSuitEmoji.cancelEmoji === 'function') {
					this.$refs.chatSuitEmoji.cancelEmoji();
				}
			},
			// 发送图片
			sendImage() {
				if (this.$refs.chatSuitImage && typeof this.$refs.chatSuitImage.sendImage === 'function') {
					this.$refs.chatSuitImage.sendImage();
				}
			},
			// 发送位置（预留）
			sendLocation() {
				if (this.__comps__.location && typeof this.__comps__.location.sendLocation === 'function') {
					this.__comps__.location.sendLocation();
				}
			},
			// 表情选择事件
			emojiAction(evt) {
				if (this.$refs.chatSuitMain && evt?.msg && typeof this.$refs.chatSuitMain.emojiAction === 'function') {
					this.$refs.chatSuitMain.emojiAction(evt.msg);
				}
			},
			// 发起视频通话
			callVideo() {
				if (this.$refs.chatSuitPtopcall && typeof this.$refs.chatSuitPtopcall.show === 'function') {
					this.$refs.chatSuitPtopcall.show();
				}
			},
			// 视频通话回调
			onMakeVideoCall() {
				console.log("onMakeVideoCall -> inputbar");
				this.$emit("makeVideoCall", null, "single");
			},
			// 打开功能模态框
			openFunModal() {
				this.showFunModal = FUNMODAL_STATUS.OPENED;
				this.cancelEmoji();
			},
			// 关闭功能模态框
			closeFunModal() {
				this.showFunModal = FUNMODAL_STATUS.CLOSED;
				this.cancelEmoji();
			},
			// 关闭所有模态框
			closeAllModal() {
				this.cancelEmoji();
				this.closeFunModal();
			},
			// 编辑群信息
			edit_group() {
				// 解构赋值增加默认值，避免属性缺失
				const {
					myName = '', your: groupName = '', groupId: roomId = ''
				} = this.username || {};
				if (!roomId) {
					console.warn('群ID为空，无法跳转群设置页面');
					return;
				}
				const nameList = {
					myName,
					groupName,
					roomId
				};
				uni.navigateTo({
					url: `../groupSetting/groupSetting?groupInfo=${encodeURIComponent(JSON.stringify(nameList))}`
				});
			}
		}
	};
</script>
<style>
	@import "./inputbar.css";
</style>