<template>
	<view class="message-details">
		<!-- 固定导航栏占位高度，无变量冲突 -->
		<view class="nav-placeholder" ></view>
		<view class="content">
			<view class="title">{{ title }}</view>
			<view class="contact-info">
				<!-- 姓名 -->
				<view class="info-item">
					<text class="label">姓名：</text>
					<text class="value">{{ contactInfo.name }}</text>
				</view>
				<!-- 电话（仅展示，移除拨号按钮） -->
				<view class="info-item" v-if="contactInfo.phone">
					<text class="label">电话：</text>
					<text class="value">{{ contactInfo.phone }}</text>
				</view>
				<!-- 区分显示工号/学号 -->
				<view class="info-item" v-if="contactInfo.idNumber">
					<text class="label">{{ idLabel }}：</text>
					<text class="value">{{ contactInfo.idNumber }}</text>
				</view>
				<!-- 关联订单 -->
				<view class="info-item" v-if="contactInfo.orderId">
					<text class="label">关联订单：</text>
					<text class="value">{{ contactInfo.orderId }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '', // 页面标题
				contactInfo: {
					name: '', // 联系人姓名
					phone: '', // 联系人电话
					orderId: '', // 关联订单ID
					idNumber: '' // 工号/学号
				},
				idLabel: '' // 工号/学号的标签文字
			}
		},
		onLoad(options) {
			// 1. 用户身份 - 查看维修人员信息（显示姓名、电话、工号）
			if (options.type === 'repairman') {
				this.title = '联系维修人员'
				this.idLabel = '工号' // 维修人员显示工号标签
				this.contactInfo.name = decodeURIComponent(options.name || '未知')
				this.contactInfo.phone = decodeURIComponent(options.phone || '')
				this.contactInfo.orderId = options.orderId || ''
				this.contactInfo.idNumber = decodeURIComponent(options.idNumber || '暂无') // 接收工号参数
			} 
			// 2. 维修人员身份 - 查看报修人信息（显示姓名、电话、学号）
			else if (options.type === 'user') {
				this.title = '联系报修人'
				this.idLabel = '学号' // 报修人显示学号标签
				this.contactInfo.name = decodeURIComponent(options.name || '未知')
				this.contactInfo.phone = decodeURIComponent(options.phone || '')
				this.contactInfo.orderId = options.orderId || ''
				this.contactInfo.idNumber = decodeURIComponent(options.idNumber || '暂无') // 接收学号参数
			}
		}
	}
</script>

<style lang="scss" scoped>
	.message-details {
		background-color: #F5F7FA;
		min-height: 100vh;
	}

	.nav-placeholder {
		width: 100%;
		background-color: #fff;
		// height: 44px; // 固定导航栏占位高度
	}

	.content {
		padding: 20rpx;
	}

	.title {
		font-size: 36rpx;
		font-weight: bold;
		margin-bottom: 30rpx;
		text-align: center;
		color: #333;
	}

	.contact-info {
		background-color: #fff;
		padding: 30rpx;
		border-radius: 15rpx;
		margin-bottom: 30rpx;
		box-shadow: 0 2rpx 10rpx rgba(0,0,0,0.05);
	}

	.info-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 20rpx;
		font-size: 28rpx;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.label {
		color: #666;
		min-width: 80rpx;
	}

	.value {
		flex: 1;
		margin: 0 10rpx;
		color: #333;
	}
</style>