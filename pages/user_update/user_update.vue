<template>
	<view class="components-form">
		<view :style="{paddingTop: 70 + 'px'}">

			<dynamic-demo-template ref="demoTemplate" :tips="tips" :sectionList="sectionList" :full="false"
				@click="click">
				<tn-form :model="form" ref="uForm" :errorType="['message']">

					<!-- 通用字段：姓名 -->
					<tn-form-item label="姓名" prop="name" :labelWidth="labelWidth" :labelAlign="labelAlign">
						<tn-input v-model="form.name" placeholder="请输入姓名" />
					</tn-form-item>

					<!-- 动态字段：学号/工号 -->
					<tn-form-item 
						:label="user.identityType === 'user' ? '学号' : '工号'" 
						prop="number" 
						:labelWidth="labelWidth" 
						:labelAlign="labelAlign">
						<tn-input v-model="form.number" :placeholder="user.identityType === 'user' ? '请输入学号' : '请输入工号'" />
					</tn-form-item>

					<!-- 通用字段：手机号码 -->
					<tn-form-item label="手机号码" prop="phone" :labelWidth="140" :labelAlign="labelAlign"
						rightIcon="phone">
						<tn-input v-model="form.phone" placeholder="请输入手机号码" />
					</tn-form-item>

					<!-- 动态字段：班级（用户）/维修方向（维修人员） -->
					<tn-form-item 
						v-if="user.identityType === 'user'" 
						label="班级" 
						prop="stu_class" 
						:labelWidth="labelWidth" 
						:labelAlign="labelAlign">
						<tn-input v-model="form.stu_class" placeholder="请输入班级" />
					</tn-form-item>
					
					<!-- 修复：改用原生 picker 实现维修方向选择 -->
					<tn-form-item 
						v-if="user.identityType === 'repairman'" 
						label="维修方向" 
						prop="classification" 
						:labelWidth="labelWidth" 
						:labelAlign="labelAlign">
						<view class="repair-direction-picker" @click="openRepairPicker">
							<!-- 显示选中值或占位符 -->
							<text class="picker-text">{{ form.classification || '请选择维修方向' }}</text>
							<!-- 原生 picker 组件（隐藏，点击触发） -->
							<picker 
								mode="selector" 
								:range="repairDirectionOptions" 
								:range-key="'text'"
								:value="repairDirectionIndex"
								@change="onRepairDirectionChange"
								id="repairPicker">
							</picker>
						</view>
					</tn-form-item>

					<!-- 动态字段：楼栋（用户）/在班情况（维修人员） -->
					<tn-form-item 
						v-if="user.identityType === 'user'" 
						label="楼栋" 
						prop="dorm" 
						:labelWidth="labelWidth" 
						:labelAlign="labelAlign">
						<tn-input v-model="form.dorm" placeholder="请输入楼栋" />
					</tn-form-item>
					<tn-form-item 
						v-if="user.identityType === 'repairman'" 
						label="在班情况" 
						prop="workSituation" 
						:labelWidth="labelWidth" 
						:labelAlign="labelAlign">
						<tn-input v-model="form.workSituation" placeholder="请输入在班情况" />
					</tn-form-item>

				</tn-form>

				<tn-button margin="0rpx 0rpx 15rpx 0rpx" backgroundColor="#01BEFF" fontColor="#FFFFFF" width="100%"
					@click="submit">提交</tn-button>
			</dynamic-demo-template>
		</view>
	</view>
</template>

