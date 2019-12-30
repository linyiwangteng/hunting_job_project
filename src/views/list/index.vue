<template>
  <div class="consult-container">
    <div class="search_box">
      <a-row :gutter="12">
        <a-col :span="12">
          <a-input style="width: 100%" placeholder="请输入职位" v-model="Name" ></a-input>
        </a-col>
        <a-col :span="3">
          <a-button @click="getPositionlist">搜索</a-button>
        </a-col>
      </a-row>
    </div>
    <filter-options :options="[]" @requestList="requestList"></filter-options>
    <div class="filter-container">
      <div class="item-opt">
        <span class="opt-name">职能：</span>
        <ul>
          <li
            v-for="item in jobList"
            :class="JobOneFunctionId == item.id ? 'active' : ''"
            :key="item.id"
            v-text="item.name"
            @click="activeJob(item.id)"
          ></li>
        </ul>
      </div>
      <div class="item-opt two_item_opt">
        <span class="opt-name"></span>
        <ul>
          <li
            v-for="item in twoJobList"
            :class="JobFunctionId == item.id ? 'active' : ''"
            :key="item.id"
            v-text="item.name"
            @click="activeTwoJob(item.id)"
          ></li>
        </ul>
      </div>
      <div class="item-opt">
        <span class="opt-name">行业：</span>
        <ul>
          <li
            v-for="item in professList"
            :class="ProfessionOneId == item.id ? 'active':''"
            :key="item.id"
            v-text="item.name"
            @click="activeProfess(item.id)"
          ></li>
        </ul>
      </div>
      <div class="item-opt two_item_opt">
        <span class="opt-name"></span>
        <ul>
          <li
            v-for="item in professTwoList"
            :class="ProfessionId == item.id ? 'active':''"
            :key="item.id"
            v-text="item.name"
            @click="activeTwoProfess(item.id)"
          ></li>
        </ul>
      </div>
    </div>
    <div style="padding:0 20px">
      <hr />
    </div>
    <div class="list-container" v-if="schoolsList.length !== 0">
      <span
        class="options"
        v-for="school in schoolsList"
        :key="school.id"
        @click="goDetail(school.id)"
      >
        <img :src="school.logo" alt class="schoolLogo" />
        <h1 class="paddingleft">{{school.name}}</h1>
        <!-- <span class="paddingleft">开设专业:</span> -->
        <p class="description" :title="school.companyName">企业名称:{{school.companyName}}</p>
      </span>
    </div>
    <div class="list-container" v-else>
      <div class="nodata">
        <img :src="nodata" alt />
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";
import FilterOptions from "@/components/FilterOptions.vue";
const nodata = require("./nodata.png");
export default {
  data() {
    return {
      Name: "",
      schoolsList: [],
      jobList: [],
      twoJobList: [],
      professList: [],
      professTwoList: [],
      JobOneFunctionId: 0,
      JobFunctionId: -1,
      ProfessionOneId: 0,
      ProfessionId: -1,
      CityId: -1,
      AreaId: -1,
      nodata
    };
  },
  mounted() {
    this._getjoblist();
    this._getprofesslist();
  },
  methods: {
    activeJob(id) {
      this.JobOneFunctionId = id;
      this._getjoblist(id);
    },
    activeTwoJob(id) {
      this.JobFunctionId = id;
      this.getPositionlist();
    },
    activeProfess(id) {
      this.ProfessionOneId = id;
      this._getprofesslist(id);
    },
    activeTwoProfess(id) {
      this.ProfessionId = id;
      this.getPositionlist();
    },
    requestList(pro, cit) {
      this.CityId = pro;
      this.AreaId = cit;
      this.getPositionlist();
    },
    searchJob() {},
    _getjoblist(id = 0) {
      api
        .joblist({
          parentId: id
        })
        .then(res => {
          if (res.code == 1) {
            if (id == 0) {
              this.jobList = [...res.data];

              this._getjoblist(res.data[0].id);
            } else {
              this.twoJobList = [...res.data];
            }
          }
        });
    },
    _getprofesslist(id = 0) {
      api
        .professlist({
          parentId: id
        })
        .then(res => {
          if (res.code == 1) {
            if (id == 0) {
              this.professList = [...res.data];
              this._getprofesslist(res.data[0].id);
            } else {
              this.professTwoList = [...res.data];
            }
          }
        });
    },
    goDetail(id) {
      this.$router.push(`/detail?id=${id}`);
    },
    getPositionlist() {
      let { JobFunctionId, Name, ProfessionId, AreaId, CityId } = this;
      let params = {
        Name,
        Days: 100,
        ProvinceId: 8587,
        CityId,
        AreaId,
        JobFunctionId,
        ProfessionId
      };

      api
        .positionList({
          ...params
        })
        .then(res => {
          if (res.code == 1) {
            this.schoolsList = [...res.data.rows];
          } else {
            // this.$message.error(res.msg);
          }
        });
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