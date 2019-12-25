<template>
  <div class="login-warp-antd">
    <a-form id="components-form-demo-normal-login" class="login-form">
      <a-form-item>
        <a-input placeholder="手机号" v-model="userName">
          <a-icon slot="prefix" type="user" style="color: #dd0101" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input type="password" placeholder="密码" v-model="password">
          <a-icon slot="prefix" type="lock" style="color: #dd0101" />
        </a-input>
      </a-form-item>
      <div class="login-code">
        <a-form-item>
          <a-input placeholder="验证码" v-model="code">
            <a-icon slot="prefix" type="picture" style="color: #dd0101" />
          </a-input>
        </a-form-item>
        <div class="code-img">
          <img :src="codeUrl" @click="onCode" alt='点击获取验证码'/>
        </div>
      </div>

      <a-form-item>
        <a class="login-form-forgot" href="#/reset">忘记密码</a>
        <a-button type="primary" class="login-form-button" @click="onLogin">登录</a-button>
        <a href="#/register">去注册</a>
      </a-form-item>
    </a-form>
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
      PictrueId: "",
      loginFlag: true
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  created() {},
  mounted() {
    this.onCode();
  },
  methods: {
    onCode() {
      api.getCode().then(res => {
        if (res.code == 1) {
          this.codeUrl = res.data.base64String;
          this.PictrueId = res.data.id;
        } else {
          this.$message.error("获取图形验证失败");
        }
      });
    },
    onLogin() {
      let {
        userName,
        password,
        accountType,
        platform,
        PictrueId,
        loginFlag
      } = this;
      if (userName == "") {
        this.$message.error("请输入手机号");
        return false;
      }
      if (this.checkPhone(userName)) {
        this.$message.error("手机号格式不正确");
        return false;
      }
      if (password == "") {
        this.$message.error("请输入密码");
        return false;
      }
      if (!loginFlag) {
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
            localStorage.setItem("accessToken", res.data.accessToken);
            this.$message.success("登录成功！");
            setTimeout(e => {
              location.href = "/home.html";
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
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
.login-warp-antd {
  padding: 80px 0 110px 0;
  ::-webkit-input-placeholder {
    color: rgba(221, 1, 1, 0.44) !important;
  }
  ::-moz-placeholder {
    color: rgba(221, 1, 1, 0.44) !important;
  }
  :-ms-input-placeholder {
    color: rgba(221, 1, 1, 0.44) !important;
  }
  .ant-btn-primary {
    background-color: #dd0101;
    border-color: #dd0101;
  }
  a {
    color: #dd0101;
  }
}
.login-form {
  width: 400px;
  margin: 0 auto;
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
</style>