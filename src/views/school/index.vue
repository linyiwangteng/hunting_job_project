<template>
  <div class="consult-container">
    <filter-options @requestList="requestList"></filter-options>
    <div class="list-container" v-if="schoolsList.length !== 0">
      <span
        class="options"
        v-for="school in schoolsList"
        :key="school.id"
        @click="goDetail(school.id,school.schoolID)"
      >
        <img :src="school.logo || placehoderListImg()" alt class="schoolLogo" />
        <h1 class="paddingleft">{{school.name}}</h1>
        <div class="paddingleft">招生:<span style="color:red">{{school.studentCount+'人'}}</span></div>
        <span class="paddingleft">{{school.schoolName}}</span>
        <!-- <p class="description" :title="school.description">简介:{{school.description}}</p> -->
      </span>
    </div>
    <div class="list-container" v-else>
      <div class="nodata">
        <img :src="nodata" alt />
      </div>
    </div>
    <div style="textAlign:center;margin:30px 0 30px 0">
      <a-pagination v-model="current" :total="total" />
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";
import FilterOptions from "@/components/FilterOptions.vue";
import {placeholderImgMixin} from '@/mixins/placeholderImg.js'
const nodata = require("./nodata.png");
export default {
  mixins: [placeholderImgMixin],
  data() {
    return {
      nodata,
      current: 1,
      schoolsList: [],
      total: 0,
      options: [
        {
          name: "院校地址",
          key: "address",
          opts: ["全国", "北京", "上海", "广州", "杭州", "深圳"]
        },
        {
          name: "培训课程",
          key: "course",
          opts: [
            "不限",
            "电子商务",
            "游戏",
            "媒体",
            "广告营销",
            "数据服务",
            "医疗健康",
            "生活服务",
            "o2o",
            "不限",
            "电子商务",
            "游戏",
            "媒体",
            "广告营销",
            "数据服务",
            "医疗健康",
            "生活服务",
            "o2o",
            "不限",
            "电子商务",
            "游戏",
            "媒体",
            "广告营销",
            "数据服务",
            "医疗健康",
            "生活服务",
            "o2o"
          ]
        }
      ]
    };
  },
  mounted() {
    // this._getNoticeList();
  },
  methods: {
    requestList(selectCity, selectZone) {
      this._getNoticeList(selectCity, selectZone);
    },
    _getNoticeList(selectCity, selectZone) {
      api
        .schoolList({
          Days: 90,
          ProvinceId: 8587,
          CityId: selectCity,
          AreaId: selectZone
        })
        .then(res => {
          if (res.code == 1) {
            this.schoolsList = res.data.rows;
            this.total = res.data.total;
          }
        });
    },
    goDetail(id, schoolID) {
      this.$router.push(`/detail?id=${id}&schoolId=${schoolID}`);
    }
  },
  components: {
    FilterOptions
  }
};
</script>

<style lang="less" scope>
.nodata {
  width: 400px;
  margin: 0 auto;
  padding: 40px;
  img {
    width: 100%;
  }
}
.consult-container {
  width: 1080px;
  min-height: calc(100vh - 125px);
  margin: 0 auto;
  background: #ffffff;
  .notice {
    margin: 20px 0;
  }
}
.list-container {
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .options {
    position: relative;
    width: 500px;
    height: 86px;
    border: 1px solid rgba(0, 0, 0, 0.06);
    border-radius: 4px;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 20px;
    cursor: pointer;
    .schoolLogo {
      position: absolute;
      top: 20px;
      left: 10px;
      width: 120px;
      height: 40px;
    }
    .paddingleft {
      padding-left: 130px;
    }
    h1 {
      margin-bottom: 0;
    }
    p.description {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
