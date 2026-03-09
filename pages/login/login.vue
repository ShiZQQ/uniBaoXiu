<template>
	<view class="template-login">
		<view class="login">
			<view class="login__wrapper">
				<view class="tn-margin-left tn-margin-right tn-text-bold"
					style="font-size: 60rpx; margin-top: -200rpx;">
					欢迎回来
				</view>

				<!-- 新增：身份选择框 -->
				<view class="identity-select tn-margin-top-lg tn-margin-left tn-margin-right">
					<view class="tn-text-lg tn-margin-bottom-sm">选择登录身份</view>
					<view class="tn-flex tn-flex-row-around">
						<view class="identity-item" :class="{active: identityType === 'user'}"
							@click="identityType = 'user'">
							<text>用户</text>
						</view>
						<view class="identity-item" :class="{active: identityType === 'repairman'}"
							@click="identityType = 'repairman'">
							<text>维修人员</text>
						</view>
					</view>
				</view>

				<!-- 输入框内容-->
				<view class="login__info tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center">
					<!-- 登录 -->
					<block v-if="currentModeIndex === 0">
						<view
							class="login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left">
							<view class="login__info__item__input__left-icon">
								<view class="tn-icon-phone"></view>
							</view>
							<view class="login__info__item__input__content">
								<input maxlength="20" placeholder-class="input-placeholder" v-model="phone"
									placeholder="请输入手机号" />
							</view>
						</view>

						<view
							class="login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left">
							<view class="login__info__item__input__left-icon">
								<view class="tn-icon-safe"></view>
							</view>
							<view
								class="login__info__item__input__content login__info__item__input__content--verify-code">
								<input placeholder-class="input-placeholder" v-model="password" placeholder="请输入密码" />
							</view>
						</view>
					</block>
					<!-- 注册 -->
					<block v-if="currentModeIndex === 1">
						<view
							class="login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left">
							<view class="login__info__item__input__left-icon">
								<view class="tn-icon-phone"></view>
							</view>
							<view class="login__info__item__input__content">
								<input maxlength="20" placeholder-class="input-placeholder" placeholder="请输入注册手机号码" />
							</view>
						</view>

						<view
							class="login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left">
							<view class="login__info__item__input__left-icon">
								<view class="tn-icon-lock"></view>
							</view>
							<view class="login__info__item__input__content">
								<input :password="!showPassword" placeholder-class="input-placeholder"
									placeholder="请输入登录密码" />
							</view>
							<view class="login__info__item__input__right-icon" @click="showPassword = !showPassword">
								<view :class="[showPassword ? 'tn-icon-eye' : 'tn-icon-eye-hide']"></view>
							</view>
						</view>
					</block>

					<view class="login__info__item__button tn-bg-blue tn-color-white" hover-class="tn-hover"
						@click="login" :hover-stay-time="150">{{ currentModeIndex === 0 ? '登录' : '注册'}}</view>

					<view v-if="currentModeIndex === 1" :class="[{'login__info__item__tips': currentModeIndex === 0}]">
						<view class="tn-flex tn-flex-row-between tn-padding">
							<view class="" @tap.stop="modeSwitch(0)">前往登录</view>
						</view>
					</view>
					<view v-if="currentModeIndex === 0" :class="[{'login__info__item__tips': currentModeIndex === 1}]">
						<view class="tn-flex tn-flex-row-between tn-padding">
							<view class="tn-padding-right" @tap.stop="modeSwitch(1)">账号注册</view>
							<view class="tn-padding-left tn-color-gray">忘记密码</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'

	export default {
		name: 'login-demo-4',
		mixins: [template_page_mixin],
		data() {
			return {
				phone: '',
				password: '',
				currentModeIndex: 0,
				modeSliderStyle: {
					left: 0
				},
				showPassword: false,
				tips: '获取验证码',
				// 新增：身份类型（默认用户）
				identityType: 'user' // user-用户，repairman-维修人员
			}
		},
		watch: {
			currentModeIndex(value) {
				const sliderWidth = uni.upx2px(476 / 2)
				this.modeSliderStyle.left = `${sliderWidth * value}px`
			}
		},

		methods: {
			login() {
				// 空值校验：避免空密码/手机号请求
				if (!this.phone || !this.password) {
					uni.showToast({
						title: '手机号/密码不能为空',
						icon: 'none'
					})
					return
				}

				// 新增：根据身份选择不同接口
				let loginUrl = ''
				if (this.identityType === 'user') {
					loginUrl = 'http://localhost:8099/user/login'
				} else if (this.identityType === 'repairman') {
					loginUrl = 'http://localhost:8099/repairman/login'
				}

				uni.request({
					url: loginUrl, // 使用动态接口地址
					method: 'POST',
					header: {
						'Content-Type': 'application/json'
					},
					data: {
						phone: this.phone,
						password: this.password
					},
					success: (res) => {
						if (res.data.code === "0") {
							// 新增：存储用户信息时，同时存储身份类型
							const userData = {
								...res.data.data,
								identityType: this.identityType // 追加身份标识（确保后端返回的字段完整）
							}
							// 调试：打印维修人员完整信息
							console.log('维修人员登录返回数据：', userData)
							uni.setStorageSync('user', JSON.stringify(userData))
							uni.showToast({
								title: '登录成功',
								icon: 'success'
							})
							uni.navigateTo({
								url: '/pages/index'
							})
						} else {
							uni.showToast({
								title: res.data.msg || '登录失败',
								icon: 'none'
							})
						}
					},
					fail: (err) => {
						console.error('登录请求失败：', err)
						uni.showToast({
							title: '网络错误，请重试',
							icon: 'none'
						})
					}
				})
			},
			modeSwitch(index) {
				this.currentModeIndex = index
				this.showPassword = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/static/css/templatePage/custom_nav_bar.scss';

	// 新增：身份选择样式
	.identity-select {
		padding: 10rpx 20rpx; // 上下内边距从20rpx减到10rpx
		margin-bottom: -90rpx;
	}

	.identity-item {
		width: 35%; // 从45%缩小到35%，减少宽度占比
		height: 68rpx; // 从80rpx降低到68rpx，更纤细
		line-height: 68rpx; // 行高和高度一致，文字垂直居中
		text-align: center;
		border: 1rpx solid #E6E6E6; // 边框从2rpx减到1rpx，更精致
		border-radius: 34rpx; // 圆角随高度等比例调整
		font-size: 28rpx; // 字体从32rpx降到28rpx，适配按钮大小
		transition: all 0.3s;

		&.active {
			border-color: #3165CC;
			background-color: #3165CC;
			color: #FFFFFF;
			box-shadow: 0 4rpx 12rpx rgba(49, 101, 204, 0.2); // 增加轻微阴影，突出选中状态
		}

		// 新增hover效果（非选中状态）
		&:not(.active):hover {
			border-color: #C4D5FF;
			background-color: #F5F8FF;
		}
	}

	.login {
		position: relative;
		height: 100%;
		z-index: 1;

		&__bg {
			z-index: -1;
			position: fixed;

			&--top {
				top: 0;
				left: 0;
				right: 0;
				width: 100%;

				.bg {
					width: 750rpx;
					will-change: transform;
				}
			}

			&--bottom {
				bottom: -10rpx;
				left: 0;
				right: 0;
				width: 100%;
				margin-bottom: env(safe-area-inset-bottom);

				image {
					width: 750rpx;
					will-change: transform;
				}
			}
		}

		&__wrapper {
			margin-top: 300rpx;
			width: 100%;
		}

		&__mode {
			position: relative;
			margin: 0 auto;
			width: 476rpx;
			height: 77rpx;
			margin-top: 100rpx;
			background-color: rgba(255, 255, 255, 0.6);
			box-shadow: 0rpx 10rpx 50rpx 0rpx rgba(0, 3, 72, 0.1);
			border-radius: 39rpx;

			&__item {
				height: 77rpx;
				width: 100%;
				line-height: 77rpx;
				text-align: center;
				font-size: 31rpx;
				color: #080808;
				letter-spacing: 1em;
				text-indent: 1em;
				z-index: 2;
				transition: all 0.4s;

				&--active {
					font-weight: bold;
					color: #FFFFFF;
				}
			}

			&__slider {
				position: absolute;
				height: inherit;
				width: calc(476rpx / 2);
				border-radius: inherit;
				box-shadow: 0rpx 18rpx 72rpx 18rpx rgba(0, 195, 255, 0.1);
				z-index: 1;
				transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
			}
		}

		&__info {
			margin: 80rpx 30rpx 10rpx 30rpx;
			padding-bottom: 0;
			border-radius: 20rpx;

			&__item {

				&__input {
					margin-top: 59rpx;
					width: 100%;
					height: 77rpx;
					border: 1rpx solid #E6E6E6;
					border-radius: 39rpx;

					&__left-icon {
						width: 10%;
						font-size: 44rpx;
						margin-left: 20rpx;
						color: #838383;
					}

					&__content {
						width: 80%;
						padding-left: 10rpx;

						&--verify-code {
							width: 56%;
						}

						input {
							font-size: 24rpx;
						}
					}

					&__right-icon {
						width: 10%;
						font-size: 44rpx;
						margin-right: 20rpx;
						color: #838383;
					}

					&__right-verify-code {
						width: 34%;
						margin-right: 20rpx;
					}
				}

				&__button {
					margin-top: 75rpx;
					margin-bottom: 39rpx;
					width: 100%;
					height: 77rpx;
					text-align: center;
					font-size: 31rpx;
					font-weight: bold;
					line-height: 77rpx;
					letter-spacing: 1em;
					text-indent: 1em;
					border-radius: 39rpx;
					box-shadow: 1rpx 10rpx 24rpx 0rpx rgba(60, 129, 254, 0.35);
				}

				&__tips {
					margin: 30rpx 0;
					color: #AAAAAA;
				}
			}
		}

		&__way {
			margin: 0 auto;
			margin-top: 110rpx;

			&__item {
				&--icon {
					width: 85rpx;
					height: 85rpx;
					font-size: 80rpx;
					margin-bottom: 18rpx;
					position: relative;
					z-index: 1;
				}
			}
		}
	}

	/deep/.input-placeholder {
		font-size: 24rpx;
		color: #838383;
	}
</style>