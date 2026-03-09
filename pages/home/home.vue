<template>
	<view class="template-mine tn-safe-area-inset-bottom">
		<view class="content">
			<tn-swiper :list="list" :effect3d="true"></tn-swiper>
		</view>
		<view class="about-shadow tn-margin-top-lg tn-padding-top-sm tn-padding-bottom-sm tn-bg-white">
			<tn-button :plain="true" size="lg" width="700rpx" :shadow="true" :fontBold="true"
				margin="50rpx 0rpx 0rpx 25rpx" @click="ToGuarantee">
				报修
			</tn-button>
			<tn-button :plain="true" size="lg" width="700rpx" :shadow="true" :fontBold="true"
				margin="100rpx 0rpx 0rpx 25rpx" @click="ToNotice">
				新闻
			</tn-button>
			<tn-button :plain="true" size="lg" width="700rpx" :shadow="true" :fontBold="true"
				margin="100rpx 0rpx 0rpx 25rpx" @click="ToComplain">
				投诉
			</tn-button>
		</view>
	</view>
</template>

<script>
	export default {
		// 按钮属性定义
		props: {
			shadow: {
				type: Boolean,
				default: false
			},
			width: {
				type: String,
				default: '500rpx'
			},
			height: {
				type: String,
				default: ''
			},
			size: {
				type: String,
				default: ''
			},
			fontBold: {
				type: Boolean,
				default: false
			},
			padding: {
				type: String,
				default: '0 30rpx'
			},
			margin: {
				type: String,
				default: ''
			},
			plain: {
				type: Boolean,
				default: false
			},
			border: {
				type: Boolean,
				default: true
			},
			borderBold: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				list: [{
						image: '/static/img/spring.jpg',
						title: '图1'
					},
					{
						image: '/static/img/spring.jpg',
						title: '2'
					},
					{
						image: '/static/img/spring.jpg',
						title: '3'
					},
				],
				title: 'home',
				user: null // 仅保留用户信息，移除环信相关变量
			}
		},
		onLoad() {},
		onShow() {
			this.loadUserInfo()
		},
		methods: {
			homeOnShow() {
				console.log("homeOnShow");
			},
			ToGuarantee() {
				uni.navigateTo({
					url: '/pages/guarantee/guarantee'
				});
			},
			ToComplain() {
				uni.navigateTo({
					url: '/pages/complain/complain'
				});
			},
			ToNotice() {
				uni.navigateTo({
					url: '/pages/notice/notice'
				});
			}
		},
		loadUserInfo() {
			try {
				// 修复：统一用uni API，兼容所有端
				const userInfo = uni.getStorageSync("user")
				if (userInfo) {
					this.user = JSON.parse(userInfo)
					console.log('用户信息：', this.user);
				} else {
					console.warn('未获取到用户登录信息');
					// 未登录自动跳转登录页
					uni.navigateTo({
						url: '/pages/login/login'
					})
				}
			} catch (e) {
				console.error('读取用户信息失败：', e)
				this.user = null
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		margin-top: 30rpx;
	}

	.mine {
		max-height: 100vh;
	}

	.tn-tabbar-height {
		min-height: 120rpx;
		height: calc(140rpx + env(safe-area-inset-bottom) / 2);
		height: calc(140rpx + constant(safe-area-inset-bottom));
	}

	.tn-color-cat {
		color: #1D2541;
	}

	.tn-bg-cat {
		background-color: #1D2541;
	}

	.custom-nav {
		height: 100%;

		&__back {
			margin: auto 5rpx;
			font-size: 40rpx;
			margin-right: 10rpx;
			flex-basis: 5%;
			width: 100rpx;
			position: absolute;
		}
	}

	.about-shadow {
		border-radius: 15rpx;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
	}

	.about {
		&__wrap {
			position: relative;
			z-index: 1;
			margin: 20rpx 30rpx;
		}
	}

	.icon15,
	.icon20,
	.icon12,
	.icon1 {
		&__item {
			width: 30%;
			background-color: #FFFFFF;
			border-radius: 10rpx;
			padding: 30rpx;
			margin: 20rpx 10rpx;
			transform: scale(1);
			transition: transform 0.3s linear;
			transform-origin: center center;

			&--icon {
				border-radius: 50%;
				position: relative;
				z-index: 1;

				&::after {
					content: " ";
					position: absolute;
					z-index: -1;
					width: 100%;
					height: 100%;
					left: 0;
					bottom: 0;
					border-radius: inherit;
					opacity: 1;
					transform: scale(1, 1);
					background-size: 100% 100%;
				}
			}
		}
	}

	.icon15__item--icon {
		width: 100rpx;
		height: 100rpx;
		font-size: 60rpx;
		margin-bottom: 18rpx;
	}

	.icon20__item--icon {
		width: 100rpx;
		height: 100rpx;
		font-size: 60rpx;
		margin-bottom: 18rpx;

		&::after {
			background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg.png);
		}
	}

	.icon12__item--icon {
		width: 15rpx;
		height: 15rpx;
		font-size: 50rpx;
		margin-bottom: 38rpx;
	}

	.icon1__item--icon {
		width: 40rpx;
		height: 40rpx;
		font-size: 40rpx;

		&::after {
			background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg.png);
		}
	}

	.tn-three {
		position: absolute;
		top: 50%;
		right: 50%;
		bottom: 50%;
		left: 50%;
		transform: translate(-38rpx, -16rpx) rotateX(30deg) rotateY(20deg) rotateZ(-30deg);
		text-shadow: -1rpx 2rpx 0 #f0f0f0, -2rpx 4rpx 0 #f0f0f0, -10rpx 20rpx 30rpx rgba(0, 0, 0, 0.2);
	}

	.button-vip {
		width: 100%;
		height: 150rpx;
		border-radius: 15rpx;
		position: relative;
		z-index: 1;

		&::after {
			content: " ";
			position: absolute;
			z-index: -1;
			width: 100%;
			height: 100%;
			left: 0;
			bottom: 0;
			border-radius: inherit;
			opacity: 1;
			transform: scale(1, 1);
			background-size: 100% 100%;
			background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg.png);
		}
	}

	.top-backgroup {
		height: 450rpx;
		z-index: -1;

		.backgroud-image {
			width: 100%;
			height: 450rpx;
		}
	}
</style>