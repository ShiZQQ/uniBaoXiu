<script>
	import Vue from 'vue'
	// require("sdk/libs/strophe");
	let WebIM = (wx.WebIM = require("./utils/WebIM")["default"]);
	let msgStorage = require("./components/chat/msgstorage");
	let msgType = require("./components/chat/msgtype");
	let disp = require("./utils/broadcast");
	let logout = false;

	function ack(receiveMsg) {
		// 处理未读消息回执
		var bodyId = receiveMsg.id; // 需要发送已读回执的消息id

		var ackMsg = new WebIM.message("read", WebIM.conn.getUniqueId());
		ackMsg.set({
			id: bodyId,
			to: receiveMsg.from,
		});
		WebIM.conn.send(ackMsg.body);
	}

	function onMessageError(err) {
		if (err.type === "error") {
			uni.showToast({
				title: err.errorText,
			});
			return false;
		}

		return true;
	}

	function getCurrentRoute() {
		let pages = getCurrentPages();
		if (pages.length > 0) {
			let currentPage = pages[pages.length - 1];
			return currentPage.route;
		}
		return "/";
	}

	// 包含陌生人版本
	function calcUnReadSpot(message) {
		let myName = uni.getStorageSync("myUsername");
		uni.getStorageInfo({
			success: function(res) {
				let storageKeys = res.keys;
				let newChatMsgKeys = [];
				let historyChatMsgKeys = [];
				storageKeys.forEach((item) => {
					if (item.indexOf(myName) > -1 && item.indexOf("rendered_") == -1) {
						newChatMsgKeys.push(item);
					}
				});
				let count = newChatMsgKeys.reduce(function(result, curMember, idx) {
					let chatMsgs;
					chatMsgs = uni.getStorageSync(curMember) || [];
					return result + chatMsgs.length;
				}, 0);

				getApp().globalData.unReadMessageNum = count;
				disp.fire("em.unreadspot", message);
			},
		});
	}

	function saveGroups() {
		var me = this;
		return WebIM.conn.getGroup({
			limit: 50,
			success: function(res) {
				uni.setStorage({
					key: "listGroup",
					data: res.data,
				});
			},
			error: function(err) {
				console.log(err);
			},
		});
	}

	export default {
		globalData: {
			unReadMessageNum: 0,
			userInfo: null,
			saveFriendList: [],
			saveGroupInvitedList: [],
			isIPX: false, //是否为iphone X
			conn: {
				closed: false,
				curOpenOpt: {},

				open(opt) {
					uni.showLoading({
						title: "正在初始化客户端..",
						mask: true,
					});
					this.curOpenOpt = opt;
					WebIM.conn.open(opt);
					this.closed = false;
				},

				reopen() {
					if (this.closed) {
						//this.open(this.curOpenOpt);
						WebIM.conn.open(this.curOpenOpt);
						this.closed = false;
					}
				},
			},
			onLoginSuccess: function(myName) {
				uni.hideLoading();
				uni.redirectTo({
					url: "../chat/chat?myName=" + myName,
				});
			},

			getUserInfo(cb) {
				var me = this;

				if (this.userInfo) {
					typeof cb == "function" && cb(this.userInfo);
				} else {
					// 调用登录接口
					uni.login({
						success() {
							uni.getUserInfo({
								success(res) {
									me.userInfo = res.userInfo;
									typeof cb == "function" && cb(me.userInfo);
								},
							});
						},
					});
				}
			},

			checkIsIPhoneX: function() {
				const me = this;
				uni.getSystemInfo({
					success: function(res) {
						// 根据 model 进行判断
						if (res.model && res.model.search("iPhone X") != -1) {
							me.isIPX = true;
						}
					},
				});
			},
		},

		onLaunch() {
			// 调用 API 从本地缓存中获取数据
			var me = this;
			var logs = uni.getStorageSync("logs") || [];
			logs.unshift(Date.now());
			uni.setStorageSync("logs", logs); //

			disp.on("em.main.ready", function() {
				calcUnReadSpot();
			});
			disp.on("em.chatroom.leave", function() {
				calcUnReadSpot();
			});
			disp.on("em.chat.session.remove", function() {
				calcUnReadSpot();
			});
			disp.on("em.chat.audio.fileLoaded", function() {
				calcUnReadSpot();
			});
			disp.on("em.main.deleteFriend", function() {
				calcUnReadSpot();
			});
			disp.on("em.chat.audio.fileLoaded", function() {
				calcUnReadSpot();
			}); //

			WebIM.conn.listen({
				onOpened(message) {
					console.log('》》》》环信连接成功~')
					if (
						getCurrentRoute() == "pages/login/login" ||
						getCurrentRoute() == "pages/login_token/login_token"
					) {
						me.globalData.onLoginSuccess(
							uni.getStorageSync("myUsername").toLowerCase()
						);
					}
				},

				onReconnect() {
					uni.showToast({
						title: "重连中...",
						duration: 2000,
					});
				},

				onSocketConnected() {
					uni.showToast({
						title: "socket连接成功",
						duration: 2000,
					});
				},

				onClosed() {
					uni.showToast({
						title: "网络已断开",
						icon: "none",
						duration: 2000,
					});
					uni.redirectTo({
						url: "../login/login",
					});
					me.globalData.conn.closed = true;
					WebIM.conn.close();
				},

				// ========== 全局监听所有收到的消息（整合修复） ==========
				onReceivedMessage(msg) {
				    console.log("【全局收到消息】：", msg);
				
				    // 1. 修复消息类型解析（兼容环信不同版本的字段 + 主动推导文本类型）
				    let currentMsgType = msg.type || msg.msgType || msg.contentsType;
				    
				    // 补充：如果没有type但有消息内容，主动识别为文本消息
				    if (!currentMsgType && (msg.body?.msg || msg.msg || msg.value)) {
				        currentMsgType = "txt";
				    } else if (!currentMsgType) {
				        currentMsgType = "unknown";
				    }
				    console.log("消息类型：", currentMsgType);
				
				    // 2. 分类型处理消息（统一转小写，兼容 TEXT/txt 等情况）
				    switch (currentMsgType.toLowerCase()) { 
				        case "txt":
				        case "text":
				        case "chat":
				            this.onTextMessage(msg); // 文本消息
				            break;
				        case "read":
				            this.onReadMessage(msg); // 已读回执
				            break;
				        case "image":
				            this.onPictureMessage(msg); // 图片消息
				            break;
				        case "audio":
				            this.onAudioMessage(msg); // 语音消息
				            break;
				        case "video":
				            this.onVideoMessage(msg); // 视频消息
				            break;
				        case "file":
				            this.onFileMessage(msg); // 文件消息
				            break;
				        case "emoji":
				            this.onEmojiMessage(msg); // 表情消息
				            break;
				        case "cmd":
				            this.onCmdMessage(msg); // 指令消息
				            break;
				        default:
				            console.log("未处理的消息类型：", currentMsgType);
				            // 兜底：尝试作为文本消息处理（避免消息丢失）
				            if (msg.body?.msg || msg.msg || msg.value) {
				                this.onTextMessage(msg);
				            }
				            break;
				    }
				
				    // 3. 触发聊天页刷新（广播消息）
				    disp.fire("em.chat.message", msg);
				},

				// 修复：整合后的 onTextMessage（删除重复，保留完整版）
				onTextMessage(msg) {
				    console.log("onTextMessage 处理消息：", msg);
				    try {
				        // 确保消息字段完整（兼容发送/接收双向场景，全字段兜底）
				        const sendableMsg = {
				            id: msg.id || msg.mid || WebIM.conn.getUniqueId(), // 兜底生成唯一ID
				            type: "txt",
				            body: {
				                msg: msg.body?.msg || msg.msg || msg.value || "", // 兼容多字段路径
				                from: msg.from || uni.getStorageSync("myUsername"), // 发送方
				                to: msg.to || (msg.data?.to || ""), // 接收方
				                chatType: msg.chatType || "singleChat" // 聊天类型兜底
				            },
				            value: msg.body?.msg || msg.msg || msg.value || "",
				            time: msg.time || new Date().getTime().toString(),
				            from: msg.from || uni.getStorageSync("myUsername"),
				            to: msg.to || ""
				        };
				        // 存储消息到本地缓存
				        msgStorage.saveReceiveMsg(sendableMsg, msgType.TEXT);
				        // 触发未读数更新
				        calcUnReadSpot(sendableMsg);
				        // 发送已读回执
				        ack(sendableMsg);
				        console.log("文本消息处理完成，已存储：", sendableMsg);
				    } catch (e) {
				        console.error("文本消息处理失败：", e);
				    }
				},

				// 修复：空实现 cancelEmoji，避免组件调用报错
				cancelEmoji: function() {
					console.log("cancelEmoji 调用（空实现，仅兼容）");
				},

				onInviteMessage(message) {
					me.globalData.saveGroupInvitedList.push(message);
					disp.fire("em.invite.joingroup", message);
				},

				onReadMessage(message) {
					console.log("已读回执消息：", message);
				},

				// onPresence为旧版 ，建议参考最新增删好友api文档 ：http://docs-im.easemob.com/im/web/basics/buddy
				onPresence(message) {
					switch (message.type) {
						case "unsubscribe":
							break;
						case "subscribe":
							for (let i = 0; i < me.globalData.saveFriendList.length; i++) {
								if (me.globalData.saveFriendList[i].from === message.from) {
									me.globalData.saveFriendList[i] = message;
									disp.fire("em.subscribe");
									return;
								}
							}
							msgStorage.saveReceiveMsg(message, 'INFORM');
							me.globalData.saveFriendList.push(message);
							disp.fire("em.subscribe");
							break;
						case "subscribed":
							uni.showToast({
								title: "添加成功",
								duration: 1000,
							});
							disp.fire("em.subscribed");
							break;
						case "unsubscribed":
							disp.fire("em.unsubscribed");
							break;
						case "direct_joined":
							saveGroups();
							uni.showToast({
								title: "已进群",
								duration: 1000,
							});
							break;
						case "memberJoinPublicGroupSuccess":
							saveGroups();
							uni.showToast({
								title: "已进群",
								duration: 1000,
							});
							break;
						case "invite":
							for (let i = 0; i < me.globalData.saveGroupInvitedList.length; i++) {
								if (me.globalData.saveGroupInvitedList[i].from === message.from) {
									me.globalData.saveGroupInvitedList[i] = message;
									disp.fire("em.invite.joingroup")
									return;
								}
							}
							me.globalData.saveGroupInvitedList.push(message);
							disp.fire("em.invite.joingroup");
							msgStorage.saveReceiveMsg(message, 'INFORM');
							break;
						case "unavailable":
							disp.fire("em.contacts.remove");
							disp.fire("em.group.leaveGroup", message);
							break;
						case "deleteGroupChat":
							disp.fire("em.invite.deleteGroup", message);
							break;
						case "leaveGroup":
							disp.fire("em.group.leaveGroup", message);
							break;
						case "removedFromGroup":
							disp.fire("em.group.leaveGroup", message);
							break;
						default:
							break;
					}
				},

				onRoster(message) {
					// 好友列表变更监听（预留）
				},

				onVideoMessage(message) {
					console.log("onVideoMessage: ", message);
					if (message && onMessageError(message)) {
						msgStorage.saveReceiveMsg(message, msgType.VIDEO);
						calcUnReadSpot(message);
						ack(message);
					}
				},

				onAudioMessage(message) {
					console.log("onAudioMessage", message);
					if (message && onMessageError(message)) {
						msgStorage.saveReceiveMsg(message, msgType.AUDIO);
						calcUnReadSpot(message);
						ack(message);
					}
				},

				onCmdMessage(message) {
					console.log("onCmdMessage", message);
					if (message && onMessageError(message)) {
						msgStorage.saveReceiveMsg(message, msgType.CMD);
						calcUnReadSpot(message);
						ack(message);
					}
				},

				onEmojiMessage(message) {
					console.log("onEmojiMessage", message);
					if (message && onMessageError(message)) {
						msgStorage.saveReceiveMsg(message, msgType.EMOJI);
						calcUnReadSpot(message);
						ack(message);
					}
				},

				onPictureMessage(message) {
					console.log("onPictureMessage", message);
					if (message && onMessageError(message)) {
						msgStorage.saveReceiveMsg(message, msgType.IMAGE);
						calcUnReadSpot(message);
						ack(message);
					}
				},

				onFileMessage(message) {
					console.log("onFileMessage", message);
					if (message && onMessageError(message)) {
						msgStorage.saveReceiveMsg(message, msgType.FILE);
						calcUnReadSpot(message);
						ack(message);
					}
				},

				// 各种异常处理
				onError(error) {
					console.log("环信SDK错误：", error);
					if (error.type == WebIM.statusCode.WEBIM_CONNCTION_OPEN_ERROR) {
						uni.hideLoading();
						disp.fire("em.error.passwordErr");
					}
					if (error.type == WebIM.statusCode.WEBIM_CONNCTION_AUTH_ERROR) {
						uni.hideLoading();
						disp.fire("em.error.tokenErr");
					}
					if (error.type == "socket_error") {
						console.log("socket连接错误：", error);
						uni.showToast({
							title: "网络已断开",
							icon: "none",
							duration: 2000,
						});
						disp.fire("em.error.sendMsgErr", error);
					}
				},
			});
			this.globalData.checkIsIPhoneX();
		},

		methods: {},
	};
</script>
<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import './tuniao-ui/index.scss';
	@import './tuniao-ui/iconfont.css';
	@import "./app.css";
	@import "uview-ui/index.scss";
</style>