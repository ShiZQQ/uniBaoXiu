<template>
	<view class="components-form">
		<view :style="{paddingTop: '5px'}" class="page-container">
			<view class="order-details">
				<!-- 订单基础信息 -->
				<view class="order-info">
					<view class="order-number">订单号：{{ orderData.id || '暂无' }}</view>
					<view class="order-text">报修内容：{{ orderData.note || '暂无' }}</view>
					<view class="order-text">报修类型：{{ orderData.repairClass || '暂无' }}</view>
					<view class="order-text">报修地点：{{ orderData.park || '暂无' }}-{{ orderData.place || '暂无' }}</view>
					<view class="order-text">报修时间：{{ orderData.time || '暂无' }}</view>
					<view class="order-text">订单状态：{{ orderData.state || '暂无' }}</view>
				</view>

				<!-- 维修人员信息（仅显示姓名） -->
				<view class="repairman-info" v-if="orderData.repairmanName">
					<view class="repairman-name">维修人员：{{ orderData.repairmanName }}</view>
				</view>

				<!-- 按钮组：改用原生button，保证视觉可见 -->
				<view class="button-group">
					<!-- 普通用户登录：联系维修人员（原生按钮） -->
					<button v-if="userInfo.identityType === 'user'" class="btn primary-btn" @click="toChatPage">
						联系维修人员
					</button>

					<!-- 维修人员登录：联系报修人 + 驳回按钮 -->
					<template v-if="userInfo.identityType === 'repairman'">
						<button class="btn primary-btn" @click="toChatPage">
							联系报修人
						</button>
						<button class="btn danger-btn" @click="handleRejectOrder">
							驳回订单
						</button>
					</template>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderId: '', // 当前订单ID
				orderData: {}, // 订单详情数据
				userInfo: {}, // 当前登录用户信息
				tips: '',
				sectionList: [],
				form: {},
				// 移除写死的环信账号，改为动态获取
				// HuanXinUserName:'hfp',
				// HuanXinPassword:'1',
				// HuanXinServiceId:'pfh'
			}
		},
		onLoad(options) {
			if (options.id) {
				this.orderId = options.id
				this.getUserInfo()
				this.getOrderDetail()
			} else {
				uni.showToast({
					title: '订单ID不能为空',
					icon: 'none'
				})
				uni.navigateBack()
			}
			// 登录环信（移到 getUserInfo 之后，确保已获取用户手机号）
			// this.loginHx() 
		},
		methods: {
			// 获取当前登录用户信息
			getUserInfo() {
				const userStr = uni.getStorageSync('user')
				if (userStr) {
					this.userInfo = JSON.parse(userStr)
					console.log('当前用户身份：', this.userInfo.identityType)
					if (!this.userInfo.identityType) {
						uni.showToast({
							title: '用户身份异常，请重新登录',
							icon: 'none'
						})
						uni.navigateTo({
							url: '/pages/login/login'
						})
					} else {
						// 获取用户信息后，动态登录环信（手机号作为账号，需确保环信后台密码统一，或从接口获取）
						this.loginHx();
					}
				} else {
					uni.showToast({
						title: '请先登录',
						icon: 'none'
					})
					uni.navigateTo({
						url: '/pages/login/login'
					})
				}
			},

			// 根据订单ID查询详情
			getOrderDetail() {
				uni.showLoading({
					title: '加载中...'
				})
				uni.request({
					url: `http://localhost:8099/warranty/searchId/${this.orderId}`,
					method: 'GET',
					success: (res) => {
						uni.hideLoading()
						if (res.data.code === '0') {
							this.orderData = res.data.data
							console.log('订单数据：', this.orderData)
						} else {
							uni.showToast({
								title: res.data.msg || '查询失败',
								icon: 'none'
							})
							uni.navigateBack()
						}
					},
					fail: (err) => {
						uni.hideLoading()
						console.error('订单详情请求失败：', err)
						uni.showToast({
							title: '网络错误，请重试',
							icon: 'none'
						})
					}
				})
			},

			// 用户端：联系维修人员（动态传递维修人员手机号）
			handleContactRepairman() {
				if (!this.orderData.repairmanName || !this.orderData.repairmanPhone) {
					uni.showToast({
						title: '暂无维修人员信息',
						icon: 'none'
					})
					return
				}
				uni.navigateTo({
					url: `/pages/message_details/message_details?type=repairman&name=${encodeURIComponent(this.orderData.repairmanName)}&phone=${encodeURIComponent(this.orderData.repairmanPhone)}&idNumber=${encodeURIComponent(this.orderData.repairmanNumber || '暂无')}&orderId=${this.orderId}`
				})
			},

			// 维修人员端：联系报修人（动态传递报修人手机号）
			handleContactUser() {
				if (!this.orderData.userName || !this.orderData.userPhone) {
					uni.showToast({
						title: '暂无报修人信息',
						icon: 'none'
					})
					return
				}
				uni.navigateTo({
					url: `/pages/message_details/message_details?type=user&name=${encodeURIComponent(this.orderData.userName)}&phone=${encodeURIComponent(this.orderData.userPhone)}&idNumber=${encodeURIComponent(this.orderData.userNumber || '暂无')}&orderId=${this.orderId}`
				})
			},

			// 登陆环信（动态使用当前用户手机号作为账号）
			// 登陆环信（优化版：增加异步回调、登录态校验）
			loginHx() {
				return new Promise((resolve, reject) => {
					// 1. 校验手机号
					const hxUserName = this.userInfo.phone;
					const hxPassword = '123';
					if (!hxUserName) {
						uni.showToast({
							title: '未获取到用户手机号，无法登录聊天',
							icon: 'none'
						});
						reject('手机号为空');
						return;
					}

					// 2. 先检查环信是否已登录，避免重复登录
					if (uni.WebIM.conn?.isOpened()) {
						console.log('环信已登录，无需重复登录');
						resolve();
						return;
					}

					// 3. 环信登录（异步操作，需监听回调）
					uni.WebIM.conn.open({
							user: hxUserName,
							pwd: hxPassword,
							appKey: uni.WebIM.config.appkey,
						},
						// 登录成功回调
						() => {
							console.log('环信登录成功：', hxUserName);
							uni.setStorage({
								key: "myUsername",
								data: hxUserName
							});
							resolve();
						},
						// 登录失败回调
						(err) => {
							console.error('环信登录失败：', err);
							uni.showToast({
								title: '聊天登录失败，请重试',
								icon: 'none'
							});
							reject(err);
						});
				});
			},

			// 进入聊天页面（动态传递对方手机号）
			// order_details.vue 中 toChatPage 方法
			toChatPage() {
			  console.log('>>>>>>>>>执行进入chat页面')
			  let myName = this.userInfo.phone; // 自己的手机号（当前登录用户）
			  let yourName = ''; // 对方的手机号
			
			  // 根据用户身份，获取对方手机号
			  if (this.userInfo.identityType === 'user') {
			    // 普通用户：对方是维修人员
			    yourName = this.orderData.repairmanPhone;
			  } else if (this.userInfo.identityType === 'repairman') {
			    // 维修人员：对方是报修人
			    yourName = this.orderData.userPhone;
			  }
			
			  if (!yourName) {
			    uni.showToast({
			      title: '未获取到对方联系方式',
			      icon: 'none'
			    });
			    return;
			  }
			
			  var nameList = {
			    myName: myName, // 必须传递：自己的账号
			    your: yourName, // 必须传递：对方的账号
			    yourNickName: this.userInfo.identityType === 'user' 
			      ? this.orderData.repairmanName 
			      : this.orderData.userName // 对方昵称（可选）
			  };
			
			  // 修复：使用 encodeURIComponent 避免参数解析失败
			  uni.navigateTo({
			    url: `../chatroom/chatroom?username=${encodeURIComponent(JSON.stringify(nameList))}`,
			  });
			},

			// 维修人员端：驳回订单
			handleRejectOrder() {
				// 原逻辑不变
				uni.showModal({
					title: '确认驳回',
					content: '是否确认驳回该报修单？',
					success: (res) => {
						if (res.confirm) {
							uni.showLoading({
								title: '处理中...'
							})
							uni.request({
								url: `http://localhost:8099/warranty/update/${this.orderId}`,
								method: 'POST',
								header: {
									'Content-Type': 'application/json'
								},
								data: {
									state: '审核驳回'
								},
								success: (res) => {
									uni.hideLoading()
									if (res.data.code === '0') {
										uni.showToast({
											title: '驳回成功',
											icon: 'success'
										})
										this.orderData.state = '审核驳回'
									} else {
										uni.showToast({
											title: res.data.msg || '驳回失败',
											icon: 'none'
										})
									}
								},
								fail: (err) => {
									uni.hideLoading()
									console.error('驳回订单请求失败：', err)
									uni.showToast({
										title: '网络错误，请重试',
										icon: 'none'
									})
								}
							})
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page-container {
		min-height: 100vh;
		background-color: #f5f5f5;
		padding: 10rpx; // 增加页面内边距，避免内容贴边
	}

	.order-details {
		padding: 30rpx; // 增加内边距，提升视觉效果
		background-color: #fff;
		border-radius: 15rpx;
		box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.05); // 增加阴影，区分层级
	}

	.order-info {
		margin-bottom: 40rpx;
	}

	.order-number {
		font-weight: bold;
		font-size: 32rpx;
		color: #333;
		margin-bottom: 20rpx;
		padding-bottom: 20rpx;
		border-bottom: 1rpx solid #eee;
	}

	.order-text {
		font-size: 28rpx;
		color: #666;
		line-height: 1.8;
		margin-bottom: 15rpx;
	}

	.repairman-info {
		margin-bottom: 40rpx;
		padding-top: 20rpx;
		border-top: 1rpx solid #eee;
	}

	.repairman-name {
		font-size: 28rpx;
		color: #333;
		font-weight: 500;
	}

	// 按钮组样式优化
	.button-group {
		display: flex;
		gap: 20rpx;
		margin-top: 30rpx;
	}

	// 通用按钮样式
	.btn {
		flex: 1;
		height: 88rpx; // 适配移动端点击区域
		line-height: 88rpx;
		border-radius: 10rpx;
		font-size: 28rpx;
		border: none;
		color: #fff;
		text-align: center;
	}

	// 主按钮（蓝色）
	.primary-btn {
		background-color: #007aff; // uniapp原生主色调
	}

	// 危险按钮（红色）
	.danger-btn {
		background-color: #ff3b30; // uniapp原生危险色调
	}

	// 按钮点击态
	.btn:active {
		opacity: 0.8;
	}
</style>