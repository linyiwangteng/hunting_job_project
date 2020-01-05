<template>
  <div id="container">
    <div class="clearfix">
      <div class="content_l">
        <dl class="c_delivery">
          <dt>
            <h1>
              <em></em>
              {{ type | formatTitle }}
            </h1>
            <a class="d_refresh" href="javascript:;" @click="getToudiList()">刷新</a>
          </dt>
          <dd>
            <div class="delivery_tabs">
              <ul class="reset">
                <li class="current">
                  <a href="javascript:;">全部</a>
                </li>
              </ul>
            </div>
            <form id="deliveryForm">
              <ul class="reset my_delivery">
                <li :key="index" v-for="(item,index) in list">
                  <div class="d_item">
                    <img :src="item.logo" class="left-logo" alt />
                    <div>
                      <div class="clear"></div>
                      <a
                        title="公司名称"
                        class="d_jobname"
                        target="_blank"
                        href="javascript:;"
                        v-text="item.companyName"
                      ></a>
                      <!-- <span class="d_time">2014-07-01 17:15</span> -->
                      <div class="clear"></div>
                      <div class="d_resume">{{ item.recruitName }}</div>
                    </div>
                  </div>
                </li>
              </ul>
              <input type="hidden" value="-1" name="tag" />
              <input type="hidden" value name="r" />
            </form>
          </dd>
        </dl>
      </div>
      <div class="content_r">
        <div class="right-nav">
          <div class="scroll-fix">
            <ul class="right-nav__content">
              <li class="right-nav__item" @click="goTouDi(3)">
                <i class="mr_base_i"></i>
                <span class="mr_m_name">我的简历</span>
              </li>
              <li class="right-nav__item" @click="goTouDi(1)">
                <i class="mr_edu_i"></i>
                <span class="mr_m_name">我的院校</span>
              </li>
              <li class="right-nav__item" @click="goTouDi(2)">
                <i class="mr_self_i"></i>
                <span class="mr_m_name">报名机构</span>
              </li>
              <li class="right-nav__item" @click="goTouDi(0)">
                <i class="mr_works_i"></i>
                <span class="mr_m_name">我的投递</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import DefaultImg from "./assets/./assets/touxiang.jpg";
import api from "@/api";
import { isArray } from "util";
export default {
  filters: {
    formatTitle(t) {
      switch (t) {
        case "1":
          return "我的院校";
          break;
        case "2":
          return "报名机构";
          break;
        case "0":
          return "职位投递";
          break;
        default:
          break;
      }
    }
  },
  data() {
    return {
      list: [],
      type: this.getURIParam("type")
    };
  },
  beforeCreate() {},
  created() {},
  mounted() {
    this.getToudiList();
  },
  methods: {
    goTouDi(type) {
      if (type == 3) {
        location.href = `center.html#/resume`;
      } else {
        location.href = `delivery.html?type=${type}`;
      }
    },
    getURIParam(key) {
      var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    },
    getToudiList() {
      let type = this.getURIParam("type");
      api
        .getTouDiList({
          StartTime: "1990-01-01",
          EndTime: "2025-01-01",
          Type: type,
          Status: -1
        })
        .then(res => {
          if (res.code == 1) {
            if (isArray(res.data.rows)) {
              this.list = [...res.data.rows];
            }
          }
        });
    }
  }
};
</script>
<style lang="less" scoped>
.my_delivery li {
  height: 100px;
  margin-bottom: 10px;
}
.d_item .left-logo {
  width: 150px;
  height: 65px;
}
.d_item {
  display: flex;
  flex-direction: row;
  .left-logo {
    width: 150px;
    margin-right: 20px;
  }
}

.right-nav .right-nav__content {
  border: 1px solid #f2f2f2;
}

.right-nav .right-nav__content .right-nav__item {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
  height: 50px;
  border-left: 3px solid transparent;
  line-height: 50px;
  margin-left: -1.5px;
  position: relative;
  cursor: pointer;
}

.right-nav .right-nav__content .right-nav__item i {
  display: inline-block;
  width: 18px;
  height: 18px;
  background: url(//www.lgstatic.com/lg-www-fed/mycenter/modules/common/img/icons_mr_0ef4596.png)
    no-repeat;
  margin: 0 15px 0 31px;
}

.right-nav .right-nav__content .right-nav__item .mr_base_i {
  background-position: -24px -117px;
}

.right-nav .right-nav__content .right-nav__item .mr_self_i {
  background-position: -67px -262px;
}

.right-nav .right-nav__content .right-nav__item .mr_works_i {
  background-position: -24px -137px;
}

.right-nav .right-nav__content .right-nav__item .mr_project_i {
  background-position: -67px -177px;
}

.right-nav .right-nav__content .right-nav__item .mr_edu_i {
  background-position: -24px -156px;
}

.right-nav .right-nav__content .right-nav__item .mr_social_account_i {
  background: url(//www.lgstatic.com/lg-www-fed/mycenter/modules/common/img/social_account_a5d472f.png)
    no-repeat;
  background-position: -5px -5px;
}

.right-nav .right-nav__content .right-nav__item .mr_portfolio_account_i {
  background: url(//www.lgstatic.com/lg-www-fed/mycenter/modules/myresume_new/img/photo@2x_defa2c7.png)
    no-repeat;
  background-size: contain;
}

.right-nav .right-nav__content .right-nav__item .editor-tool {
  top: 50%;
  transform: translateY(-50%);
  padding: 0;
  right: 20px;
}

.right-nav .right-nav__content .right-nav__item .editor-tool .del-btn {
  margin-left: 20px;
}

.right-nav .right-nav__content .right-nav__item.active {
  color: #00b88d;
  border-color: #00b88d;
  border-width: 3px;
}

.right-nav .right-nav__content .right-nav__item.active .mr_base_i {
  background-position: -5px -117px;
}

.right-nav .right-nav__content .right-nav__item.active .mr_self_i {
  background-position: -5px -262px;
}

.right-nav .right-nav__content .right-nav__item.active .mr_works_i {
  background-position: -5px -137px;
}

.right-nav .right-nav__content .right-nav__item.active .mr_project_i {
  background-position: -5px -177px;
}

.right-nav .right-nav__content .right-nav__item.active .mr_edu_i {
  background-position: -5px -156px;
}

.right-nav .right-nav__content .right-nav__item.active .mr_social_account_i {
  background: url(//www.lgstatic.com/lg-www-fed/mycenter/modules/common/img/social_account_a5d472f.png)
    no-repeat;
  background-position: -5px -36px;
}

.right-nav .right-nav__content .right-nav__item:hover {
  background: #fafafa;
}

.right-nav .right-nav__content .right-nav__item:hover .editor-tool {
  visibility: visible;
}
</style>