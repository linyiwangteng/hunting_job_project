<template>
  <div class="comp_container">
    <!-- <intro :introInfo = 'schoolInfo'></intro> -->
    <div class="fl intro-d">
      <div class="intro-header">
          <div class="intro-comp-title">
            <div class="comp-logo">
              <img :src="schoolInfo.logo" alt />
            </div>
            <div class="comp-name">
              <h2>{{schoolInfo.name}}</h2>
            </div>
          </div>
          <div class="comp-desc">
            <p>{{schoolInfo.typeName}}地址：{{schoolInfo.address}}</p>
            <p>联系人：{{schoolInfo.contact}}</p>
            <p>联系电话：{{schoolInfo.phone}}</p>
          </div>
        </div>
        <div class="intro-desc">
          <p class="comp_desc_icon">企业描述</p>
          <p style="margin-bottom:40px;">{{schoolInfo.description}}</p>
        </div>
    </div>
    <div class="fr">
      <hot-job />
    </div>
  </div>
</template>

<script>
import Intro from "@/components/Intro.vue";
import OnlineApply from "@/components/OnlineApply.vue";
import HotJob from "@/components/HotJob.vue";
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
      let { id, schoolId } = this.$route.query;
      api.orgDetail({ id }).then(res => {
        this.schoolInfo = res.data;
        this.schoolInfo.typeName = "企业";
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
          if (res.code == 1) {
            this.$message.success("报名成功");
          } else {
            this.$message.success(res.msg);
          }
        });
    }
  },
  components: {
    Intro,
    OnlineApply,
    Select,
    HotJob
  }
};
</script>

<style lang="less" scoped>
.intro-d{
  width: 700px;
}
.comp_container{
  width: 1024px;
  margin: 0 auto;
  overflow: hidden;
  padding:20px; 
  background: #fff;
}
.comp_desc_icon {
  font-size: 16px;
  color: #555;
  border-left: 7px solid #dd01019c;
  /* padding: 2px 0 0 7px; */
  line-height: 16px;
  margin-bottom: 20px;
  // margin-left: 30px;
  text-indent: 10px;
}
.intro-header {
  width: 100%;
  // margin: 0 auto;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  .intro-comp-title {
    width: 100%;
    margin-bottom: 20px;
    .comp-logo {
      display: inline-block;
      vertical-align: bottom;
      width: 300px;
      img {
        width: 100%;
      }
    }
    .comp-name {
      display: inline-block;
      vertical-align: bottom;
      margin-left: 20px;
    }
  }
}
</style>