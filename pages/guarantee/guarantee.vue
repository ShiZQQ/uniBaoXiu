<template>
	<view class="components-form">
		<!-- 移除 dynamic-demo-template 包裹，直接显示表单 -->
		<view :style="{paddingTop: vuex_custom_bar_height + 'px'}">
			<tn-form :model="form" ref="uForm" :errorType="['message']" :rules="rules">

				<tn-form-item label="姓名" prop="name" :labelWidth="labelWidth" :labelAlign="labelAlign">
					<tn-input v-model="form.name" placeholder="请输入姓名" />
				</tn-form-item>

				<tn-form-item label="学号" prop="number" :labelWidth="labelWidth" :labelAlign="labelAlign">
					<tn-input v-model="form.number" placeholder="请输入学号/工号" />
				</tn-form-item>
				
				<tn-form-item label="手机号码" prop="phone" rightIcon="phone" :labelPosition="labelPosition"
					:labelWidth="140">
					<tn-input v-model="form.phone" type="number" placeholder="请输入手机号码" :border="border"></tn-input>
				</tn-form-item>

				<tn-form-item label="班级" prop="stu_class" :labelWidth="labelWidth" :labelAlign="labelAlign">
					<tn-input v-model="form.stu_class" placeholder="请输入班级" />
				</tn-form-item>

				<tn-form-item label="校区" prop="radio" :labelWidth="labelWidth" :labelAlign="labelAlign">
					<tn-radio-group v-model="form.radio">
						<tn-radio v-for="(item, index) in radioList" :key="index" :name="item.name"
							:disabled="item.disabled">
							{{ item.name }}
						</tn-radio>
					</tn-radio-group>
				</tn-form-item>
				
				<tn-form-item label="报修地点" prop="place" :labelWidth="labelWidth" :labelAlign="labelAlign">
					<picker :range="RepairSite" @change="SiteChange" mode="multiSelector">
						{{ RepairSite[0][yearsIndex1] }} - {{ RepairSite[1][yearsIndex2]  }}
					</picker>
				</tn-form-item>

				<tn-form-item label="类型" prop="repair_type" :labelWidth="labelWidth" :labelAlign="labelAlign">
					<picker :range="RepairType" @change="RepairTypeChange">
						{{ RepairType[RepairTypeIndex] }}
					</picker>
				</tn-form-item>

				<tn-form-item label="描述" prop="intro" :labelWidth="labelWidth" :labelAlign="labelAlign">
					<tn-input v-model="form.intro" placeholder="请输入问题描述" />
				</tn-form-item>

				<tn-form-item label="预约时间" prop="time" :labelWidth="labelWidth" :labelAlign="labelAlign">
					<picker mode="time" :value="form.time" :start="minTime" :end="maxTime" @change="bindTimeChange">
						<view style="background-color: white;">{{ form.time || '请选择预约时间' }}</view>
					</picker>
				</tn-form-item>

				<tn-form-item label="上传图片" prop="photo" :labelPosition="labelPosition" :labelAlign="labelAlign">
					<tn-image-upload :fileList="form.photo" @on-list-change="imageUploadChange"></tn-image-upload>
				</tn-form-item>
			</tn-form>

			<tn-button backgroundColor="#01BEFF" fontColor="#FFFFFF" width="100%" @click="submit" style="margin-top: 20rpx;">提交</tn-button>
		</view>
	</view>
</template>

