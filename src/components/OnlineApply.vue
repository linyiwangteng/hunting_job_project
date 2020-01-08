<template>
  <div class="apply-container">
    <h1>报名</h1>
    <div>
      <div class="per-container">
        <div class="logo">
          <img :src="logo" alt="">
        </div>
        <div class="name">
          {{name}}
        </div>
      </div>
      <a-button class="apply-btn" @click="gobaoming">免费报名申请</a-button>
    </div>
  </div>
</template>

<script>
import {Input,Select} from "ant-design-vue";
import api from '@/api';
export default {
  props: {
    logo: {
      // 必须提供字段
      required: false,
      default: true
    },
    name:{
      // 必须提供字段
      required: false,
      default: true
    },
    type:{
      required:true,
      default:0,
    },
    id:{
      required:true,
      default:0,
    },
    cID:{
      required:true,
      default:0,
    },
  },
  components: {
    Input,
    Select
  },
  methods:{
    gobaoming() {
      api
        .baoming({
          CompanyId: this.cID,
          Type: this.type,
          RecruitId: this.id,
        })
        .then(res => {
          if (res.code == 1) {
            this.$message.success("报名成功");
          }else{
            this.$message.error(res.msg);
          }
        });
    }
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
      // height: 34px;
      display: flex;
      justify-content: center;
      // align-items: center;
      margin-bottom: 10px;
      flex-direction: column;
      .name{
        text-align: left;
        font-size: 18px;
        padding: 10px 0 10px 0;
      }
      .logo{
        width: 300px;
        overflow: hidden;
        img{
          width: 100%;
        }
      }
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