<template>
  <header class="public-header">
    <div class="header-part" v-if="isShow">
      <div class="main-part header-position">
        <span class="city-position">
          <i class="icon-location"></i>
          <span>当前城市：</span>
          <span id="city" v-text="cityName"></span>
        </span>
        <span class="login-box">
          <i class="icon-user"></i>
          <span v-if="!login">
            <span>
              <a href="login.html#/">求职者登录</a>
            </span>
            <i class="divide">｜</i>
            <span>
              <a :href="defcompanyUrl">企业登录</a>
            </span>
          </span>
          <span v-else>
            <a-dropdown :trigger="['click']">
              <a class="ant-dropdown-link" href="javascript::;">
                简历刷新
                <a-icon type="down" />
              </a>
              <a-menu slot="overlay">
                <a-menu-item key="0">
                  <a href="javascript:;" @click="goCenter">账户信息</a>
                </a-menu-item>
                <a-menu-item key="1">
                  <a href="/delivery.html">我的院校</a>
                </a-menu-item>
                <a-menu-item key="2">
                  <a href="/delivery.html">报名机构</a>
                </a-menu-item>
                <a-menu-item key="3">
                  <a href="/delivery.html">职位投递</a>
                </a-menu-item>
                <a-menu-item key="4" @click="outLogin">退出</a-menu-item>
              </a-menu>
            </a-dropdown>
            <i class="divide">｜</i>
            <span>
              <a :href="defcompanyUrl">更多</a>
            </span>
          </span>
        </span>
      </div>
    </div>
    <nav class="nav-tab">
      <div class="main-part nav-position">
        <img src="./img/logo.png" alt="logo" class="site-logo" />
        <img src="./img/pc-culture.png" alt="culture" class="pc-culture" />
        <ul class="tabs-box" v-if="isShow">
          <!-- <li class="active">首页</li>
            <li>职位</li>
            <li>企业</li>
            <li>校院招生</li>
            <li>机构培训</li>
          <li>咨询中心</li>-->
          <li
            v-for="(tab,index) in tabs"
            :key="index"
            :class="tab.routeName == routeName ? 'active':''"
          >
            <a :href="tab.path">{{tab.name}}</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { defcompanyUrl } from "../config";
// console.log("process.env.NODE_ENV", process.env.NODE_ENV);
import api from "@/api/index.js";
import { log } from "util";
// 上线要变
let _file = "";

export default {
  props: {
    tab: {
      // 必须提供字段
      required: false,
      default: true
    }
  },
  data() {
    return {
      login: false,
      cityName: "",
      isShow: false,
      defcompanyUrl: defcompanyUrl + "/app/#/admin/account/login",
      tabs: [
        {
          name: "首页",
          path: _file + "home.html#/",
          routeName: "home"
        },
        {
          name: "职位",
          path: _file + "list.html#/",
          routeName: "jobPosition"
        },
        {
          name: "企业",
          path: _file + "companylist.html#/",
          routeName: "companylist"
        },
        {
          name: "校院招生",
          path: _file + "school.html#/",
          routeName: "school"
        },
        {
          name: "机构培训",
          path: _file + "organization.html#/",
          routeName: "organization"
        },
        {
          name: "咨询中心",
          path: _file + "consult.html#/",
          routeName: "consult"
        }
      ],
      routeName: ""
    };
  },
  mounted() {
    this.isShow = this.tab;
    this.cityName = JSON.parse(localStorage.getItem("ipCity"))["cname"];
    let accessToken = localStorage.getItem("accessToken");
    console.log(typeof accessToken);

    if (accessToken != null && accessToken != "null") {
      this.login = true;
    }
  },
  methods: {
    outLogin() {
      window.localStorage.removeItem("accessToken");
      window.location.href = "/login.html";
    },
    goCenter() {
      let accessToken = localStorage.getItem("accessToken");
      if (accessToken != null && accessToken != "null") {
        location.href = "/center.html";
      } else {
        location.href = "/login.html";
      }
    }
  },
  watch: {
    $route: function(to, from) {
      this.routeName = to.meta.key;
    },
    tab(nv, ov) {
      this.isShow = nv;
    }
  }
};
</script>

<style lang="less">
@import "~@/assets/variable";

.public-header {
  position: relative;
  width: 100%;
  min-width: @mainwidth;
  i {
    font-style: normal;
  }
  a {
    color: #ffffff;
  }
  .header-part {
    height: 37px;
    background: @maincolor;
  }

  .main-part {
    width: @mainwidth;
    height: 100%;
    margin: 0 auto;
  }
  .header-position {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .city-position {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    color: #ffffff;
    margin-right: 32px;
  }
  .icon-location {
    display: block;
    width: 10px;
    height: 12px;
    background: url("./img/icon-location.png") no-repeat center;
    background-size: 100% auto;

    margin-right: 4px;
  }
  .login-box {
    position: relative;
    width: 197px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: @logincolor;
    color: #ffffff;
    a {
      color: #ffffff;
    }
  }
  .icon-user {
    display: block;
    width: 13px;
    height: 11px;
    background: url("./img/icon-user.png") no-repeat center;
    background-size: 100% auto;
    margin-right: 4px;
  }
  .divide {
    padding: 0 4px;
  }
  .nav-tab {
    height: 88px;
    background: @subcolor;
  }
  .nav-position {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .site-logo {
    width: 324px;
    height: 88px;
    margin-right: 72px;
  }
  .pc-culture {
    width: 157px;
    height: 51px;
    margin-right: 56px;
  }
  .tabs-box {
    width: 570px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    li {
      height: 100%;
      padding: 0 20px;
      font-size: 18px;
      color: #ffffff;
      line-height: 88px;
      cursor: pointer;
      a {
        display: block;
        color: #ffffff;
        line-height: inherit;
      }
      &.active {
        background: @logincolor;
      }
      &:hover {
        background: @logincolor;
      }
    }
  }
}
</style>