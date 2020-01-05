<template>
  <div class="home">
    <div class="home-top">
      <div class="top-left">
        <div class="top-left-top">
          <div class="banner">
            <banner></banner>
          </div>
          <div class="notice">
            <notice></notice>
          </div>
        </div>
        <div class="top-left-middle">
          <search />
        </div>
        <div class="top-left-bottom">
          <select-city />
        </div>
      </div>
      <!-- 入驻企业/院校 -->
      <div class="top-right">
        <div class="enter-company">
          <h1>入驻企业 / 院校</h1>
          <ul class="companyList">
            <li v-for="company in conpanyList" :key="company.id" @click="goIntroDetail('companylist',company.id)">
              <span>
                <img :src="company.logo || placehoderListImg()" alt />
              </span>
            </li>
          </ul>
        </div>
        <div class="enter-entrance">
          <span @click="goOriginLogin" class="entrance entrance1"></span>
          <span @click="goOriginLogin" class="entrance entrance2"></span>
        </div>
      </div>
    </div>
    <div class="home-middle">
      <div class="ads-box" v-if="middleAdv.length">
        <img src="@/assets/ads_demo.png" alt />
      </div>
      <div class="hot-recommend">
        <!-- 热推岗位 -->
        <div class="recommend-left">
          <h2 class="header">热推岗位</h2>
          <section class="content-box">
            <!-- <p class="every-content" v-for="item in 11" :key="item"> -->
            <p class="every-content">
              <span class="type-content">
                <a
                  href="javascript:;"
                  @click="goList(item.jobFunctionLv2Id)"
                  v-for="item in HotJobList"
                  :key="item.jobFunctionLv2Id"
                  v-text="item.name"
                ></a>
              </span>
            </p>
          </section>
          <!-- <span class="show-all">显示全部职位</span> -->
        </div>
        <!-- 具体职位 -->
        <div class="recommend-right">
          <h2 class="header">最新职位</h2>
          <ul class="position_list_ul">
            <li
              class="position_list_item default_list"
              v-for="(item,index) in HomeJobList"
              :key="index"
              @click="goIntroDetail('list',item.id)"
            >
              <span class="top_icon direct_recruitment" style="display: inline;"></span>
              <div class="position-top">
                <div class="position-item-title">
                  {{item.name}}
                  <!-- <span class="title-tip">[{{item.publishedTime}}]</span> -->
                </div>
                <div class="position-title-desc">经验{{item.workExpName}}年 {{item.eduName}}</div>
                <div class="postion-money">{{item.moneyMin}}-{{item.moneyMax}}k</div>
              </div>
              <div class="position-bottom">
                <div class="company-item">
                  <div class="cmp-img">
                    <img :src="item.logo || placehoderListImg()" alt />
                  </div>
                  <div class="cmp-msg">
                    <div class="cmp-name">{{item.companyName}}</div>
                    <!-- <div class="cmp-desc">{{item.description}}</div> -->
                    <div class="cmp-address">{{item.city}} {{item.area}}</div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <schoolRecommend recommend-title="名校热推" :organization-list="universityList" />
      <schoolRecommend
        recommend-title="热招培训机构"
        update-style="width:160px"
        :organization-list="organizationList"
      >
        <template v-slot:default="info">
          <div class="school-logo logo-box">
            <img class="jg-logo" :src="info.item.logo || placehoderListImg()" alt />
            <div class="jg-content">
              <a href="javascript:;">{{info.item.name}}</a>
              <span class="content">{{info.item.address}}</span>
              <!-- <span class="content">到培训脸</span> -->
            </div>
          </div>
          <!-- <p>正在热招   课程***********<br/>招聘200人</p> -->
        </template>
      </schoolRecommend>
    </div>
    <div class="home-bottom" v-if="footAdv.length">
      <!-- <img src="@/assets/allads-demo.png" alt=""> -->
      <template v-for="adv in footAdv">
        <a :href="adv.url" target="_blank" :key="adv.id">
          <img :src="adv.imgPath" alt />
        </a>
      </template>
    </div>
  </div>
</template>

