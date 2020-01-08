<template>
  <div class="consult-container">
    <div class="search_box">
      <a-row :gutter="12">
        <a-col :span="12">
          <a-input style="width: 100%" placeholder="请输入机构名" v-model="Name"></a-input>
        </a-col>
        <a-col :span="3">
          <a-button @click="_getLoacltionData()">搜索</a-button>
        </a-col>
      </a-row>
    </div>
    <filter-options :options="options" @requestList="requestList" class="ceshi"></filter-options>
    <div class="filter-container">
      <div class="item-opt">
        <span class="opt-name">专业：</span>
        <ul>
          <li :class="selectedZoneAu1 === -1 ? 'active':''" @click="selectedZhuanYe1(-1)">全部</li>
          <li
            v-for="(opt) in authenticationList1"
            :key="opt.id"
            :class="selectedZoneAu1 === opt.id ? 'active':''"
            @click="selectedZhuanYe1(opt.id)"
          >{{opt.name}}</li>
        </ul>
      </div>
      <div class="item-opt">
        <span class="opt-name">专业：</span>
        <ul>
          <li :class="selectedZoneAu2 === -1 ? 'active':''" @click="selectedZhuanYe2(-1)">全部</li>
          <li
            v-for="(opt) in authenticationList2"
            :key="opt.id"
            :class="selectedZoneAu2 === opt.id ? 'active':''"
            @click="selectedZhuanYe2(opt.id)"
          >{{opt.name}}</li>
        </ul>
      </div>
    </div>

    <div class="list-container" v-if="organizationList.length !== 0">
      <span
        class="options"
        v-for="(item,index) in organizationList"
        :key="index"
        @click="goDetail(item.id)"
      >
        <img :src="item.logo || placehoderListImg()" alt class="schoolLogo" />
        <h1 class="paddingleft">{{item.name}}</h1>
        <span class="paddingleft">机构名称:{{item.schoolName}}</span>
        <!-- <p class="description" :title="item.description">简介:{{item.description}}</p> -->
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
      ],
      authenticationList1: [],
      authenticationList2: [],
      selectedZoneAu1: -1,
      selectedZoneAu2: -1,
      Name: "",
      total: 0,
      current: 1
    };
  },
  mounted() {
    // this._getNoticeList();
    if (this.$route.query.v) {
      this.Name = this.$route.query.v;
      this._getLoacltionData();
    }
    this.getAuthentication1(0);
    this.getAuthentication2(-1);
  },
  methods: {
    _getLoacltionData() {
      let { Name, selectCity, selectZone } = this;
      api
        .AuthenticationList({
          ProvinceId: 8587,
          CityId: selectCity,
          AreaId: selectZone,
          Name,
          AuthenticationLv1Id: -1,
          AuthenticationLv2Id: -1
        })
        .then(res => {
          if (res.code == 1) {
            this.organizationList = res.data.rows;
            this.total = res.data.total;
          }
        });
    },
    requestList(selectCity, selectZone) {
      this.selectCity = selectCity;
      this.selectZone = selectZone;
      this._getNoticeList(
        selectCity,
        selectZone,
        this.selectedZoneAu1,
        this.selectedZoneAu2
      );
    },
    async getAuthentication1(id) {
      let result = await api.Authentication({ parentId: id });
      this.authenticationList1 = result.data;
    },
    async getAuthentication2(id) {
      let result = await api.Authentication({ parentId: id });
      this.authenticationList2 = result.data;
    },
    searchName() {},
    selectedZhuanYe1(id) {
      if (id !== -1) {
        this.getAuthentication2(id);
      }
      this.selectedZoneAu1 = id;
      this.selectedZoneAu2 = -1;
      this._getNoticeList(
        selectCity,
        selectZone,
        this.selectedZoneAu1,
        this.selectedZoneAu2
      );
    },
    selectedZhuanYe2(id) {
      this.selectedZoneAu2 = id;
      this._getNoticeList(
        selectCity,
        selectZone,
        this.selectedZoneAu1,
        this.selectedZoneAu2
      );
    },
    _getNoticeList(selectCity, selectZone, id1, id2) {
      let { Name } = this;
      api
        .AuthenticationList({
          ProvinceId: 8587,
          CityId: selectCity,
          AreaId: selectZone,
          Name,
          AuthenticationLv1Id: id1,
          AuthenticationLv2Id: id2
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
    },
    selectedZhuanYe() {}
  },
  components: {
    FilterOptions
  }
};
</script>

<style lang="less" scope>
.consult-container {
    width: 1080px;
    min-height: calc(100vh - 125px);
    margin: 0 auto;
    background: #ffffff;
}
.nodata {
  width: 400px;
  margin: 0 auto;
  padding: 40px;
  img {
    width: 100%;
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

.filter-container {
  padding: 0 20px 20px;

  margin-bottom: 40px;
  .item-opt {
    display: flex;
    .opt-name {
      width: 95px;
      flex: 0 0 95px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        padding: 0 4px;
        margin-right: 10px;
        cursor: pointer;
        &.active {
          color: #ffffff;
          background: #dc0101;
        }
      }
    }
  }
}
.ceshi {
  margin-bottom: 0;
  padding-top: 20px;
  padding-bottom: 0px;
}
</style>