<script>
	// 移除 dynamicDemoTemplate 导入（不再使用）

	export default {
		name: 'componentsForm',
		components: {
			// 移除 dynamicDemoTemplate 注册
		},
		data() {
			return {
				show: false,
				value: "",
				type: 'select',
				border: false,
				labelWidth: 140,
				labelPosition: 'left',
				labelAlign: 'center',

				//类型下拉列表
				result: 'Select结果',
				mode: 'single',

				//时间选择器
				minTime: '08:01',
				maxTime: "21:01",
				RepairSite: [
					["请选择楼栋", 1, 2, 3, 4, 5, 6, 7, 8],
					["请选择寝室号", 101, 102, 103, 104, 105, 106]
				],
				yearsIndex1: 0,
				yearsIndex2: 0,

				RepairType: ["请选择报修类型", "空调", "水电", "疏通", "网络", "木器", "土建地面", "其它"],
				RepairTypeIndex: 0,

				actionSheetList: [{
						value: '1',
						label: '空调'
					},
					{
						value: '2',
						label: '水电'
					},
					{
						value: '3',
						label: '疏通'
					},
					{
						value: '4',
						label: '网络'
					},
					{
						value: '5',
						label: '木器'
					},
					{
						value: '6',
						label: '土建地面'
					},
					{
						value: '7',
						label: '其它'
					}
				],
				params: {
					year: true,
					month: true,
					day: true,
					hour: true,
					minute: true,
					second: false
				},
				selector: [1, 2, 3],
				form: {
					name: '',
					repair_type: '',
					phone: '',
					number: '',
					time: '', // 预约时间
					stu_class: '',
					place: '', // 报修地点
					intro: '', // 问题描述
					sex: '',
					hobby: [],
					radio: '', // 校区
					security: false,
					photo: [] // 上传图片列表
				},

				rules: {
					name: [{
						required: true,
						message: '请输入姓名',
						trigger: ['change', 'blur'],
					}],
					phone: [{
						required: true,
						message: '请输入手机号码',
						trigger: ['change', 'blur'],
					}, {
						pattern: /^1[3-9]\d{9}$/,
						message: '请输入正确的手机号码',
						trigger: 'change'
					}],
					intro: [{
						min: 5,
						message: '简介不能少于5个字',
						trigger: 'change'
					}],
					radio: [{
						required: true,
						message: '请选择校区',
						trigger: 'change'
					}],
					repair_type: [{
						required: true,
						message: '请选择报修类型',
						trigger: 'change'
					}],
					time: [{
						required: true,
						message: '请选择预约时间',
						trigger: 'change'
					}]
				},
				radioList: [{
						name: '本校区',
						disabled: false
					},
					{
						name: 'XX校区',
						disabled: false
					}
				]
			}
		},
		onLoad() {
			// vuex_custom_bar_height 已作为计算属性存在，无需重复定义
		},

		onReady() {

		},

		methods: {
			guaranteeOnShow() {
				console.log("guaranteeOnShow")
			},
			// 点击actionSheet回调
			actionSheetCallback(index) {
				this.value = this.actionSheetList[index].text;
			},
			//图片有修改
			imageUploadChange(lists) {
				this.form.photo = lists;
			},
			//地点选择修改
			SiteChange: function(e) {
				console.log(e)
				this.yearsIndex1 = e.detail.value[0];
				this.yearsIndex2 = e.detail.value[1];
				// 将选择的地点赋值给form.place
				this.form.place = `${this.RepairSite[0][this.yearsIndex1]} - ${this.RepairSite[1][this.yearsIndex2]}`;
			},
			//预约时间选择
			bindTimeChange: function(e) {
				this.form.time = e.detail.value;
			},

			//报修类型选择
			RepairTypeChange: function(e) {
				console.log(e)
				this.RepairTypeIndex = e.detail.value;
				// 将选择的报修类型赋值给form.repair_type
				this.form.repair_type = this.RepairType[this.RepairTypeIndex];
			},
			
			// 表单提交方法
			async submit() {
				try {
					// 表单验证
					const valid = await this.$refs.uForm.validate();
					if (!valid) return;
					
					// 验证通过，处理提交逻辑
					console.log('表单提交数据：', this.form);
					
					// 这里可以添加接口请求逻辑
					// const res = await uni.request({
					// 	url: '/api/repair',
					// 	method: 'POST',
					// 	data: this.form
					// });
					
					uni.showToast({
						title: '提交成功',
						icon: 'success'
					});
					
					// 重置表单
					this.resetForm();
				} catch (error) {
					console.error('提交失败：', error);
					uni.showToast({
						title: '提交失败',
						icon: 'none'
					});
				}
			},
			
			// 重置表单
			resetForm() {
				this.$refs.uForm.resetFields();
				this.yearsIndex1 = 0;
				this.yearsIndex2 = 0;
				this.RepairTypeIndex = 0;
				this.form.photo = [];
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
</style>