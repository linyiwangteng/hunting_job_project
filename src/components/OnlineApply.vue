<template>
  <div class="apply-container">
    <h1>申请在线报名</h1>
    <div>
      <div class="per-container">
        <span>申请姓名</span>
        <a-input class="input-box" placeholder="请输入联系人姓名"></a-input>
      </div>
      <div class="per-container">
        <span>申请手机号</span>
        <a-input class="input-box" placeholder="请输入联系人手机号"></a-input>
      </div>
      <div class="per-container">
        <span>申请课程</span>
        <!-- <a-input class="input-box"></a-input> -->
        <a-select defaultValue="请选择" class="input-box">
          <a-select-option value="1">1</a-select-option>
          <a-select-option value="2">2</a-select-option>
          <a-select-option value="3">3</a-select-option>
        </a-select>
      </div>
      <div class="per-container">
        <span>申请班级</span>
        <a-select defaultValue="请选择" class="input-box">
          <a-select-option value="1">1</a-select-option>
          <a-select-option value="2">2</a-select-option>
          <a-select-option value="3">3</a-select-option>
        </a-select>
      </div>
      <a-button class="apply-btn">免费报名申请</a-button>
    </div>
  </div>
</template>

<script>
import {Input,Select} from "ant-design-vue"
export default {
  components: {
    Input,
    Select
  }
}
</script>

<style lang="less" scoped>
  .apply-container{
    width: 345px;
    height: auto;
    padding: 20px;
    background: #ffffff;
    .per-container{
      width: 100%;
      height: 34px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
      span{
        width: 80px;
        padding-right: 10px;
        text-align: right;
      }
      .input-box{
        width: 183px;
      }

    }
    .apply-btn{
      width: 303px;
      height: 44px;
      text-align: center;
      background: red;
      margin-top: 10px;
      color: #ffffff;
      line-height: 44px;
    }
  }
</style>