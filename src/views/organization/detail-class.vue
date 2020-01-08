<template>
  <div>
    <intro></intro>
    <div class="intro-content">
      <div class="intro-left">
        <h1>班级详情</h1>
        <div class="class-detail">
          <span class="left-part"> 
            <span class="item">
              <i class="title">班级：</i>高级电工班
            </span>
           
            <span class="item">
              <i class="title">所学科目：</i>计算机/电工类
            </span>
            <span class="item">
              <i class="title">学费：</i>¥100-¥200
            </span>
            <span class="item">
              <i class="title">培训时间：</i>1年
            </span>
            <span class="item">
              <i class="title">培训证书：</i>证书1
            </span>
            <span class="item">
              <i class="title">开班地址：</i>北京
            </span>
            <span class="item">
              <i class="title">上课地址：</i>1233213
            </span>
          </span>
          <span class="right-part">
             <span class="item">
               <i class="title">班级状态：</i>报名中
             </span>
             <span class="item">
               <i class="title">班级介绍：</i>报名中报名中报名中报名中报名中报名中报名中报名中报名中报名中报名中
             </span>
          </span>
        </div>
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
export default {
  methods: {
    handleChange(){

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
      .class-detail{
        padding-left: 120px;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        .left-part{
          width: 292px;
          
        }
        .right-part{
          width: 292px;
          
        }
        .item{
          display: block;
          width: 280px;
          margin-bottom: 10px;
          i.title{
            display: inline-block;
            width:70px;
            text-align: right;
            font-style: normal;
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