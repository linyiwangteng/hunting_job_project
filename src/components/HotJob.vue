<template>
  <div class="top-right">
    <div class="enter-company">
      <h1>入驻企业 / 院校</h1>
      <ul class="companyList">
        <li v-for="company in conpanyList" :key="company.id" @click="goIntroDetail(company.id)">
          <span>
            <img :src="company.logo || placehoderListImg()" alt />
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      conpanyList: []
    };
  },
  mounted() {
    this._getCompany();
  },
  methods: {
    goIntroDetail(id) {
        location.href = `companylist.html#/detail?id=${id}`;
        // location.reload();
    },
    // 名企推荐
    _getCompany() {
      api
        .organizationList({
          row: 6,
          type: 2,
          companyType: 0
        })
        .then(res => {
          // console.log(res);
          if (res.code == 1) {
            this.conpanyList = res.data;
          }
        });
    }
  }
};
</script>

<style lang="less">
.top-right {
  width: 206px;
  height: 900px;
  .enter-company {
    border: 1px solid #e2e2e2;
    border-top: 2px solid #ff6700;
    height: 748px;
    padding: 10px;
    box-sizing: border-box;
    h1 {
      height: 40px;
      line-height: 40px;
      color: #ff6700;
      font-size: 18px;
      text-align: center;
      border-bottom: 1px solid #e2e2e2;
    }
    .companyList {
      padding: 9px 0;
      li {
        margin-bottom: 16px;
        cursor: pointer;
        span {
          display: block;
          width: 100%;
          img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .enter-entrance {
    padding-top: 14px;
    .entrance {
      display: block;
      width: 205px;
      height: 48px;
      border-radius: 24px;
      margin-top: 20px;
      cursor: pointer;
    }
    // .entrance1 {
    //   background: url("../../img/yuanxiao.png") no-repeat center;
    //   background-size: 100% auto;
    // }
    // .entrance2 {
    //   background: url("../../img/jigou.png") no-repeat center;
    //   background-size: 100% auto;
    // }
  }
}
</style>