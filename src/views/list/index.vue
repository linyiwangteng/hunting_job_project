<template>
  <div class="consult-container">
    <div class="search_box">
      <a-row :gutter="12">
        <a-col :span="12">
          <a-input style="width: 100%">
            <a-select slot="addonBefore" style="width: 70px">
              <a-select-option value="86">+86</a-select-option>
              <a-select-option value="87">+87</a-select-option>
            </a-select>
          </a-input>
        </a-col>
        <a-col :span="3">
          <a-button>搜索</a-button>
        </a-col>
      </a-row>
    </div>
    <filter-options :options="options" @requestList="requestList"></filter-options>
    <div class="list-container">
      <span
        class="options"
        v-for="school in schoolsList"
        :key="school.id"
        @click="goDetail(school.id)"
      >
        <img :src="school.logo" alt class="schoolLogo" />
        <h1 class="paddingleft">{{school.name}}</h1>
        <span class="paddingleft">开设专业:</span>
        <p class="description" :title="school.description">简介:{{school.description}}</p>
      </span>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";
import FilterOptions from "@/components/FilterOptions.vue";
export default {
  data() {
    return {
      schoolsList: [],
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
    this._getNoticeList();
  },
  methods: {
    requestList(data) {
      console.log(data);
    },
    _getNoticeList() {
      api
        .organizationList({
          row: 10,
          type: 2,
          companyType: 1
        })
        .then(res => {
          if (res.code == 1) {
            this.schoolsList = res.data;
            console.log(this.schoolsList);
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
.search_box{
  padding: 20px 0 20px 20px;
  .ant-input{
    border: 1px solid #dd0101!important;
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