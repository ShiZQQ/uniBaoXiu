<template>
	<view class="template-order">
		<!-- 顶部自定义导航 -->
		<view class="order--wrap" :style="{top: customBarHeight + 'px'}" v-if="currentModeIndex === 0">
			<!-- 顶部标签 -->
			<view class="tn-bg-white">
				<tn-tabs-swiper class="order__tabs" ref="tabs" activeColor="#3165CC" inactiveColor="#080808"
					:list="list" :current="tabsIndex" :isScroll="false" @change="tabsChange" :style="{top:-60 + 'px'}">
				</tn-tabs-swiper>
			</view>

			<!-- 标签内容 -->
			<swiper class="order__swiper" :style="{top: `${swiperTop}px`, height: `${swiperHeight}px`}"
				:current="swiperIndex" @transition="swiperTransition" @animationfinish="swiperAnimationFinish">

				<swiper-item class="order__swiper__item">
					<scroll-view :style="{height: `${swiperHeight}px`}" scroll-y>
						<view v-for="(item,index) in 1" :key="index" class="order__item"
							@click="tn('./order_details/order_details')">
							<view
								class="order__item__head tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between">
								<view class="order__item__head__title">
									<text style="font-size: 15px;">停水通知</text>
								</view>
							</view>

							<view
								class="order__item__content tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-center">
								<view class="order__item__content__title">
									<text
										class="order__item__content__info__price__cons">因维修电路原因，在下午2点-5点北校区6号寝室楼将停电</text>
								</view>
							</view>

							<view
								class="order__item__operation tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-between">
								<view class="order__item__operaation__left">
									<text class="order__item__operaation__left--text"></text>
								</view>
								<view
									class="order__item__operation__right tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-right">
								</view>
							</view>
						</view>
						<view class="tn-padding-bottom"></view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	// 如果需要使用mixin，请确保Vuex已正确初始化
	// import templatePageMixin from '@/libs/mixin/template_page_mixin.js'

	export default {
		name: 'template-order',
		// mixins: [templatePageMixin], // 如需启用请确保Vuex已配置
		data() {
			return {
				// 标签列表数据
				list: [
					{ name: '通知公告' },
					{ name: '报修记录' }
				],
				// 当前选中的模式
				currentModeIndex: 0,
				tabsIndex: 0,
				swiperIndex: 0,
				swiperTop: 0,
				swiperHeight: 0,
				showPassword: false
			}
		},
		computed: {
			// 统一管理导航栏高度，避免命名冲突
			customBarHeight() {
				// 优先使用vuex中的值，没有则使用默认值44px
				return this.vuex_custom_bar_height || 44;
			}
		},
		onLoad() {

		},
		onReady() {
			this.$nextTick(() => {
				this.updateSwiperInfo()
			})
		},
		methods: {
			repair_reportOnShow() {
				console.log("repair_reportOnShow")
			},
			// 页面跳转
			tn(e) {
				uni.navigateTo({
					url: e,
				});
			},
			// 切换模式
			modeSwitch(index) {
				this.currentModeIndex = index
				this.showPassword = false
			},
			// 获取元素位置信息
			_tGetRect(selector) {
				return new Promise((resolve) => {
					uni.createSelectorQuery().in(this).select(selector).boundingClientRect(rect => {
						resolve(rect)
					}).exec()
				})
			},
			// 计算可滑动区域的高度信息
			updateSwiperInfo() {
				// 获取可滑动菜单的信息
				this._tGetRect('.order__tabs').then(res => {
					if (!res) {
						setTimeout(() => {
							this.updateSwiperInfo()
						}, 10)
						return
					}
					const systemInfo = uni.getSystemInfoSync()
					this.swiperTop = res.bottom - this.customBarHeight
					this.swiperHeight = (systemInfo.safeArea?.height || systemInfo.windowHeight) - res.bottom + (systemInfo.statusBarHeight || 0)
				})
			},
			// 标签栏值发生改变
			tabsChange(index) {
				this.swiperIndex = index
			},
			// swiper-item位置发生改变
			swiperTransition(event) {
				if (this.$refs.tabs && typeof this.$refs.tabs.setDx === 'function') {
					this.$refs.tabs.setDx(event.detail.dx)
				}
			},
			// swiper动画结束
			swiperAnimationFinish(event) {
				const current = event.detail.current
				if (this.$refs.tabs && typeof this.$refs.tabs.setFinishCurrent === 'function') {
					this.$refs.tabs.setFinishCurrent(current)
				}
				this.swiperIndex = current
				this.tabsIndex = current
			}
		}
	}
</script>

<style lang="scss" scoped>
	.template-order {
		background-color: #FFFFFF;
		min-height: 100vh;
	}

	.order {
		&--wrap {
			position: fixed;
			left: 0;
			right: 0;
			width: 100%;
			background-color: inherit;
		}

		&__tabs {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			background-color: inherit;
		}

		&__swiper {
			position: absolute;
			left: 0;
			right: 0;
			width: 100%;
			background-color: inherit;
		}

		&__item {
			margin: 20rpx;
			padding: 36rpx 26rpx;
			background-color: #FFFFFF;
			border-radius: 15rpx;
			box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);

			&:first-child {
				margin-top: 40rpx;
			}

			&__head {
				&__title {
					font-weight: bold;
					line-height: normal;
					font-size: 32rpx;
				}
			}

			&__content {
				margin-top: 20rpx;

				&__title {
					height: auto;
					min-height: 50px;
					padding-right: 40rpx;
					font-size: 28rpx;
					color: #333;
					line-height: 1.5;
				}
			}

			&__operation {
				margin-top: 30rpx;
			}
		}
	}

	/* 移除不必要的样式，精简代码 */
	.tn-padding-bottom {
		padding-bottom: env(safe-area-inset-bottom) + 20rpx;
		height: env(safe-area-inset-bottom) + 20rpx;
	}
</style>