<template>
  <div id="login_bg">
    <div class="login_wrapper">
      <div class="login_box">
        <form id="loginForm">
          <input type="text" v-model="Phone" placeholder="请输入手机号" />
          <div class="login-code">
            <input type="text" name="code" placeholder="图形验证码" v-model="Code" />
            <img :src="codeUrl" width="100" alt="获取验证码" @click="onCode" />
          </div>
          <div class="login-code">
            <input type="text" name="code" placeholder="验证码" v-model="MobileCode" />
            <div class="sendCode" @click="validateBtn" v-html="btnTitle"></div>
          </div>
          <!-- <span class="error" style="display:none;" id="beError"></span> -->
          <input type="password" v-model="Password" placeholder="请输入密码" />
          <input type="password" v-model="RePassword" placeholder="请再次输入密码" />
          <input type="button" id="submitLogin" @click="onRegister" value="注册" />
        </form>
        <div class="login_right">
          <div>已有帐号</div>
          <a href="login.html" class="registor_now">直接登录</a>
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
      Phone: "",
      MobileCode: "",
      Code: "",
      codeUrl: "",
      Password: "",
      RePassword: "",
      btnTitle: "获取验证码",
      disabled: false,
      PictureId: ""
    };
  },
  created() {
    this.onCode();
  },
  methods: {
    onCode() {
      api.getCode().then(res => {
        if (res.code == 1) {
          this.codeUrl = res.data.base64String;
          this.PictureId = res.data.id;
        } else {
          this.$message.error("获取图形验证失败");
        }
      });
    },
    validateBtn() {
      if (!this.disabled) {
        let { Phone, Code, PictureId } = this;
        if (Phone == "") {
          this.$message.error("手机号不能为空");
          return false;
        }
        api
          .sendCode({
            Phone,
            Code,
            PictureId
          })
          .then(res => {
            if (res.code == 1) {
              this.$message.success("发送成功");
              //倒计时
              let time = 60;
              let timer = setInterval(() => {
                if (time == 0) {
                  clearInterval(timer);
                  this.disabled = false;
                  this.btnTitle = "获取验证码";
                } else {
                  this.btnTitle = time + "秒后重试";
                  this.disabled = true;
                  time--;
                }
              }, 1000);
            } else {
              this.$message.error(res.msg);
            }
          });
      }
    },
    onRegister() {
      let { Phone, MobileCode, Password, RePassword } = this;
      if (Phone == "") {
        this.$message.error("手机号不能为空");
        return false;
      }
      if (this.checkPhone(Phone)) {
        this.$message.error("手机号格式不正确");
        return false;
      }
      if (MobileCode == "") {
        this.$message.error("手机验证码不能为空");
        return false;
      }
      if (Password == "") {
        this.$message.error("密码不能为空");
        return false;
      }
      if (RePassword == "") {
        this.$message.error("请再次输入新密码");
        return false;
      }
      if (Password !== RePassword) {
        this.$message.error("两次密码输入不一致");
        return false;
      }
      api
        .register({
          Phone,
          MobileCode,
          Password,
          RePassword
        })
        .then(res => {
          if (res.code == 1) {
            this.$message.success("注册成功，快去登录吧");
            setTimeout(e => {
              location.reload();
            }, 1000);
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
.sendCode {
  cursor: pointer;
}
.login-code {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
  input {
    width: 150px !important;
  }
}
.clearfix:after {
  content: "";
  height: 0;
  clear: both;
  visibility: hidden;
}
.clearfix {
  display: inline-block;
} /* for IE/Mac */
</style>