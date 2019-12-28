<template>
  <div>
    <intro :introInfo = 'schoolInfo'></intro>
    <div class="intro-content" v-if="false">
      <div class="intro-left">
        <div class='title'>
          <span></span>
          <div class="select-box">
              <span style="margin-right:20px;">筛选专业</span>
              <a-select defaultValue="选择专业" style="width: 120px;margin-right:20px;" @change="handleChange">
                <a-select-option value="lucy">Lucy</a-select-option>
                <a-select-option value="disabled" >Disabled</a-select-option>
                <a-select-option value="Yiminghe">yiminghe</a-select-option>
              </a-select>
              <a-select defaultValue="选择科目" style="width: 120px" @change="handleChange">
                <a-select-option value="jack">Jack</a-select-option>
                <a-select-option value="lucy">Lucy</a-select-option>
                <a-select-option value="disabled">Disabled</a-select-option>
                <a-select-option value="Yiminghe">yiminghe</a-select-option>
              </a-select>
          </div>
           
        </div>
        <ul class="classList">
          <li v-for="i in 6" :key="i" @click="goClassDetail(i)">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577388785184&di=c620e89d4a07e85b07f8ea26d49f3ac8&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201802%2F12%2F20180212023234_kUciF.jpeg" alt="">
            <span class="classInfo">
                <span>班级：高级电工</span>
                <span>学费：¥201-¥301</span>
                <span>培训时间：1年</span>
                <span>培训证书：证书1</span>
                <span>所学科目：计算机/电工专业</span>
                <span>开班地址：北京</span>
            </span>
            <span class="class-status">报名中</span>
          </li>
        </ul>
      </div>
      <div class="intro-right">
        <div style="margin-left:5px;">
          <online-apply></online-apply>
          <div class="all-school">
            <h1>全国分校</h1>
            <div class="school-container">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577388785184&di=c620e89d4a07e85b07f8ea26d49f3ac8&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201802%2F12%2F20180212023234_kUciF.jpeg" alt="" class="school-img">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577388785184&di=c620e89d4a07e85b07f8ea26d49f3ac8&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201802%2F12%2F20180212023234_kUciF.jpeg" alt="" class="school-img">
            </div>
            
          </div>
        </div>
      </div>
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
      schoolInfo:{}
    }
  },
  mounted(){
    this._getInfoData();
  },
  methods: {
    handleChange(){

    },
    _getInfoData(){
      let {id} = this.$route.query;
      api.orgDetail({id}).then(res=>{
        this.schoolInfo = res.data;
        this.schoolInfo.type = '机构';
      })
    },
    goClassDetail(id){
      this.$router.push('/detail-class?id='+id);
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
      }
      .classList{
        padding: 20px 0;
        li{
          display: flex;
          justify-content: flex-start;
          align-items: center;
          border: 1px solid #f0f0f0;
          padding: 20px 10px;
          margin-bottom: 20px;
          cursor: pointer;
          img{
            display: block;
            width: 60px;
            height: 60px;
          }
          .classInfo{
            display: flex;
            flex-wrap: wrap;
            flex:0 0 569px;
            margin-left: 10px;
            span{
              width: 174px;
              margin-right: 15px;
              font-size: 14px;
              margin-bottom: 10px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
          .class-status{
            flex: 0 0 45px;
            width: 45px;
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