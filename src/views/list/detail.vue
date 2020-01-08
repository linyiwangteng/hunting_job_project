<template>
  <div class="_container">
    <div class="position-head" data-companyid="2486">
      <div class="position-content">
        <div class="position-content-l">
          <div class="job-name" title="网页设计师">
            <!-- <h4 class="company">乐米网络设计部招聘</h4> -->
            <h1 class="name">{{introInfo.name}}</h1>
            <div class="marEdit"></div>
          </div>
          <dd class="job_request">
            <h3>
              <span class="salary">{{introInfo.moneyMin}}K -{{introInfo.moneyMax}}K</span>
              <span>/{{introInfo.address}} /</span>
              <span>{{introInfo.workExpName}}年 /</span>
              <span>{{introInfo.eduName}}及以上 /</span>
              <!-- <span>全职</span> -->
            </h3>
          </dd>
        </div>

        <div class="position-content-r clearfix">
          <div class="position-deal clearfix">
            <!-- <div class="jd_collection job-collection">
              <i class="icon-glyph-hollow-star"></i>收藏
            </div> -->
            <div class="resume-deliver">
              <a
                rel="nofollow"
                @click="gobaoming"
                class="send-CV-btn s-send-btn fr"
                href="javascript:;"
              >投个简历</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container clearfix" id="container">
      <div class="content_l fl">
        <dl class="job_detail">
          <dd class="job_bt">
            <h3 class="description">职位描述：</h3>
            <div class="job-detail">{{introInfo.description}}</div>
          </dd>
          <dd class="job-address clearfix">
            <h3 class="address">工作地址</h3>
            <div class="work_addr">
                {{introInfo.province}}-{{introInfo.city}}-{{introInfo.area}}
            </div>
          </dd>
        </dl>

        <!-- 公司详情页、职位详情页 推荐-->
      </div>
      <div class="content_r">
        <dl class="job_company" id="job_company">
          <dt>
            <a href="javascript:;" target="_blank">
              <img
                class="b2"
                width="200"
                :src="introInfo.logo || placehoderListImg()"
              />
              <div class="job_company_content">
                <h3 class="fl">
                  <em class="fl-cn">{{introInfo.companyName}}</em>
                </h3>
              </div>
            </a>
          </dt>
          <dd>
            <ul class="c_feature">
              <li>
                <i class="icon-glyph-fourSquare"></i>
                <h4 class="c_feature_name">联系人：</h4>
                <span class="hovertips">{{introInfo.contract}}</span>
              </li>
              <li>
                <i class="icon-glyph-trend"></i>
                <h4 class="c_feature_name">联系电话：</h4>
                <span class="hovertips">{{introInfo.phone}}</span>
              </li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>
    <!-- <div class="intro-detail">
      <h1>{{introInfo.name}}</h1>
      <div>{{introInfo.description}}</div>
      <div class="baoming-btn" @click="gobaoming">申请</div>
      <div class="clearfix"></div>
    </div>-->
    <!-- <intro :introInfo = 'schoolInfo'></intro> -->
    <!-- <div class="intro-container">
      <div class="intro-left">
        <ul>
          <li>
            <span class="intro-label">工作经验：</span>
            <span class="intro-val">{{introInfo.workExpName}}年</span>
          </li>
          <li>
            <span class="intro-label">薪资范围：</span>
            <span class="intro-val">{{introInfo.moneyMin}}-{{introInfo.moneyMax}}K</span>
          </li>
          <li>
            <span class="intro-label">工作地点：</span>
            <span class="intro-val">{{introInfo.address}}</span>
          </li>
          <li>
            <span class="intro-label">职责范围：</span>
            <span class="intro-val">{{introInfo.name}}</span>
          </li>
        </ul>
      </div>
      <div class="intro-right">
        <ul>
          <li>
            <span class="intro-label">企业名称：</span>
            <span class="intro-val">{{introInfo.companyName}}</span>
          </li>
          <li>
            <span class="intro-label">联系人：</span>
            <span class="intro-val">{{introInfo.contract}}</span>
          </li>
          <li>
            <span class="intro-label">联系电话：</span>
            <span class="intro-val">{{introInfo.phone}}</span>
          </li>
          <li>
            <span class="intro-label">公司LOGO：</span>
            <span class="intro-val">
              <img :src="introInfo.logo || placehoderListImg()" alt="LOGO">
            </span>
          </li>
        </ul>
      </div>
    </div>-->
  </div>
</template>

