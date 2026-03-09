<template>
  <view class="components-form">
    <!-- 页面主体内容 - 移除dynamic-demo-template组件，保留原有表单功能 -->
    <view :style="{paddingTop: '44x'}" class="form-container">
      <!-- 投诉类型选择 -->
      <tn-form-item label="投诉类型" prop="repair_type" :labelWidth="140" :labelAlign="'center'">
        <picker :range="RepairType" @change="RepairTypeChange">
          <view class="picker-text">{{ RepairType[RepairTypeIndex] }}</view>
        </picker>	
      </tn-form-item>
      
      <!-- 投诉内容输入 -->
      <tn-form-item label="投诉内容" prop="desc" :labelPosition="'left'" :labelAlign="'center'">
        <tn-input v-model="model.desc" type="textarea" placeholder="请输入投诉内容" :border="false" inputAlign="center"></tn-input>
      </tn-form-item>

      <!-- 提交按钮 -->
      <tn-button  
        backgroundColor="#01BEFF" 
        fontColor="#FFFFFF" 
        width="100%" 
        @click="submit"  
        margin="50rpx 0rpx 100rpx 0rpx"
        class="submit-btn"
      >
        提交
      </tn-button>
    </view>
  </view>
</template>

<script>
export default {
  name: 'componentsForm',
  data() {
    return {
      // 表单数据模型
      model: {
        desc: '', // 投诉内容
        repair_type: '' // 投诉类型
      },
      
      // 投诉类型相关
      RepairType: ["请选择投诉类型", "服务态度", "维修质量", "其它"],
      RepairTypeIndex: 0,
      
      // 表单验证规则
      rules: {
        repair_type: [{
          required: true,
          message: '请选择投诉类型',
          trigger: ['change'],
        }],
        desc: [{
          required: true,
          message: '请输入投诉内容',
          trigger: ['blur', 'change'],
        }, {
          min: 5,
          message: '投诉内容不能少于5个字',
          trigger: 'change'
        }]
      },
      
      // 其他保留的变量（以备后续扩展使用）
      show: false,
      value: "",
      type: 'select',
      border: false,
      labelWidth: 140,
      labelPosition: 'left',
      labelAlign: 'center',
      result: 'Select结果',
      mode: 'single',
      yearsIndex1: 0,
      yearsIndex2: 0,
      params: {
        year: true,
        month: true,
        day: true,
        hour: true,
        minute: true,
        second: false
      },
      selector: [1, 2, 3],
      radioList: [{
        name: '本校区',
        disabled: false
      }, {
        name: 'XX校区',
        disabled: false
      }]
    }
  },
  
  onLoad() {
    // 页面加载逻辑
  },
  
  onReady() {
    // 页面渲染完成逻辑
  },
  
  methods: {
    // 投诉类型选择事件
    RepairTypeChange: function(e) {
      console.log("投诉类型选择：", e);
      this.RepairTypeIndex = e.detail.value;
      this.model.repair_type = this.RepairType[this.RepairTypeIndex];
    },
    
    // 图片上传回调（保留以备后续扩展）
    imageUploadChange(lists) {
      console.log("图片上传：", lists);
    },
    
    // 地点选择（保留以备后续扩展）
    SiteChange: function(e) {
      console.log("地点选择：", e);
      this.yearsIndex1 = e.detail.value[0];
      this.yearsIndex2 = e.detail.value[1];
    },
    
    // 时间选择（保留以备后续扩展）
    bindTimeChange: function(e) {
      console.log("时间选择：", e);
      this.time = e.detail.value;
    },
    
    // 提交表单处理
    submit() {
      // 表单验证逻辑
      if (this.RepairTypeIndex === 0) {
        uni.showToast({
          title: '请选择投诉类型',
          icon: 'none'
        });
        return;
      }
      
      if (!this.model.desc || this.model.desc.length < 5) {
        uni.showToast({
          title: '投诉内容不能少于5个字',
          icon: 'none'
        });
        return;
      }
      
      // 验证通过，提交数据
      console.log("提交投诉表单：", {
        repair_type: this.model.repair_type,
        desc: this.model.desc
      });
      
      // 这里可以添加实际的提交逻辑
      uni.showToast({
        title: '提交成功',
        icon: 'success'
      });
    }
  }
}
</script>	

<style lang="scss" scoped>
.components-form {
  padding: 0 30rpx;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.form-container {
  background-color: #ffffff;
  padding: 30rpx;
  border-radius: 10rpx;
  margin-top: 20rpx;
}

.picker-text {
  padding: 20rpx 0;
  font-size: 28rpx;
  color: #333;
}

.submit-btn {
  border-radius: 8rpx;
}

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