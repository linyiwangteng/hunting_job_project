<template>
  <div>
    <div class="intro-detail">
      <h1>{{introInfo.name}}</h1>
      <p>{{introInfo.description}}</p>
      <div class="bm_box">
        <span class="baoming" @click="gobaoming">申请</span>
      </div>
    </div>
    <!-- <intro :introInfo = 'schoolInfo'></intro> -->
    <div class="intro-content" v-if="false">
      <div class="intro-left">
        <div class="title">
          <span>专业介绍</span>
        </div>
        <ul class="classList">
          <li v-for="i in 6" :key="i">
            <img
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577388785184&di=c620e89d4a07e85b07f8ea26d49f3ac8&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201802%2F12%2F20180212023234_kUciF.jpeg"
              alt
            />
            <div class="detailInfo">
              <span>专业：h5</span>
              <span>学费：¥1-¥4</span>
              <span>学期：3年</span>
              <p :class="showall? 'normal-intro':'sub-intro'">
                <i class="open-more" @click="handleShowall" v-if="showall">收起</i>
                <i class="open-more" @click="handleShowall" v-else>详情</i>
                介绍：是生生世世生生世世生生世世的分身乏术的方式发呆发呆发呆发呆是防辐射服发呆发反反复复反反复复发呆发发反反复复
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="intro-right">
        <div style="margin-left:5px;">
          <online-apply></online-apply>
          <div class="all-school">
            <h1>全国分校</h1>
            <div class="school-container">
              <img
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577388785184&di=c620e89d4a07e85b07f8ea26d49f3ac8&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201802%2F12%2F20180212023234_kUciF.jpeg"
                alt
                class="school-img"
              />
              <img
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577388785184&di=c620e89d4a07e85b07f8ea26d49f3ac8&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201802%2F12%2F20180212023234_kUciF.jpeg"
                alt
                class="school-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Intro from "@/components/Intro.vue";
import OnlineApply from "@/components/OnlineApply.vue";
import { Select } from "ant-design-vue";
import api from "@/api";
export default {
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
          RecruiitId: jobFunctionId
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
.bm_box {
  position: relative;
  width: 100%;
  height: 200px;
}
.intro-detail {
  position: relative;
  width: 1080px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  background: #ffffff;
  h1 {
    text-align: center;
  }
}
.intro-img-container {
  display: flex;
  justify-content: flex-start;
  li {
    width: 160px;
    height: 80px;
    margin-right: 20px;
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
}
.baoming {
  position: absolute;
  right: 20px;
  bottom: 20px;
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
</style>