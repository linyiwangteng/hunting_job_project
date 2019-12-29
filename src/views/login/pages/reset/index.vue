<template>
  <div class="login-warp-antd">
    <a-form id="components-form-demo-normal-login" class="login-form">
      <a-form-item>
        <a-input placeholder="手机号" v-model="Phone">
          <a-icon slot="prefix" type="user" style="color: #dd0101" />
        </a-input>
      </a-form-item>
      <div class="login-code">
        <a-form-item>
          <a-input placeholder="图形验证码" v-model="Code">
            <a-icon slot="prefix" type="picture" style="color: #dd0101" />
          </a-input>
        </a-form-item>
        <div class="code-img">
          <img :src="codeUrl" @click="onCode" alt="点击获取验证码" />
        </div>
      </div>
      <div class="login-code">
        <a-form-item>
          <a-input placeholder="短信验证码" v-model="MobileCode">
            <a-icon slot="prefix" type="phone" style="color: #dd0101" />
          </a-input>
        </a-form-item>
        <div class="code-btn" v-html="btnTitle" @click="validateBtn"></div>
      </div>
      <a-form-item>
        <a-input type="password" placeholder="密码" v-model="Password">
          <a-icon slot="prefix" type="lock" style="color: #dd0101" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input type="password" placeholder="再输一次密码" v-model="RePassword">
          <a-icon slot="prefix" type="lock" style="color: #dd0101" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" class="login-form-button" @click="onFind">打回密码</a-button>
        <a href="#/">去登录</a>
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
        if (Code == "") {
          this.$message.error("请输入图形验证码");
          return false;
        }
        api
          .sendFindCode({
            Phone,
            Code,
            PictureId,
            AccountType: 2
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
    onFind() {
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
        .findPwd({
          Phone,
          Code: MobileCode,
          Password,
          RePassword
        })
        .then(res => {
          if (res.code == 1) {
            this.$message.success("修改成功，快去登录吧");
            setTimeout(e => {
              location.href = "login.html";
            }, 1000);
          } else {
            this.$message.error(res.msg);
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
.code-btn {
  cursor: pointer;
}
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
  align-items: center;
  width: 300px;
  input {
    width: 150px !important;
  }
}
.ant-form-item {
  padding: 10px 0 10px 0;
  margin-bottom: 0;
}
</style>