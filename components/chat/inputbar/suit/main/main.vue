<template>
	<form class="text-input">
		<view :class="isIPX ?'f-row-x' :'f-row'">
			<!-- 发送语音 -->
			<view>
				<image class="icon-mic" src="/static/images/voice.png" @tap="openRecordModal"></image>
			</view>
			<!-- 输入框 -->
			<textarea class="f news" type="text" cursor-spacing="65" confirm-type='done' v-model="inputMessage"
				@confirm="sendMessage" @input="bindMessage" @tap="focus" @focus="focus" @blur="blur"
				:confirm-hold="isIPX ? true : false" auto-height :show-confirm-bar='false' maxlength="300" />
			<view>
				<image class="icon-mic" src="/static/images/Emoji.png" @tap="openEmoji"></image>
			</view>
			<view v-show="!inputMessage" @tap="openFunModal">
				<image class="icon-mic" src="/static/images/ad.png"></image>
			</view>
			<button class="send-btn-style" hover-class='hover' @tap="sendMessage" v-show="inputMessage">发送</button>
		</view>
	</form>
</template>

<script>
	let WebIM = require("../../../../../utils/WebIM")["default"];
	let msgType = require("../../../msgtype");
	let disp = require("../../../../../utils/broadcast");
	let msgStorage = require("../../../msgstorage");

	export default {
		data() {
			return {
				inputMessage: "",
				userMessage: "",
				isIPX: false,
			};
		},
		props: {
			username: {
				type: Object,
				default: () => ({}),
			},
			chatType: {
				type: String,
				default: msgType.chatType.SINGLE_CHAT,
			},
		},
		created() {
			// 修复：移除 uni. 前缀，直接用 getApp()，增加容错处理
			this.isIPX = typeof getApp === 'function' ? getApp().globalData?.isIPX || false : false;
		},
		methods: {
			focus() {
				this.$emit("inputFocused", null, {
					bubbles: true,
				});
			},
			blur() {
				this.$emit("inputBlured", null, {
					bubbles: true,
				});
			},
			isGroupChat() {
				return this.chatType == msgType.chatType.CHAT_ROOM;
			},
			getSendToParam() {
				return this.isGroupChat() ? this.username.groupId : this.username.your;
			},
			bindMessage(e) {
				this.userMessage = e.detail.value;
			},
			emojiAction(emoji) {
				var str;
				var msglen = this.userMessage.length - 1;

				if (emoji && emoji != "[del]") {
					str = this.userMessage + emoji;
				} else if (emoji == "[del]") {
					let start = this.userMessage.lastIndexOf("[");
					let end = this.userMessage.lastIndexOf("]");
					let len = end - start;

					if (end != -1 && end == msglen && len >= 3 && len <= 4) {
						str = this.userMessage.slice(0, start);
					} else {
						str = this.userMessage.slice(0, msglen);
					}
				}
				this.userMessage = str;
				this.inputMessage = str;
			},
			sendMessage() {
				let me = this;
				const trimStr = (str) => str.replace(/(^\s*)|(\s*$)/g, "");

				if (!trimStr(this.userMessage)) {
					return;
				}
				let id = WebIM.conn.getUniqueId();
				const msg = new WebIM.message("txt", WebIM.conn.getUniqueId());
				msg.set({
					msg: this.inputValue,
					to: this.username.your, // 对方账号
					from: this.username.myName, // 自己账号
					chatType: "singleChat", // 会话类型
					success: (id, msg) => {
						console.log("消息发送成功", id, msg);
						// 修复：移除对 cancelEmoji 的调用（避免报错）
						// 原代码中如果有 me.$parent.cancelEmoji() 需删除
					},
					error: (err) => {
						console.error("消息发送失败", err);
					}
				});
				WebIM.conn.send(msg.body);

				if (this.chatType == msgType.chatType.CHAT_ROOM) {
					msg.setChatType("groupchat");
				}
				WebIM.conn.send(msg.body);
				let obj = {
					msg: msg,
					type: msgType.TEXT,
				};
				this.saveSendMsg(obj);
				this.userMessage = "";
				this.inputMessage = "";
				uni.hideKeyboard();
			},
			saveSendMsg(evt) {
				msgStorage.saveMsg(evt.msg, evt.type);
			},
			openEmoji() {
				this.$emit('openEmoji')
			},
			openRecordModal() {
				this.$emit('openRecordModal')
			},
			openFunModal() {
				this.$emit('openFunModal')
			}
		},
	};
</script>
<style>
	@import "./main.css";
</style>