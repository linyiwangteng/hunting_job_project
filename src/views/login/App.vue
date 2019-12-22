<template>
  <div id="app">
    <div class="nm-login nm-login-container default">
      <div class="nm-login-bg"></div>
      <div class="nm-login-box">
        <div class="nm-login-content">
          <div class="nm-login-logo">
            <img src="./pages/assets/logo.png" class="nm-login-logo-img" />
            <h1 class="nm-login-logo-title">龙江校企人才网</h1>
          </div>
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tab from "@/components/Tab";
export default {
  components: {}
};
</script>
<style lang="less" scoped>
.nm-login.default .nm-login-bg {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.55;
  background-image: url(./pages/assets/bg.jpg);
  background-position: 50%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  z-index: -1;
}

.nm-login.default .nm-login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -160px 0 0 -190px;
  padding: 5px 15px;
  border-radius: 5px;
  // text-align: center;
  width: 350px;
  background: hsla(0, 0%, 100%, 0.7);
}

.nm-login.default .nm-login-content .verifycode {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
}

.nm-login.default .nm-login-content .verifycode-input {
  padding-right: 10px;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.nm-login.default .nm-login-content .verifycode-img {
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

.nm-login.default .nm-login-content .verifycode-img img {
  margin-top: 1px;
  height: 38px;
  cursor: pointer;
}

.nm-login.default .nm-login-content .btn-login {
  width: 100%;
  cursor: pointer;
}

.nm-login.default .nm-login-logo {
  position: relative;
  padding: 10px 0 10px 85px;
}

.nm-login.default .nm-login-logo-img {
  position: absolute;
  left: 2px;
  top: 14px;
  padding: 5px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 75px;
  float: left;
}

.nm-login.default .nm-login-logo-title {
  margin: 0;
  padding: 0;
  height: 80px;
  line-height: 80px;
  font-size: 33px;
  text-align: left;
}

.nm-login.default .nm-icon {
  font-size: 2em;
}

.nm-login.default .el-input__inner {
  padding-left: 35px !important;
}
</style>