<script>
import Banner from "../components/banner";
import Notice from "../components/notice";
import Search from "../components/search";
import SelectCity from "../components/select-city";
import schoolRecommend from "../components/school-recommend";
import api from "@/api/index.js";
import { isArray } from "util";
import { placeholderImgMixin } from "@/mixins/placeholderImg.js";
import { defcompanyUrl } from "@/config";
export default {
  mixins: [placeholderImgMixin],
  data() {
    return {
      middleAdv: [],
      footAdv: [],
      conpanyList: [],
      universityList: [],
      organizationList: [],
      isShowNotice: false,
      isShowBanner: false,
      HotJobList: [],
      HomeJobList: []
    };
  },
  mounted() {
    this._getMiddleAdv();
    this._getFootAdv();
    this._getCompany();
    this._getUniverties();
    this._getOrganization();
    this._getHotHomeJob();
    this.getGobTuijian();
  },
  methods: {
    getGobTuijian() {
      api
        .hometuijian({
          type: 1,
          row: 6
        })
        .then(res => {
          if (res.code == 1) {
            this.HomeJobList = res.data;
          }
        });
    },
    _getMiddleAdv() {
      api
        .advList({
          type: 2,
          topRows: 1
        })
        .then(res => {
          if (res.code == 1) {
            this.middleAdv = res.data;
          }
        });
    },
    _getHotHomeJob() {
      api.homeHotJobList().then(res => {
        if (res.code == 1) {
          if (isArray(res.data)) {
            this.HotJobList = [...res.data];
          }
        }
      });
    },
    _getFootAdv() {
      api
        .advList({
          type: 3,
          topRows: 8
        })
        .then(res => {
          if (res.code === 1) {
            this.footAdv = res.data;
          }
        });
    },
    // 名企推荐
    _getCompany() {
      api
        .organizationList({
          row: 6,
          type: 2,
          companyType: 0
        })
        .then(res => {
          // console.log(res);
          this.conpanyList = res.data;
        });
    },
    // 名校推荐
    _getUniverties() {
      api
        .organizationList({
          row: 6,
          type: 2,
          companyType: 1
        })
        .then(res => {
          // console.log(res);
          this.universityList = res.data;
        });
    },
    // 机构推荐
    _getOrganization() {
      api
        .organizationList({
          row: 6,
          type: 2,
          companyType: 2
        })
        .then(res => {
          this.organizationList = res.data;
        });
    },
    goIntroDetail(type, id) {
      location.href = `${type}.html#/detail?id=${id}`;
      // location.reload();
    },
    goList(id) {
      location.href = "list.html#/?id=" + id;
    },
    goOriginLogin() {
      location.href = defcompanyUrl;
    }
  },
  components: {
    Banner,
    Notice,
    Search,
    SelectCity,
    schoolRecommend
  }
};
</script>

