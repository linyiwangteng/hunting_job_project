<template>
  <header class="public-header">
    <div class="header-part">
      <div class="main-part header-position">
        <span class="city-position">
          <i class="icon-location"></i>
          <span>当前城市：</span>
          <span>所有城市</span>
        </span>
        <span class="login-box">
          <i class="icon-user"></i>
          <span>
            <a href="login.html#/">求职者登录</a>
          </span>
          <i class="divide">｜</i>
          <span>
            <a :href="defcompanyUrl">企业登录</a>
          </span>
        </span>
      </div>
    </div>
    <nav class="nav-tab">
      <div class="main-part nav-position">
        <img src="./img/logo.png" alt="logo" class="site-logo" />
        <img src="./img/pc-culture.png" alt="culture" class="pc-culture" />
        <ul class="tabs-box">
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
export default {
  data() {
    return {
      defcompanyUrl: defcompanyUrl + "/app/#/admin/account/login",
      tabs: [
        {
          name: "首页",
          path: "/home.html#/",
          routeName: "home"
        },
        {
          name: "职位",
          path: "/jobPosition#/",
          routeName: "jobPosition"
        },
        {
          name: "企业",
          path: "company.html#/",
          routeName: "company"
        },
        {
          name: "校院招生",
          path: "school.html#/",
          routeName: "school"
        },
        {
          name: "机构培训",
          path: "javacript:;",
          routeName: "organization"
        },
        {
          name: "咨询中心",
          path: "consult.html#/",
          routeName: "consult"
        }
      ],
      routeName: "home"
    };
  },
  watch: {
    $route: function(to, from) {
      this.routeName = to.name;
    }
  }
};
</script>

<style lang="less">
@import "~@/assets/variable";
i {
  font-style: normal;
}
a {
  color: #ffffff;
}
.public-header {
  position: relative;
  width: 100%;
  min-width: @mainwidth;
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