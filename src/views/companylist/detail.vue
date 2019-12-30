<template>
  <div>
    <!-- <intro :introInfo = 'schoolInfo'></intro> -->
    <div class="intro-detail">
      <h1>{{schoolInfo.name}}</h1>
      <p style="margin-bottom:40px;">{{schoolInfo.description}}</p>
      <!-- <h2 style="font-size: 18px;">{{schoolInfo.name}}</h2> -->
      <img :src="schoolInfo.logo" alt="" style="display:block; width:160px;height: auto;margin-bottom:20px;">
      <h2>{{schoolInfo.typeName}}地址：{{schoolInfo.address}}</h2>
      <h2>联系人：{{schoolInfo.contact}}</h2>
      <h2>联系电话：{{schoolInfo.phone}}</h2>
      <span class="baoming" @click="gobaoming">投递</span>
    </div>
  </div>
</template>

<script>
import Intro from '@/components/Intro.vue';
import OnlineApply from '@/components/OnlineApply.vue';
import {Select} from 'ant-design-vue';
import api from '@/api';
export default {
  data(){
    return {
      showall:false,
      schoolInfo: {},
      zhuanyelInfo:{}
    }
  },
  mounted(){
    this._getInfoData();
  },
  methods: {
    handleChange(){

    },
    handleShowall(){
      this.showall = !this.showall;
    },
    _getInfoData(){
      let {id,schoolId} = this.$route.query;
      api.orgDetail({id}).then(res=>{
        this.schoolInfo = res.data;
        this.schoolInfo.typeName = '企业';
      });
    },
    gobaoming(){
      let {id,type} = this.schoolInfo;
      api.baoming({
        CompanyId:id,
        Type:type
      }).then(res=>{
        if(res.code == 1){
          this.$message.success('报名成功')
        }else{
          this.$message.success(res.msg);
        }
      })
    }
  },
  components: {
    Intro,
    OnlineApply,
    Select
  }
}
</script>

<style lang="less" scoped>
  .intro-content{
    width: 1080px;
    margin: 20px auto;
    display: flex;
    justify-content: flex-start;
    .intro-left{
      // width: 872px;
      width: 726px;
      height: 816px;
      background-color: rgba(255, 255, 255, 1);
      // border: 1px solid #797979;
      padding: 20px 10px;
      .title{
        display: flex;
        justify-content: space-between;
        font-size: 18px;
      }
      .classList{
        padding: 20px 0;
        li{
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          border: 1px solid #f0f0f0;
          padding: 20px 10px;
          margin-bottom: 20px;
          img{
            display: block;
            width: 60px;
            height: 60px;
          }
          .detailInfo{
            margin-left: 10px;
            span{
              margin-right: 40px;
            }
            .sub-intro{
              position: relative;
              width: 552px;
              padding-right: 30px;
              height: auto;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              .open-more{
                position: absolute;
                right: 0px;
                top:0px;
                font-style: normal;
                cursor: pointer;
              }
            }
            .normal-intro{
              position: relative;
              .open-more{
                position: absolute;
                right: 12px;
                bottom: 0;
                font-style: normal;
                color: red;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
  .all-school{
    width: 345px;
    background: #ffffff;
    margin-left: 5px;
    margin-top: 10px;
    padding: 20px;
    .school-container{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .school-img{
        width: 146px;
        height: 40px;
        margin-bottom: 10px;
      }
    }
  }
</style>