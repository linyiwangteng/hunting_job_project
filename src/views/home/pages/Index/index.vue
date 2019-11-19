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
         <!-- 热推岗位 -->
         <div class="recommend-left">
           <h2 class="header">热推岗位</h2>
           <section class="content-box">
             <p class="every-content" v-for="item in 11" :key="item">
               <span class="type-name">技术</span>
               <span class="type-content">
                 <a href="javascript:;">Java</a>
                 <a href="javascript:;">PHP</a>
                 <a href="javascript:;">web前端</a>
                 <a href="javascript:;">算法工程师</a>
               </span>
               <i class="more">></i>
             </p>
           </section>
           <span class="show-all">显示全部职位</span>
         </div>
         <!-- 具体职位 -->
         <div class="recommend-right">
           <h2 class="header">
             <span class="item">IT互联网</span>
             <span class="item">金融房地产</span>
             <span class="item">建筑教育</span>
             <i class="more">更多></i>
           </h2>
           <ul class="recommend-content">
             <li v-for="item in 6" :key="item">
               <div class="company-zhiwei">
                <h3>数据分析师 <i>[16:04发布]</i></h3>
                <p>经验5-10年 本科</p>
                <span class="xinzi">25k-45k</span>
               </div>
               <div class="company-info">
                 <img src="" alt="">
                 <span class="info-text">
                   <span>奇虎360金融</span>
                   <span>金融 上市公司 北京</span>
                 </span>
               </div>
             </li>
           </ul>
         </div>
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
          padding: 0 20px;
          .header{
            width: 100%;
            height: 40px;
            line-height: 40px;
            text-align: center;
            font-size: 18px;
            color: #ff6700;
            margin-bottom: 0;
            border-bottom: 1px solid #e2e2e2;
          }
          .content-box{
            width: 100%;
            height: 310px;
            overflow: hidden;
            .every-content{
              position: relative;
              margin-bottom: 0;
              margin-top: 10px;
              font-size: 16px;
              .type-name{
                display: inline-block;
                width: 48px;
                line-height: 18px;
                color: #000000;
                font-weight: 500;
              }
              .type-content{
                display: inline-block;
                width: 228px;
                line-height: 18px;
                a{
                  margin-right: 4px;
                }
              }
              .more{
                position:absolute;
                top: 0;
                right: 0;
                color: #000000;
              }
            }
          }
          .show-all{
            font-size: 16px;
            color: #ff6700;
            font-weight: 500;
            padding-top: 8px;
          }
        }
        .recommend-right{
          width: 812px;
          height: 400px;
          padding: 0 20px;
          border: 1px solid #e2e2e2;
          border-top: 2px solid #ff6700;
          box-sizing: border-box;
          .header{
            position: relative;
            width: 100%;
            height: 40px;
            margin-bottom: 0;
            line-height: 40px;
            border-bottom: 1px solid #e2e2e2;
            padding-right: 45px;
            .item{
              font-size: 15px;
              padding-right:16px;
            }
            .more{
              position: absolute;
              right: 0;
              top: 0;
              font-size: 14px;
              color: #000000;
            }
          }
          .recommend-content{
            padding: 0;
            margin: 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: flex-start;
            li{
              width: 250px;
              height: 157px;
              border: 1px solid #f5f7f7;
              padding: 18px 18px 0;
              box-sizing: border-box;
              margin-top: 12px;
              .company-zhiwei{
                border-bottom: 1px dashed #9fa0a0;
                h3{
                  margin-bottom: 0;
                  color: #000000;
                  font-size: 14px;
                  padding-bottom: 6px;
                  i{
                    color: #9fa0a0;
                    padding-left: 18px;
                  }
                }
                p{
                  margin-bottom: 0;
                  color: #9fa0a0;
                  font-size: 14px;
                  padding-bottom: 6px;
                }
                .xinzi{
                  display: block;
                  color: #ff6700;
                  padding-bottom: 12px;
                }
              }
              .company-info{
                padding-top: 16px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                img{
                  display: block;
                  width: 34px;
                  height: 34px;
                  background: red;
                  margin-right: 8px;
                }
                .info-text{
                  color: #000000;
                  span{
                    display: block;
                    font-size: 12px;
                    color: #000000;
                    &:last-child{
                      color: #9fa0a0;
                    }
                  }
                }
              }
            }
          }
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