<script>
	import dynamicDemoTemplate from '@/libs/components/dynamic-demo-template.vue'
	import axios from 'axios'

	export default {
		components: {
			dynamicDemoTemplate
		},
		data() {
			return {
				// 基础缺失数据补充
				tips: '', 
				sectionList: [],
				user: {}, 
				// 维修方向下拉选项（适配原生 picker）
				repairDirectionOptions: [
					{ text: '空调', value: '空调' },
					{ text: '水电', value: '水电' },
					{ text: '疏通', value: '疏通' },
					{ text: '网络', value: '网络' },
					{ text: '木器', value: '木器' },
					{ text: '土建地面', value: '土建地面' },
					{ text: '体育设备', value: '体育设备' },
					{ text: '教学设备', value: '教学设备' },
					{ text: '办公设备', value: '办公设备' },
					{ text: '其他', value: '其他' }
				],
				// picker 选中索引
				repairDirectionIndex: 0,
				form: {
					name: '',
					phone: '',
					number: '',
					stu_class: '',
					dorm: '',
					classification: '', // 维修方向
					workSituation: '', // 在班情况
					hobby: [],
					radio: '',
					security: false
				},
				labelWidth: 160,
				labelAlign: 'left'
			};
		},
		computed: {
			// 导航栏高度（适配 vuex，无 vuex 则返回 0）
			vuex_custom_bar_height() {
				// 如有 vuex，取消注释并修改路径：
				// return this.$store.state.common.vuex_custom_bar_height || 0;
				return 0;
			}
		},
		methods: {
			// 空方法：处理 dynamic-demo-template 点击事件
			click() {},
			
			// 打开维修方向选择器
			openRepairPicker() {
				// 触发原生 picker 弹窗
				const picker = uni.createSelectorQuery().select('#repairPicker');
				picker.boundingClientRect(rect => {
					// 模拟点击 picker 组件
					uni.pageScrollTo({
						scrollTop: rect.top,
						duration: 0
					});
					// 直接触发选择器
					const pickerComponent = this.$el.querySelector('#repairPicker');
					if (pickerComponent) {
						pickerComponent.click();
					}
				}).exec();
			},
			
			// 维修方向选择事件
			onRepairDirectionChange(e) {
				const index = e.detail.value;
				this.repairDirectionIndex = index;
				// 更新选中值
				this.form.classification = this.repairDirectionOptions[index].value;
			},
			
			// 提交表单
			submit() {
				// 获取用户ID
				const userId = this.user.id;
				if (!userId) {
					uni.showToast({
						title: '用户ID不存在',
						icon: 'none'
					});
					return;
				}

				// 构造提交数据（根据身份动态构造）
				let submitData = {
					id: userId,
					name: this.form.name,
					phone: this.form.phone
				};

				// 用户身份字段
				if (this.user.identityType === 'user') {
					submitData.userNumber = this.form.number; // 学号
					submitData.studentClass = this.form.stu_class; // 班级
					submitData.dorm = this.form.dorm; // 楼栋
				}

				// 维修人员身份字段
				if (this.user.identityType === 'repairman') {
					submitData.number = this.form.number; // 工号
					submitData.classification = this.form.classification; // 维修方向
					submitData.workSituation = this.form.workSituation; // 在班情况
				}

				uni.request({
					url: `http://localhost:8099/user/update/${userId}`,
					method: 'POST',
					data: JSON.stringify(submitData),
					header: {
						'content-type': 'application/json'
					},
					success: (res) => {
						console.log(res.data);
						console.log(userId);
						if (res.data.code == "0") {
							uni.showToast({
								title: '更新成功',
								icon: 'success'
							});
							// 更新本地存储的用户信息
							const newUser = { ...this.user, ...submitData };
							wx.setStorageSync("user", JSON.stringify(newUser));
							// 返回上一页
							setTimeout(() => {
								uni.navigateBack();
							}, 1000);
						} else {
							uni.showToast({
								title: '更新失败',
								icon: 'none'
							});
						}
					},
					fail: (err) => {
						console.error("Error updating user:", err);
						uni.showToast({
							title: '请求失败',
							icon: 'none'
						});
					}
				});
			}
		},
		mounted() {
			// 获取本地存储的用户信息
			this.user = JSON.parse(wx.getStorageSync("user") || '{}');
			// 初始化表单数据
			this.form.name = this.user.name || '';
			this.form.phone = this.user.phone || '';
			
			// 根据身份初始化不同字段
			if (this.user.identityType === 'user') {
				this.form.number = this.user.userNumber || ''; // 学号
				this.form.stu_class = this.user.studentClass || ''; // 班级
				this.form.dorm = this.user.dorm || ''; // 楼栋
			} else if (this.user.identityType === 'repairman') {
				this.form.number = this.user.number || ''; // 工号
				this.form.classification = this.user.classification || ''; // 维修方向
				this.form.workSituation = this.user.workSituation || ''; // 在班情况
				
				// 初始化维修方向 picker 索引
				if (this.form.classification) {
					const index = this.repairDirectionOptions.findIndex(item => item.value === this.form.classification);
					this.repairDirectionIndex = index >= 0 ? index : 0;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.agreement {
		display: flex;
		align-items: center;
		margin: 40rpx 0;

		&-text {
			padding-left: 8rpx;
			color: $tn-font-sub-color;
		}
	}
	
	// 维修方向选择器样式（模拟下拉框）
	.repair-direction-picker {
		width: 100%;
		padding: 10rpx 0;
		border-bottom: 1px solid #eee;
		
		.picker-text {
			font-size: 28rpx;
			color: #333;
			&:empty {
				color: #999;
			}
		}
	}
	
	// 隐藏原生 picker 组件（只保留功能）
	#repairPicker {
		position: absolute;
		opacity: 0;
		width: 0;
		height: 0;
	}
</style>