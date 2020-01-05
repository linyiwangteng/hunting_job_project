<template>
  <div class="consult-container">
    <div class="search_box">
      <a-row :gutter="12">
        <a-col :span="12">
          <a-input style="width: 100%" placeholder="请输入企业" v-model="Name"></a-input>
        </a-col>
        <a-col :span="3">
          <a-button @click="_getNoticeList">搜索</a-button>
        </a-col>
      </a-row>
    </div>
    <filter-options :options="[]" @requestList="requestList"></filter-options>
    <div style="padding:0 20px">
      <hr />
    </div>
    <div class="list-container" v-if="organizationList.length !== 0">
      <span
        class="options"
        v-for="school in organizationList"
        :key="school.id"
        @click="goDetail(school.id)"
      >
        <img :src="school.logo || placehoderListImg()" alt class="schoolLogo" />
        <h1 class="paddingleft">{{school.name}}</h1>
        <!-- <span class="paddingleft">开设专业:</span> -->
        <p class="description" :title="school.address">{{school.address}}</p>
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
const nodata = require("@/views/list/nodata.png");
export default {
  mixins: [placeholderImgMixin],
  data() {
    return {
      total: 15,
      current:1,
      nodata,
      Name: "",
      organizationList: [],
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
  mounted() {},
  methods: {
    requestList(selectCityid, selectZoneId) {
      this.CityId = selectCityid;
      this.AreaId = selectZoneId;
      this._getNoticeList();
    },
    _getNoticeList() {
      let { Name, CityId, AreaId } = this;
      api
        .companyList({
          Name,
          ProvinceId: 8587,
          CityId,
          AreaId,
          Type: 0
        })
        .then(res => {
          if (res.code == 1) {
            this.organizationList = res.data.rows;
            this.total = res.data.total;
          }
        });
    },
    goDetail(id) {
      this.$router.push(`/detail?id=${id}`);
    }
  },
  components: {
    FilterOptions
  }
};
</script>

<style lang="less" scope>
.two_item_opt {
  background: #eee;
}
.nodata {
  width: 400px;
  margin: 0 auto;
  padding: 40px;
  img {
    width: 100%;
  }
}
.filter-container {
  padding: 0 20px 0 20px !important;
  margin-bottom: 0 !important;
  .item-opt {
    display: flex;
    padding: 10px 0 10px 0;
    .opt-name {
      width: 95px;
      flex: 0 0 95px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 0 !important;
      li {
        padding: 0 4px;
        margin-right: 10px;
        margin-bottom: 10px;
        cursor: pointer;
        &.active {
          color: #ffffff;
          background: #dc0101;
        }
      }
    }
  }
}
.search_box {
  padding: 20px 0 20px 20px;
  .ant-input {
    border: 1px solid #dd0101 !important;
  }
  .ant-btn {
    border: #dd0101 !important;
    background: #dd0101 !important;
    color: #fff;
  }
  .ant-input-group-addon {
    border: 1px solid #dd0101;
    border-right: none;
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
  margin-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .options {
    position: relative;
    width: 500px;
    height: 120px;
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
      margin-bottom: 30px;
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