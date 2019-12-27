<template>
  <div>
    <intro></intro>
    <div class="intro-content">
      <div class="intro-left">
        <div class='title'>
          <span>专业介绍</span>     
        </div>
        <ul class="classList">
          <li v-for="i in 6" :key="i">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577388785184&di=c620e89d4a07e85b07f8ea26d49f3ac8&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201802%2F12%2F20180212023234_kUciF.jpeg" alt="">
            <div class="detailInfo">
              <span>专业：h5</span>
              <span>学费：¥1-¥4</span>
              <span>学期：3年</span>
              <p :class="showall? 'normal-intro':'sub-intro'">
                <i class="open-more" @click="handleShowall" v-if="showall">收起</i>
                <i class="open-more" @click="handleShowall" v-else>详情</i>
                介绍：是生生世世生生世世生生世世的分身乏术的方式发呆发呆发呆发呆是防辐射服发呆发反反复复反反复复发呆发发反反复复</p>
            </div>
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
export default {
  data(){
    return {
      showall:false,
    }
  },
  methods: {
    handleChange(){

    },
    handleShowall(){
      this.showall = !this.showall;
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