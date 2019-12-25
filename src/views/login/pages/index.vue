<template>
  <div id="login_bg">
    <div class="login_wrapper">
      <div class="login_box">
        <form id="loginForm" action="index.html">
          <input type="text" name="userName" value placeholder="请输入登录手机号" v-model="userName" />
          <input type="password" name="password" placeholder="请输入密码" v-model="password" />
          <div class="login-code">
            <input type="text" name="code" placeholder="图形验证码" v-model="code" />
            <img :src="codeUrl" width="100" alt="获取验证码" @click="onCode"/>
          </div>
          <span class="error" style="display:none;" id="beError"></span>
          <!-- <label class="fl" for="remember">
            <input type="checkbox" id="remember" value checked="checked" name="autoLogin" /> 记住我
          </label>-->
          <a href="#/reset" class="fr" target="_blank">忘记密码？</a>

          <!--<input type="submit" id="submitLogin" value="登 &nbsp; &nbsp; 录" />-->
          <a
            style="color:#fff;"
            href="javascript:;"
            class="submitLogin"
            @click="onLogin"
            title="登录"
          >登录</a>
        </form>
        <div class="login_right">
          <div>还没有帐号？</div>
          <a href="#/register" class="registor_now">立即注册</a>
        </div>
      </div>
      <div class="login_box_btm"></div>
    </div>
  </div>
</template>

<script>
// import DefaultImg from "./assets/./assets/touxiang.jpg";
import api from "@/api/index.js";
export default {
  data() {
    return {
      userName: "",
      password: "",
      accountType: 2,
      platform: 2,
      code: "",
      codeUrl: "",
      PictrueId:'',
      loginFlag:true,
    };
  },
  created() {},
  mounted() {
    this.onCode();
  },
  methods: {
    onCode() {
      api
        .getCode()
          .then(res=>{
            if(res.code == 1){
              this.codeUrl = res.data.base64String;
              this.PictrueId = res.data.id;
            }else{
              this.$message.error('获取图形验证失败')
            }
          })
    },
    onLogin() {
      let { userName, password, accountType, platform, PictrueId, loginFlag } = this;
      if (userName == "") {
        this.$message.error("手机号不能为空");
        return false;
      }
      if (this.checkPhone(userName)) {
        this.$message.error("手机号格式不正确");
        return false;
      }
      if(!loginFlag){
        return false;
      }
      this.loginFlag = false;
      api
        .loginReuest({
          userName,
          password,
          accountType,
          PictrueId,
          platform
        })
        .then(res => {
          this.loginFlag = true;
          if (res.code == 1) {
            localStorage.setItem('accessToken',res.data.accessToken);
            this.$message.success('登录成功！');
            setTimeout(e=>{
              location.href = '/home.html';
            },1000)
          }
        });
    },
    checkPhone(phone) {
      if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(phone)) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.login-code {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
  input {
    width: 150px !important;
  }
}
</style>