<template>
  <div class="home">
    <div class="home-top">
      <div class="top-left">
        <div class="top-left-top">
          <div class="banner"></div>
            <notice class="notice"></notice>
        </div>
        <div class="top-left-middle">
          <search />
        </div>
        <div class="top-left-bottom">
          <select-city />
        </div>
      </div>
      <div class="top-right">

      </div>
    </div>
     <div class="home-middle">
       <div class="ads-box"><img src="@/assets/ads_demo.png" alt=""></div>
       <div class="hot-recommend">
         <div class="recommend-left"></div>
         <div class="recommend-right"></div>
       </div>
      <schoolRecommend recommend-title='名校热推' />
      <schoolRecommend recommend-title='热招培训机构' update-style="width:160px">
        <template>
           <div class="school-logo logo-box">
            <img class="jg-logo" src="@/assets/universities/jyjg-logo.png" alt="">
            <div class="jg-content">
              <a href="javascript:;">学而思网校</a>
              <span class="content">成立于2003念</span>
              <span class="content">到培训脸</span>
            </div>
          </div>
            <p>正在热招   课程***********<br/>招聘200人</p>
        </template>
      </schoolRecommend>
     </div>
     <div class="home-bottom">
       <img src="@/assets/allads-demo.png" alt="">
     </div>
  </div>
</template>

<script>
import Notice from '../components/notice';
import Search from '../components/search';
import SelectCity from '../components/select-city';
import schoolRecommend from '../components/school-recommend';
export default {
  components: {
    Notice,
    Search,
    SelectCity,
    schoolRecommend
  }
}
</script>

<style lang="less">
  .home{
    width: 1180px;
    height: auto;
    margin: 0 auto;
    &-top{
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding-top: 30px;
      padding-bottom: 38px;
      height: auto;
      .top-left{
        width: 974px;
        .top-left-top{
          width: 100%;
          height: 348px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          .banner{
            width: 580px;
            height: 348px;
            background: red;
          }
          .notice{
            width: 394px;
            height: 348px;
            // background: green;
          }
        }
        .top-left-middle{
          widows: 100%;
          height: 148px;
        }
        .top-left-bottom{
          width: 100%;
          height: 404px;
        }
      }
      .top-right{
        width: 206px;
        height: 900px;
        background: greenyellow;
      }
    }
    &-middle{
      width: 100%;
      height: auto;
      color: #ffffff;
      .hot-recommend{
        margin-top: 28px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .recommend-left{
          width: 331px;
          height: 400px;
          border: 1px solid #e2e2e2;
          border-top: 2px solid #ff6700;
        }
        .recommend-right{
          width: 812px;
          height: 400px;
          border: 1px solid #e2e2e2;
          border-top: 2px solid #ff6700;
        }
      }
      .logo-box{
        display: flex;
        justify-content: space-around!important;
        align-items: center;
        .jg-logo{
          display: block;
          width: 77px;
          height: 77px;
        }
        .jg-content{
          width: 95px;
          height: auto;
          text-align: center;
          a{
            display: block;
          }
          .content{
            display: block;
            text-align: center;
            color: #000000;
          }
        }
      }
    }
    &-bottom{
      width: 100%;
      height: auto;
      padding-top: 46px;
      img{
        display: block;
        width: 1168px;
        height: auto;
        margin: 0 auto;
      }
    }
  }
 
</style>