<template>
  <div>
    <div class="intro-content">
      <div class="intro-left">
        <div class="title">
          <h1>{{schoolInfo.name}}</h1>
        </div>
        <div class="school-desc" v-html="schoolInfo.description"></div>
      </div>
      <div class="intro-right">
        <div style="margin-left:5px;">
          <online-apply
            :logo="schoolInfo.logo"
            :name="schoolInfo.name"
            :type="1"
            :id="schoolInfo.id"
          ></online-apply>
          <div class="all-school">
            <div class="school-container">
              <h2>{{schoolInfo.typeName}}地址：{{schoolInfo.address}}</h2>
              <h2>联系人：{{schoolInfo.contact}}</h2>
              <h2>联系电话：{{schoolInfo.phone}}</h2>
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
      schoolInfo: {},
      zhuanyelInfo: {}
    };
  },
  mounted() {
    this._getInfoData();
  },
  methods: {
    handleChange() {},
    handleShowall() {
      this.showall = !this.showall;
    },
    _getInfoData() {
      let { id } = this.$route.query;
      api
        .orgDetail({
          id
        })
        .then(res2 => {
          if (res2) {
            this.schoolInfo = res2.data;
          }
        });
    },
    gobaoming() {
      let { id, type } = this.schoolInfo;
      api
        .baoming({
          CompanyId: id,
          Type: type
        })
        .then(res => {
          console.log(res);
          if (res.code == 1) {
            message.success("报名成功");
          }
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
.intro-content {
  width: 1080px;
  margin: 20px auto;
  display: flex;
  justify-content: flex-start;
  .intro-left {
    // width: 872px;
    width: 726px;
    height: 816px;
    background-color: rgba(255, 255, 255, 1);
    // border: 1px solid #797979;
    padding: 20px 10px;
    .title {
      display: flex;
      justify-content: center;
      font-size: 18px;
      text-align: center;
    }
    .classList {
      padding: 20px 0;
      li {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        border: 1px solid #f0f0f0;
        padding: 20px 10px;
        margin-bottom: 20px;
        img {
          display: block;
          width: 60px;
          height: 60px;
        }
        .detailInfo {
          margin-left: 10px;
          span {
            margin-right: 40px;
          }
          .sub-intro {
            position: relative;
            width: 552px;
            padding-right: 30px;
            height: auto;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            .open-more {
              position: absolute;
              right: 0px;
              top: 0px;
              font-style: normal;
              cursor: pointer;
            }
          }
          .normal-intro {
            position: relative;
            .open-more {
              position: absolute;
              right: 12px;
              bottom: 0;
              font-style: normal;
              color: red;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
.all-school {
  width: 345px;
  background: #ffffff;
  // margin-left: 5px;
  margin-top: 10px;
  padding: 20px;
  .school-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-direction: column;
    .school-img {
      width: 146px;
      height: 40px;
      margin-bottom: 10px;
    }
  }
}
</style>