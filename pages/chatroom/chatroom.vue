<template>
	<chat id="chat" :username="username" ref="chat" chatType="singleChat" @onClickInviteMsg="onClickMsg"></chat>
</template>

<script>
	let disp = require("../../utils/broadcast");
	import chat from "../../components/chat/chat.vue";

	export default {
		data() {
			return {
				username: {
					myName: "", // 补充自己的账号（必填）
					your: "" // 对方账号
				}
			};
		},
		components: {
			chat
		},
		onLoad(options) {
			try {
				// 1. 修复参数解析异常
				let username = JSON.parse(decodeURIComponent(options.username));
				this.username = username;
				uni.username = username;

				// 2. 修复标题渲染（优先显示昵称，无则显示手机号）
				uni.setNavigationBarTitle({
					title: username.yourNickName || username.your || "聊天窗口"
				});

				// 3. 监听全局消息，触发聊天组件刷新（替换错误的 getMsg 调用）
				// chatroom.vue 中 onLoad 内的 disp.on("em.chat.message") 逻辑
				disp.on("em.chat.message", (msg) => {
					this.$nextTick(() => { // 确保DOM渲染完成
						if (this.$refs.chat) {
							// 优先使用组件内置方法，增加容错
							try {
								if (this.$refs.chat.renderMsg) {
									this.$refs.chat.renderMsg(msg); // 渲染新消息
								} else if (this.$refs.chat.getMore) {
									this.$refs.chat.getMore(); // 加载历史消息（备选）
								}
								// 补充：强制更新组件
								this.$refs.chat.$forceUpdate();
							} catch (e) {
								console.error("渲染消息失败：", e);
							}
						}
					});
				});
			} catch (e) {
				console.error("聊天页参数解析失败：", e);
				uni.showToast({
					title: "进入聊天失败",
					icon: "none"
				});
				uni.navigateBack();
			}
		},
		onUnload() {
			// 移除全局监听，避免内存泄漏
			disp.off("em.chat.message");
			disp.fire("em.chatroom.leave");
		},
		onPullDownRefresh() {
			uni.showNavigationBarLoading();
			// 修复下拉刷新逻辑（仅调用存在的方法）
			if (this.$refs.chat && this.$refs.chat.getMore) {
				this.$refs.chat.getMore().finally(() => {
					uni.hideNavigationBarLoading();
					uni.stopPullDownRefresh();
				});
			} else {
				uni.hideNavigationBarLoading();
				uni.stopPullDownRefresh();
			}
		},
		methods: {
			onClickMsg(msg) {
				msg.action = 'join';
				uni.navigateTo({
					url: `../emedia/index?srcData=${encodeURIComponent(JSON.stringify(msg))}`
				});
			},
			onNavigationBarButtonTap(e) {
				// 修复参数传递（encodeURIComponent 避免特殊字符）
				uni.navigateTo({
					url: `/pages/moreMenu/moreMenu?username=${encodeURIComponent(this.username.your)}&type=singleChat`
				});
			}
		}
	};
</script>
<style>
	@import "./chatroom.css";
</style>