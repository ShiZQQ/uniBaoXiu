<template>
	<view class="template-order tn-safe-area-inset-bottom">
		<!-- 导航栏高度占位（适配不同设备） -->
		<view class="nav-placeholder" :style="{height: vuex_custom_bar_height + 'px'}"></view>

		<!-- 订单容器 -->
		<view class="order__container">
			<!-- 顶部标签栏 -->
			<view class="tn-bg-white order__tabs-wrap">
				<tn-tabs-swiper class="order__tabs" ref="tabs" activeColor="#3165CC" inactiveColor="#080808"
					:list="list" :current="tabsIndex" :isScroll="false" @change="tabsChange">
				</tn-tabs-swiper>
			</view>

			<!-- 标签内容区域 - Swiper -->
			<swiper class="order__swiper" :current="swiperIndex" @transition="swiperTransition"
				@animationfinish="swiperAnimationFinish">
				<!-- 进行中订单 -->
				<swiper-item class="order__swiper__item">
					<scroll-view scroll-y class="order__scroll-view" :style="{height: scrollViewHeight + 'px'}">
						<!-- 空数据提示 -->
						<view v-if="ongoingRepairs.length === 0" class="empty-data">
							<view class="tn-text-center" style="font-size: 120rpx; color: #ccc; padding: 40rpx 0;">
								<text class="tn-icon-bill tn-color-gray--light"></text>
							</view>
							<view class="tn-color-gray--disabled tn-text-center tn-text-lg">暂无进行中的报修单</view>
						</view>

						<!-- 进行中订单列表 -->
						<view v-for="(item,index) in ongoingRepairs" :key="index" class="order__item"
							@click="tn('./order_details/order_details?id=' + item.id)">
							<view
								class="order__item__head tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between">
								<view class="order__item__head__title">报修单号：{{ item.id }}</view>
							</view>

							<view
								class="order__item__content tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-center">
								<view class="order__item__content__image" style="margin-left: -10px;">
									<image src="/static/tabbar/i2.png" mode="aspectFill"></image>
								</view>
								<view class="order__item__content__title">
									<text
										class="order__item__content__info__price__cons">报修类型：{{ item.repairClass || '未知类型' }}</text>
									<br>
									<text
										class="order__item__content__info__price__cons">故障描述：{{ item.note || '无描述' }}</text>
									<br>
									<text
										class="order__item__content__info__price__cons">报修时间：{{ item.time || '未知时间' }}</text>
								</view>
							</view>

							<view
								class="order__item__operation tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-between">
								<view class="order__item__operaation__left">
									<text class="order__item__operaation__left--text"></text>
								</view>
								<view
									class="order__item__operation__right tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-right">
									<view class="order__item__operation__right__button">
										<tn-button shadow shape="round" fontColor="tn-color-white"
											backgroundColor="tn-bg-blue" :fontSize="24" height="auto"
											padding="10rpx 18rpx">
											查看详细</tn-button>
									</view>
								</view>
							</view>
						</view>
						<!-- 底部安全距离 -->
						<view class="tn-padding-bottom"></view>
					</scroll-view>
				</swiper-item>

				<!-- 已完成订单 -->
				<swiper-item class="order__swiper__item">
					<scroll-view scroll-y class="order__scroll-view" :style="{height: scrollViewHeight + 'px'}">
						<!-- 空数据提示 -->
						<view v-if="completedRepairs.length === 0" class="empty-data">
							<view class="tn-text-center" style="font-size: 120rpx; color: #ccc; padding: 40rpx 0;">
								<text class="tn-icon-bill tn-color-gray--light"></text>
							</view>
							<view class="tn-color-gray--disabled tn-text-center tn-text-lg">暂无已完成的报修单</view>
						</view>

						<!-- 已完成订单列表 -->
						<view v-for="(item,index) in completedRepairs" :key="index" class="order__item"
							@click="tn('./order_details/order_details?id=' + item.id)">
							<view
								class="order__item__head tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between">
								<view class="order__item__head__title">报修单号：{{ item.id }}</view>
							</view>

							<view
								class="order__item__content tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-center">
								<view class="order__item__content__image" style="margin-left: -10px;">
									<image src="/static/tabbar/i2.png" mode="aspectFill"></image>
								</view>
								<view class="order__item__content__title">
									<text
										class="order__item__content__info__price__cons">报修类型：{{ item.repairClass || '未知类型' }}</text>
									<br>
									<text
										class="order__item__content__info__price__cons">故障描述：{{ item.note || '无描述' }}</text>
									<br>
									<text
										class="order__item__content__info__price__cons">报修时间：{{ item.time || '未知时间' }}</text>
								</view>
							</view>

							<view
								class="order__item__operation tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-between">
								<view class="order__item__operaation__left">
									<text class="order__item__operaation__left--text"></text>
								</view>
								<view
									class="order__item__operation__right tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-right">
									<view class="order__item__operation__right__button">
										<tn-button shadow shape="round" fontColor="tn-color-white"
											backgroundColor="tn-bg-blue" :fontSize="24" height="auto"
											padding="10rpx 18rpx">
											查看详细</tn-button>
									</view>
								</view>
							</view>
						</view>
						<!-- 底部安全距离 -->
						<view class="tn-padding-bottom"></view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import templatePageMixin from '@/libs/mixin/template_page_mixin.js'

	export default {
		name: 'template-order',
		mixins: [templatePageMixin],
		data() {
			return {
				ongoingRepairs: [], // 进行中报修单
				completedRepairs: [], // 已完成报修单
				user: {}, // 当前登录用户信息
				list: [{
					name: '进行中'
				}, {
					name: '已完成'
				}], // 标签列表
				tabsIndex: 0, // 标签当前索引
				swiperIndex: 0, // swiper当前索引
				scrollViewHeight: 0, // scroll-view动态高度
				showPassword: false // 冗余字段（保留兼容）
			}
		},
		// 页面加载时初始化
		onLoad() {
			this.fetchData()
		},
		// 页面渲染完成后计算高度
		onReady() {
			this.$nextTick(() => {
				this.calcScrollViewHeight()
			})
		},
		// 页面显示时刷新数据（兼容直接进入页面）
		onShow() {
			// 避免未登录时重复跳转
			const userStr = uni.getStorageSync('user')
			if (userStr) {
				this.user = JSON.parse(userStr)
				this.fetchData()
			}
		},

		methods: {
			// 新增：必须和 index.vue 中调用的方法名完全一致
			repair_reportOnShow() {
				console.log("repair_reportOnShow 执行");
				this.fetchData()
				this.calcScrollViewHeight()
				// 可补充组件需要的初始化逻辑，比如加载报修列表、刷新数据等
				// 示例：this.loadRepairList();
			},
			// 跳转详情页（携带订单ID）
			tn(e) {
				uni.navigateTo({
					url: e
				});
			},
			// 标签切换联动swiper
			tabsChange(index) {
				this.swiperIndex = index
				this.tabsIndex = index
			},
			// swiper滑动时联动标签位置
			swiperTransition(event) {
				if (this.$refs.tabs && typeof this.$refs.tabs.setDx === 'function') {
					this.$refs.tabs.setDx(event.detail.dx)
				}
			},
			// swiper滑动结束后同步标签索引
			swiperAnimationFinish(event) {
				const current = event.detail.current
				if (this.$refs.tabs && typeof this.$refs.tabs.setFinishCurrent === 'function') {
					this.$refs.tabs.setFinishCurrent(current)
				}
				this.swiperIndex = current
				this.tabsIndex = current
			},
			// 计算scroll-view高度（核心解决溢出问题）
			calcScrollViewHeight() {
				uni.getSystemInfo({
					success: (sysInfo) => {
						// 基础高度计算：屏幕高度 - 导航栏 - 标签栏 - 安全距离
						const navHeight = this.vuex_custom_bar_height || 0 // 自定义导航栏高度
						const tabsHeight = sysInfo.windowWidth / 750 * 88 // 标签栏高度（88rpx转px）
						const safeBottom = sysInfo.safeAreaInsets.bottom || 20 // 底部安全距离

						// 最终scroll-view高度
						this.scrollViewHeight = sysInfo.windowHeight - navHeight - tabsHeight - safeBottom - 40
						console.log("scrollView高度计算完成：", this.scrollViewHeight)
					},
					fail: (err) => {
						console.error("获取系统信息失败：", err)
						// 兜底高度
						this.scrollViewHeight = 500
					}
				})
			},
			// 核心：请求报修单数据（兼容用户/维修人员身份）
			fetchData() {
				// 1. 校验登录状态
				const userStr = uni.getStorageSync('user')
				if (!userStr) {
					uni.showToast({
						title: '请先登录',
						icon: 'none',
						duration: 1500
					})
					uni.navigateTo({
						url: '/pages/login/login'
					})
					return
				}

				// 2. 解析用户信息
				this.user = JSON.parse(userStr)
				// 兼容用户/维修人员的查询关键字（学号/工号）
				const queryKey = this.user.identityType === 'user' ?
					this.user.userNumber :
					this.user.number

				// 3. 校验用户信息完整性
				if (!queryKey) {
					uni.showToast({
						title: '用户信息异常，缺少学号/工号',
						icon: 'none'
					})
					return
				}

				// 4. 显示加载提示
				uni.showLoading({
					title: '加载中...',
					mask: true
				})

				// 5. 动态拼接请求地址（区分用户/维修人员）
				const apiUrl = this.user.identityType === 'user' ?
					`http://localhost:8099/warranty/searchByUserNumber/${queryKey}` :
					`http://localhost:8099/warranty/searchByRepairmanNumber/${queryKey}`

				// 6. 发起请求
				uni.request({
					url: apiUrl,
					method: 'GET',
					timeout: 10000, // 超时时间
					success: (res) => {
						uni.hideLoading()
						// 接口成功返回
						if (res.data && res.data.code === '0') {
							const dataList = res.data.data || []
							// 清空旧数据
							this.ongoingRepairs = []
							this.completedRepairs = []
							// 分类订单（兼容不同的状态值）
							dataList.forEach(item => {
								const state = (item.state || '').trim()
								if (['维修进行中','待审核'].includes(state)) {
									this.ongoingRepairs.push(item)
								} else if (['维修已完成', '审核驳回'].includes(state)) {
									this.completedRepairs.push(item)
								}
							})
							console.log("数据加载完成：", {
								进行中: this.ongoingRepairs.length,
								已完成: this.completedRepairs.length
							})
						} else {
							// 接口返回异常（无数据/业务错误）
							this.ongoingRepairs = []
							this.completedRepairs = []
							uni.showToast({
								title: res.data?.msg || '暂无报修数据',
								icon: 'none',
								duration: 1500
							})
						}
					},
					fail: (err) => {
						uni.hideLoading()
						console.error("报修单请求失败：", err)
						uni.showToast({
							title: '网络错误，加载失败',
							icon: 'none',
							duration: 1500
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	// 页面基础样式
	.template-order {
		background-color: #F5F7FA;
		min-height: 100vh;
	}

	// 导航栏占位（避免内容被导航栏遮挡）
	.nav-placeholder {
		width: 100%;
		background-color: #fff;
		margin: 0 !important;
		padding: 0 !important;
		// 确保高度仅为导航栏高度，无额外偏移
		height: var(--custom-nav-height, 0) !important;
	}

	// 订单容器（流式布局）
	.order__container {
		width: 100%;
		height: calc(100vh - var(--custom-nav-height, 0px));
		display: flex;
		flex-direction: column;
	}

	// 标签栏容器
	.order__tabs-wrap {
		width: 100%;
		z-index: 10;
		box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.05);
	}

	.order__tabs {
		width: 100%;
	}

	// Swiper容器（占满剩余高度）
	.order__swiper {
		flex: 1;
		width: 100%;
	}

	.order__swiper__item {
		width: 100%;
		height: 100%;
	}

	// 滚动区域（动态高度）
	.order__scroll-view {
		width: 100%;
		padding-bottom: 20rpx;
	}

	// 订单卡片样式
	.order__item {
		margin: 20rpx;
		padding: 36rpx 26rpx;
		background-color: #FFFFFF;
		border-radius: 15rpx;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);

		// 修复第一个卡片顶部间距
		&:first-child {
			margin-top: 20rpx;
		}

		// 订单头部（单号）
		&__head {
			margin-bottom: 20rpx;

			&__title {
				font-weight: bold;
				line-height: normal;
				font-size: 32rpx;
				color: #333;
			}
		}

		// 订单内容（类型/描述/时间）
		&__content {
			margin-bottom: 30rpx;

			&__image {
				margin-right: 20rpx;

				image {
					width: 140rpx;
					height: 140rpx;
					border-radius: 10rpx;
				}
			}

			&__title {
				height: auto;
				min-height: 50px;
				padding-right: 40rpx;
				font-size: 28rpx;
				color: #333;
				line-height: 1.5;
			}
		}

		// 操作按钮区域
		&__operation {
			margin-top: 10rpx;
		}
	}

	// 空数据样式
	.empty-data {
		padding: 60rpx 20rpx;
		text-align: center;
		min-height: 400rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	// 底部安全距离（适配刘海屏/全面屏）
	.tn-padding-bottom {
		padding-bottom: calc(env(safe-area-inset-bottom) + 20rpx);
		height: calc(env(safe-area-inset-bottom) + 20rpx);
	}

	// 移除无用样式
	.tn-custom-nav-bar__back,
	.login {
		display: none;
	}
</style>