<script>
import Intro from "@/components/Intro.vue";
import OnlineApply from "@/components/OnlineApply.vue";
import { Select } from "ant-design-vue";
import api from "@/api";
import { placeholderImgMixin } from "@/mixins/placeholderImg.js";
export default {
  mixins: [placeholderImgMixin],
  data() {
    return {
      showall: false,
      introInfo: {}
    };
  },
  mounted() {
    this._getInfoData();
  },
  methods: {
    gobaoming() {
      let { id, jobFunctionId, companyId } = this.introInfo;
      api
        .positionADD({
          CompanyId: companyId,
          Type: 0,
          RecruitId: jobFunctionId
        })
        .then(res => {
          if (res.code == 1) {
            this.$message.success("申请成功");
          } else {
            this.$message.success(res.msg);
          }
        });
    },
    _getInfoData() {
      let { id } = this.$route.query;
      api.positionInfo({ id }).then(res => {
        this.introInfo = res.data;
      });
    }
  },
  components: {
    Intro,
    OnlineApply,
    Select
  }
};
</script>

<style lang="less" scoped>
._container {
  background: #fff;
  width: 1080px;
  margin: 0 auto;
}
.container {
  width: 1024px;
  margin: 0 auto;
  padding-bottom: 118px;
}
#container {
  background: #fff;
  margin-top: 0;
}

.container .content_l {
  position: relative;
  padding-top: 26px;
}

.content_l {
  width: 696px;
  background: url(//www.lgstatic.com/lg-www-fed/job-detail/page/index/img/gradient_e624ed8.png)
    repeat-y;
  background-position: right;
  padding-right: 52px;
  padding-top: 26px;
  min-height: 700px;
}
.position-head {
  background-color: #f2f5f4;
  padding: 30px 0 11px;
  width: 100%;
  min-width: 1024px;
}
.position-head .position-content {
  position: relative;
  width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.position-head .position-content .position-content-l {
  max-width: 696px;
}
.position-head .position-content .position-content-l .job-name {
  margin: 0 0 13px;
}
.position-head .position-content .position-content-l .job-name .company {
  margin: -2px 0 8px 0;
  font-size: 14px;
  color: #555;
  position: relative;
  left: 2px;
}
.position-head .position-content .position-content-l .job-name .name {
  position: relative;
  display: inline-block;
  height: 36px;
  font-size: 36px;
  color: #333;
  line-height: 36px;
  margin: 0;
}
.position-head .position-content .position-content-l .job_request {
  margin-top: 2px;
  font-size: 18px;
  color: #555;
}
.position-head .position-content .position-content-l .job_request h3 {
  font-size: 18px;
  margin: 0 auto 8px;
}
.position-head .position-content .position-content-l .job_request h3 .salary {
  color: #fd5f39;
}
.position-head .position-content .position-content-r {
  max-width: 328px;
  margin-top: 12px;
}
.position-head .position-content .position-content-r .position-deal {
  margin-left: 31px;
  display: flex;
  position: relative;
}
.position-head
  .position-content
  .position-content-r
  .position-deal
  .resume-deliver {
  position: relative;
  display: inline-block;
}
.position-head
  .position-content
  .position-content-r
  .position-deal
  .resume-deliver
  .s-send-btn {
  display: inline-block;
  margin-left: 17px;
  padding: 0 30px;
  border: 1px solid #dd0101;
  border-radius: 3px;
  height: 44px;
  line-height: 44px;
  font-size: 18px;
  background-color: #dd0101;
  color: #fff;
  cursor: pointer;
}
.position-head
  .position-content
  .position-content-r
  .position-deal
  .jd_collection {
  display: inline-block;
  height: 44px;
  width: 104px;
  line-height: 44px;
  text-align: center;
  border: 1px solid #dd0101;
  border-radius: 3px;
  background-color: #ebf0ef;
  cursor: pointer;
  font-size: 14px;
  color: #dd0101;
}
.content_r {
  float: left;
  width: 245px;
  margin-left: 31px;
  margin-top: 45px;
}

.clearfix:after {
  content: "";
  height: 0;
  clear: both;
  visibility: hidden;
}

.clearfix {
  display: block;
}
.baoming-btn {
  display: block;
  float: right;
  width: 120px;
  height: 44px;
  text-align: center;
  background: #ff0000;
  color: #ffffff;
  line-height: 44px;
  border-radius: 4px;
  cursor: pointer;
  &:active {
    background: rgba(255, 0, 0, 0.6);
  }
}
.intro-container {
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 1080px;
  background-color: #ffffff;
  ul {
    li {
      font-size: 14px;
      line-height: 40px;
      vertical-align: top;
      img {
        width: 120px;
        height: auto;
      }
    }
  }
}
</style>