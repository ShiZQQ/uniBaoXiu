<template>
	<view class="template-about tn-safe-area-inset-bottom">
		<view class="top-backgroup">
			<image src='/static/img//my-bg3.png' mode='widthFix' class='backgroud-image'></image>
		</view>

		<view class="about__wrap">
			<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin-bottom">
				<view class="justify-content-item">
					<view class="tn-flex tn-flex-col-center tn-flex-row-left" @click="ToUpdate">
						<view class="tn-padding-right tn-color-white">
							<view class="tn-padding-right tn-padding-left-sm tn-text-xxl">
								{{user.name}}
							</view>
							<view class="tn-padding-right tn-padding-top-xs tn-padding-left-sm tn-text-ellipsis">
								点击修改个人资料
							</view>
						</view>
					</view>
				</view>
			</view>

			<!-- 更多信息：根据身份动态展示（适配字段名差异） -->
			<tn-list-view title="个人信息" :card="true" unlined="all" backgroundColor="#229bf9">
				<!-- 动态字段：用户显示学号(userNumber)，维修人员显示工号(number) -->
				<tn-list-cell :arrow="true" :value="user.identityType === 'user' ? user.userNumber : user.number"
					:key="user-number">
					{{ user.identityType === 'user' ? '学号' : '工号' }}：{{ user.identityType === 'user' ? user.userNumber : user.number }}
				</tn-list-cell>

				<!-- 动态字段：用户显示班级，维修人员显示维修方向 -->
				<tn-list-cell v-if="user.identityType === 'user'" :arrow="true" :value="user.studentClass">
					班级：{{ user.studentClass }}
				</tn-list-cell>
				<tn-list-cell v-if="user.identityType === 'repairman'" :arrow="true" :value="user.classification"
					:key="repair-direction">
					维修方向：{{ user.classification || '未填写' }}
				</tn-list-cell>

				<!-- 通用字段：联系方式 -->
				<tn-list-cell :arrow="true" :value="user.phone" :key="user-phone">联系方式：{{ user.phone }}</tn-list-cell>

				<!-- 仅用户显示：楼栋、入学时间 -->
				<tn-list-cell v-if="user.identityType === 'user'" :arrow="true" :value="user.dorm" :key="user-dorm">
					楼栋：{{ user.dorm }}
				</tn-list-cell>
				<tn-list-cell v-if="user.identityType === 'user'" :arrow="true" :value="user['startSchoolDate']"
					key="user-start-school-date">
					入学时间：{{ user['startSchoolDate'] }}
				</tn-list-cell>

				<!-- 仅维修人员显示：在班情况 -->
				<tn-list-cell v-if="user.identityType === 'repairman'" :arrow="true" :value="user.workSituation || '未填写'"
					key="repair-work-situation">
					在班情况：{{ user.workSituation || '未填写' }}
				</tn-list-cell>
			</tn-list-view>
		</view>
		<view class="tn-padding-xl"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					// 初始化所有可能用到的字段，避免渲染时undefined
					identityType: '',
					name: '',
					userNumber: '',
					number: '', // 维修人员工号
					studentClass: '',
					classification: '', // 维修方向
					phone: '',
					dorm: '',
					startSchoolDate: '',
					workSituation: '' // 新增：维修人员在班情况
				}
			}
		},
		onShow() {
			this.loadUserInfo()
		},
		methods: {
			tn(e) {
				uni.navigateTo({
					url: e
				});
			},
			userOnShow() {
				console.log("userOnShow")
				this.loadUserInfo() // 切换到个人页时重新加载用户信息
			},
			ToUpdate() {
				uni.navigateTo({
					url: '/pages/user_update/user_update'
				});
			},
			loadUserInfo() {
				try {
					const userStr = uni.getStorageSync("user")
					if (userStr) {
						this.user = JSON.parse(userStr)
						// 调试：打印用户信息和身份类型，确认字段是否正确
						console.log('当前登录用户信息：', this.user)
						console.log('当前身份类型：', this.user.identityType)
						console.log('用户学号：', this.user.userNumber)
						console.log('维修人员工号：', this.user.number)
						console.log('维修方向：', this.user.classification) 
						console.log('在班情况：', this.user.workSituation)
					} else {
						uni.navigateTo({
							url: '/pages/login/login'
						})
					}
				} catch (e) {
					console.error('读取用户信息失败：', e)
					// 异常时重置为初始值，避免页面报错
					this.user = {
						identityType: '',
						name: '',
						userNumber: '',
						number: '',
						studentClass: '',
						classification: '',
						phone: '',
						dorm: '',
						startSchoolDate: '',
						workSituation: ''
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/static/css/templatePage/custom_nav_bar.scss';

	.template-about {}

	.top-backgroup {
		height: 450rpx;
		z-index: -1;

		.backgroud-image {
			width: 100%;
			height: 450rpx;
		}
	}

	.logo-image {
		width: 120rpx;
		height: 120rpx;
		position: relative;
	}

	.logo-pic {
		background-size: cover;
		background-repeat: no-repeat;
		border-radius: 50%;
		overflow: hidden;
		background-color: #FFFFFF;
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
			margin-top: -230rpx;
		}
	}

	.icon1 {
		&__item {
			background-color: #FFFFFF;
			border-radius: 10rpx;
			padding: 30rpx;
			margin: 20rpx 10rpx;
			transform: scale(1);
			transition: transform 0.3s linear;
			transform-origin: center center;

			&--icon {
				width: 40rpx;
				height: 40rpx;
				font-size: 28rpx;
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
					background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg.png);
				}
			}
		}
	}

	.footerfixed {
		position: fixed;
		width: 100%;
		bottom: 0;
		z-index: 999;
		background-color: #FFFFFF;
		box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
	}

	.tabbar {
		display: flex;
		align-items: center;
		min-height: 110rpx;
		justify-content: space-between;
		padding: 0;
		height: calc(110rpx + env(safe-area-inset-bottom) / 2);
		padding-bottom: calc(env(safe-area-inset-bottom) / 2);
	}

	.tabbar .action {
		font-size: 22rpx;
		position: relative;
		flex: 1;
		text-align: center;
		padding: 0;
		display: block;
		height: auto;
		line-height: 1;
		margin: 0;
		overflow: initial;
	}

	.tabbar .action .bar-icon {
		width: 100rpx;
		position: relative;
		display: block;
		height: auto;
		margin: 0 auto 10rpx;
		text-align: center;
		font-size: 42rpx;
	}

	.tabbar .action .bar-icon image {
		width: 50rpx;
		height: 50rpx;
		display: inline-block;
	}

	.icon12 {
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
				width: 100rpx;
				height: 100rpx;
				font-size: 60rpx;
				margin-bottom: 0rpx;
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

	.icon11 {
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
				width: 100rpx;
				height: 100rpx;
				font-size: 60rpx;
				border-radius: 50%;
				margin-bottom: 18rpx;
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
		}
	}

	.dong {
		z-index: 9999;
		position: fixed;
		top: -40px;
		right: -80px;
		transform: scale(0.24);
		-webkit-transform: scale(0.24);
		-moz-transform: scale(0.24);
	}

	.monster {
		transform: rotate(-50deg);
		-ms-transform: rotate(-50deg);
		-moz-transform: rotate(-50deg);
		-webkit-transform: rotate(-50deg);
		-o-transform: rotate(-50deg);
		display: flex;
		justify-content: center;
		position: relative;
		width: 170px;
		height: 400px;
		border-top-left-radius: 200px;
		border-top-right-radius: 200px;
		background-color: #3C47D7;
		box-shadow: 20px 20px 60px #4650E5;
	}

	.monster__face {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		position: absolute;
		top: 14%;
		width: 75%;
		height: 160px;
	}

	.monster__noses {
		top: 50%;
		display: flex;
		justify-content: space-between;
		width: 28%;
		height: auto;
		margin-bottom: 10px;
	}

	.monster__nose {
		width: 8px;
		height: 12px;
		border-radius: 20px;
		background: rgba(0, 0, 0, 0.5);
		box-shadow: 4px 8px 5px rgba(0, 0, 0, 0.1);
	}

	.monster__mouth {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		width: 100%;
		height: 0%;
		overflow: hidden;
		border: 25px solid #FFC333;
		border-radius: 100px;
		background-color: #810332;
		animation: mouth 1.75s infinite;
		box-shadow: 4px 8px 5px rgba(0, 0, 0, 0.2);
		box-sizing: border-box;
	}

	.monster__mouth::before {
		content: '';
		position: absolute;
		width: 150px;
		height: 80px;
		border-radius: 100px;
		background-color: #400018;
	}

	.monster__mouth::after {
		content: '';
		position: absolute;
		bottom: -80px;
		width: 160px;
		height: 80px;
		border-top-left-radius: 50%;
		border-top-right-radius: 50%;
		background-color: #DC1B50;
		animation: tongue 1.75s infinite;
	}

	.monster__top {
		position: absolute;
		top: -30px;
		width: 170px;
		height: 30px;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
		background-color: #ffffff;
		z-index: 100;
		animation: t 1.75s infinite;
	}

	.monster__bottom {
		position: absolute;
		bottom: 0;
		width: 100px;
		height: 30px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		background-color: #ffffff;
		z-index: 100;
		animation: b 1.75s infinite;
	}

	.avatar-eye {
		position: absolute;
		top: -10%;
		width: 65px;
		height: 65px;
		background: linear-gradient(105deg, white, #cb87f4);
		border-radius: 100%;
		box-shadow: 4px 8px 5px rgba(0, 0, 0, 0.2);
		margin: 3px;
		-webkit-transform: translateX(-50%);
		transform: translateX(-50%);
	}

	.avatar-eye--green {
		background: linear-gradient(to bottom, #fdfdfd, #c3efea);
	}

	.avatar-eye--violet {
		background: linear-gradient(to bottom, #fdfdfd, #e6d6f6);
	}

	.eye--left {
		left: 10%;
	}

	.eye--right {
		left: 85%;
	}

	.eye--center {
		left: 45%;
		top: 10%;
	}

	.avatar-eye-pupil {
		position: absolute;
		width: 55%;
		height: 55%;
		left: 50%;
		top: 25%;
		-webkit-transform: translate(-50%);
		transform: translate(-50%);
		z-index: 100;
		border-radius: 100%;
	}

	.pupil--green {
		background: linear-gradient(135deg, rgba(188, 248, 177, 0.7), #2fa38c 75%);
	}

	.pupil--pink {
		background: linear-gradient(135deg, #f1a183, #8535cd);
	}

	.avatar-eye-pupil-blackThing {
		position: absolute;
		width: 55%;
		height: 55%;
		left: 50%;
		top: 25%;
		background: #2c2f32;
		-webkit-transform: translate(-50%);
		transform: translate(-50%);
		border-radius: 100%;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	}

	.avatar-eye-pupil-lightReflection {
		position: absolute;
		width: 7px;
		height: 7px;
		left: 25%;
		top: 10%;
		background: #ebebeb;
		-webkit-transform: translate(-50%);
		transform: translate(-50%);
		border-radius: 100%;
		box-shadow: 10px 10px 10px rgba(255, 255, 255, 0.2);
	}

	@keyframes t {

		0%,
		10%,
		80%,
		100% {
			top: -30px;
		}

		20% {
			top: 0px;
		}

		30% {
			top: -20px;
		}

		40% {
			top: -0px;
		}

		50% {
			top: -25px;
		}

		70% {
			top: 0px;
		}
	}

	@keyframes b {

		0%,
		10%,
		80%,
		100% {
			bottom: -30px;
		}

		20% {
			bottom: 0px;
		}

		30% {
			bottom: -20px;
		}

		40% {
			bottom: -0px;
		}

		50% {
			bottom: -25px;
		}

		70% {
			bottom: 0px;
		}
	}

	@keyframes mouth {

		0%,
		10%,
		100% {
			width: 100%;
			height: 0%;
		}

		15% {
			width: 90%;
			height: 30%;
		}

		20% {
			width: 50%;
			height: 70%;
		}

		25% {
			width: 70%;
			height: 70%;
		}

		30% {
			width: 80%;
			height: 60%;
		}

		35% {
			width: 60%;
			height: 70%;
		}

		40% {
			width: 55%;
			height: 75%;
		}

		45% {
			width: 50%;
			height: 90%;
		}

		50% {
			width: 40%;
			height: 70%;
		}

		55% {
			width: 70%;
			height: 95%;
		}

		60% {
			width: 40%;
			height: 50%;
		}

		65% {
			width: 100%;
			height: 60%;
		}

		70% {
			width: 100%;
			height: 70%;
		}

		75% {
			width: 90%;
			height: 70%;
		}

		80% {
			width: 50%;
			height: 70%;
		}

		85% {
			width: 90%;
			height: 50%;
		}

		85% {
			width: 40%;
			height: 70%;
		}

		90% {
			width: 90%;
			height: 30%;
		}

		95% {
			width: 100%;
			height: 10%;
		}
	}

	@keyframes tongue {

		0%,
		20%,
		100% {
			bottom: -80px;
		}

		30%,
		90% {
			bottom: -40px;
		}

		40% {
			bottom: -45px;
		}

		50% {
			bottom: -50px;
		}

		70% {
			bottom: -80px;
		}

		90% {
			bottom: -40px;
		}
	}
</style>