<style lang="less">
.position_list_ul {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .position_list_item {
    overflow: hidden;
    float: left;
    position: relative;
    width: 250px;
    height: 150px;
    // margin: 12px 12px 0 0;
    padding: 20px 18px 0;
    border: 1px solid #eaeeed;
    background-color: #fff;
    margin-top: 15px;
    .top_icon {
      position: absolute;
      top: -1px;
      left: -1px;
      width: 40px;
      height: 40px;
      background-position: center;
      background-repeat: no-repeat;
    }
    .direct_recruitment {
      background-image: url(//www.lgstatic.com/lg-www-fed/index/modules/job_list/img/direct-recruit@2x_0d49da5.png);
      background-size: 40px 40px;
    }
    .position-top {
      border-bottom: 1px dotted #a2a3a3;
      .position-item-title {
        font-size: 14px;
        color: #000;
        .title-tip {
          color: #9fa0a0;
        }
      }
      .position-title-desc {
        
        color: #9fa0a0;
      }
      .postion-money {
        color: #ff6700;
      }
    }
    .position-bottom {
      .company-item {
        display: flex;
        // margin-bottom: 15px;
        padding: 14px 0 14px;
        box-sizing: border-box;
        .cmp-img {
          width: 40px;
          height: 40px;
          overflow: hidden;
          margin-right: 15px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .cmp-msg {
          text-align: left;
          .cmp-name{
            color: #000;
          }
          .cmp-desc {
            display: inline-block;
            width: 80px;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            color: rgb(176, 177, 177);
          }
          .cmp-address {
            vertical-align: top;
            display: inline-block;
            color: rgb(176, 177, 177);
          }
        }
      }
    }
  }
}
.home {
  width: 1180px;
  height: auto;
  margin: 0 auto;
  &-top {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 30px;
    padding-bottom: 38px;
    height: auto;
    .top-left {
      width: 974px;
      .top-left-top {
        width: 100%;
        height: 348px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        .banner {
          position: relative;
          width: 580px;
          height: 348px;
        }
        .notice {
          width: 394px;
          height: 348px;
          // background: green;
        }
      }
      .top-left-middle {
        widows: 100%;
        height: 148px;
      }
      .top-left-bottom {
        width: 100%;
        height: 404px;
      }
    }
    .top-right {
      width: 206px;
      height: 900px;
      .enter-company {
        border: 1px solid #e2e2e2;
        border-top: 2px solid #ff6700;
        height: 748px;
        padding: 10px;
        box-sizing: border-box;
        h1 {
          height: 40px;
          line-height: 40px;
          color: #ff6700;
          font-size: 18px;
          text-align: center;
          border-bottom: 1px solid #e2e2e2;
        }
        .companyList {
          padding: 9px 0;
          li {
            margin-bottom: 16px;
            cursor: pointer;
            span {
              display: block;
              width: 182px;
              height: 52px;
              img {
                display: block;
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
      .enter-entrance {
        padding-top: 14px;
        .entrance {
          display: block;
          width: 205px;
          height: 48px;
          border-radius: 24px;
          margin-top: 20px;
          cursor: pointer;
        }
        .entrance1 {
          background: url("../../img/yuanxiao.png") no-repeat center;
          background-size: 100% auto;
        }
        .entrance2 {
          background: url("../../img/jigou.png") no-repeat center;
          background-size: 100% auto;
        }
      }
    }
  }
  &-middle {
    width: 100%;
    height: auto;
    color: #ffffff;
    padding-bottom: 46px;
    .hot-recommend {
      margin-top: 28px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .recommend-left {
        width: 331px;
        height: 400px;
        border: 1px solid #e2e2e2;
        border-top: 2px solid #ff6700;
        padding: 0 20px;
        .header {
          width: 100%;
          height: 40px;
          line-height: 40px;
          text-align: center;
          font-size: 18px;
          color: #ff6700;
          margin-bottom: 0;
          border-bottom: 1px solid #e2e2e2;
        }
        .content-box {
          width: 100%;
          height: 310px;
          overflow: hidden;
          .every-content {
            position: relative;
            margin-bottom: 0;
            margin-top: 10px;
            font-size: 16px;
            .type-name {
              display: inline-block;
              width: 48px;
              line-height: 18px;
              color: #000000;
              font-weight: 500;
            }
            .type-content {
              display: inline-block;
              width: 228px;
              line-height: 18px;
              display: flex;
              flex-wrap: wrap;
              a {
                margin-right: 4px;
                color: #000;
                display: block;
                padding: 10px 10px 6px 0;
              }
            }
            .more {
              position: absolute;
              top: 0;
              right: 0;
              color: #000000;
            }
          }
        }
        .show-all {
          font-size: 16px;
          color: #ff6700;
          font-weight: 500;
          padding-top: 8px;
        }
      }
      .recommend-right {
        width: 812px;
        height: 400px;
        padding: 0 20px;
        border: 1px solid #e2e2e2;
        border-top: 2px solid #ff6700;
        box-sizing: border-box;
        .header {
          position: relative;
          width: 100%;
          height: 40px;
          margin-bottom: 0;
          line-height: 40px;
          border-bottom: 1px solid #e2e2e2;
          padding-right: 45px;
          color: #ff6700;
          font-size: 18px;
          .item {
            font-size: 15px;
            padding-right: 16px;
          }
          .more {
            position: absolute;
            right: 0;
            top: 0;
            font-size: 14px;
            color: #000000;
          }
        }
        .recommend-content {
          padding: 0;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          // justify-content: space-around;
          align-items: flex-start;
          li {
            width: 250px;
            height: 157px;
            border: 1px solid #f5f7f7;
            padding: 18px 18px 0;
            box-sizing: border-box;
            margin-top: 12px;
            &:hover {
              background: rgba(0, 0, 0, 0.06);
            }
            .company-zhiwei {
              border-bottom: 1px dashed #9fa0a0;
              h3 {
                margin-bottom: 0;
                color: #000000;
                font-size: 14px;
                // padding-bottom: 6px;
                i {
                  color: #9fa0a0;
                  padding-left: 18px;
                  font-style: normal;
                }
              }
              p {
                margin-bottom: 0;
                color: #9fa0a0;
                font-size: 14px;
                padding-bottom: 6px;
              }
              .xinzi {
                display: block;
                color: #ff6700;
                padding-bottom: 10px;
              }
            }
            .company-info {
              padding-top: 13px;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              img {
                display: block;
                width: 34px;
                // height: 34px;
                background: red;
                margin-right: 8px;
              }
              .info-text {
                color: #000000;
                span {
                  display: block;
                  font-size: 12px;
                  color: #000000;
                  &:last-child {
                    color: #9fa0a0;
                  }
                }
              }
            }
          }
        }
      }
    }
    .logo-box {
      display: flex;
      justify-content: space-around !important;
      align-items: center;
      .jg-logo {
        display: block;
        width: 77px;
        height: 77px;
      }
      .jg-content {
        width: 95px;
        height: auto;
        text-align: center;
        a {
          display: block;
        }
        .content {
          display: block;
          width: 95px;
          text-align: center;
          color: #000000;
        }
      }
    }
  }
  &-bottom {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
    img {
      display: block;
      width: 1168px;
      height: auto;
      margin: 0 auto;
    }
  }
}
</style>
