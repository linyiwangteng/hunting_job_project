<template>
  <div class="consult-container">
    <div class="search_box">
      <a-row :gutter="12">
        <a-col :span="12">
          <a-input style="width: 100%" placeholder="请输入职位" v-model="Name"></a-input>
        </a-col>
        <a-col :span="3">
          <a-button @click="getPositionlist">搜索</a-button>
        </a-col>
      </a-row>
    </div>
    <filter-options :options="[]" @requestList="requestList"></filter-options>
    <!-- 职能 -->
    <div class="filter-container">
      <div class="item-opt">
        <span class="opt-name">职能：</span>
        <ul>
          <li :class="JobOneFunctionId == 0 ? 'active':''" @click="activeJob(0)">全部</li>
          <li
            v-for="item in jobList"
            :class="JobOneFunctionId == item.id ? 'active' : ''"
            :key="item.id"
            v-text="item.name"
            @click="activeJob(item.id)"
          ></li>
        </ul>
      </div>
      <!-- 职能二级菜单 -->
      <div class="item-opt two_item_opt" v-if="JobOneFunctionId != 0 && twoJobList.length > 0">
        <span class="opt-name"></span>
        <ul>
          <li :class="JobFunctionId == -1 ? 'active' : ''" @click="activeTwoJob(-1)">全部</li>
          <li
            v-for="item in twoJobList"
            :class="JobFunctionId == item.id ? 'active' : ''"
            :key="item.id"
            v-text="item.name"
            @click="activeTwoJob(item.id)"
          ></li>
        </ul>
      </div>
      <!-- 行业 -->
      <div class="item-opt">
        <span class="opt-name">行业：</span>
        <ul>
          <li :class="ProfessionOneId == 0 ? 'active' : ''" @click="activeProfess(0)">全部</li>
          <li
            v-for="item in professList"
            :class="ProfessionOneId == item.id ? 'active':''"
            :key="item.id"
            v-text="item.name"
            @click="activeProfess(item.id)"
          ></li>
        </ul>
      </div>
      <!-- 行业二级菜单 -->
      <div class="item-opt two_item_opt" v-if="ProfessionOneId != 0 && professTwoList.length>0">
        <span class="opt-name"></span>
        <ul>
          <li :class="ProfessionId == -1 ? 'active' : ''" @click="activeTwoProfess(-1)">全部</li>
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
    <ul class="position_list_ul clearfix" v-if="schoolsList.length !== 0">
      <!-- <div
        class="options"
        v-for="school in schoolsList"
        :key="school.id"
        @click="goDetail(school.id)"
      >
        <img :src="school.logo || placehoderListImg()" alt class="schoolLogo" />
        <div class="options-right paddingleft">
          <h1>{{school.name}}</h1>
          <p class="description" :title="school.companyName">企业名称：{{school.companyName}}</p>
          <p class="description">薪资范围：{{school.moneyMin}}-{{school.moneyMax}}k</p>
          <p class="description">工作经验：{{school.workExpName}}年</p>
          <p class="description">学历：{{school.eduName}}</p>
        </div>
      </div> -->
      <li class="position_list_item default_list" v-for="school in schoolsList" :key="school.id" @click="goDetail(school.id)">
          <span class="top_icon direct_recruitment" style="display: inline;"></span>
          <div class="position-top">
            <div class="position-item-title">
              {{school.name}}
              <span class="title-tip">[{{school.publishedTime}}]</span>
            </div>
            <div class="position-title-desc">经验{{school.workExpName}}年 {{school.eduName}}</div>
            <div class="postion-money">{{school.moneyMin}}-{{school.moneyMax}}k</div>
          </div>
          <div class="position-bottom">
            <div class="company-item">
              <div class="cmp-img">
                <img :src="school.logo || placehoderListImg()" alt />
              </div>
              <div class="cmp-msg">
                <div class="cmp-name">{{school.companyName}}</div>
                <div class="cmp-desc">{{school.description}}</div>
                <div class="cmp-address">{{school.area}}</div>
              </div>
            </div>
          </div>
        </li>
    </ul>
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
import { log } from 'util';
const nodata = require("./nodata.png");
export default {
  mixins: [placeholderImgMixin],
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
      nodata,
      total: 0,
      current: 1
    };
  },
  mounted() {
    if (this.$route.query.id) {
      this.JobFunctionId = this.$route.query.id;
    }

    if (this.$route.query.v) {
      this.Name = this.$route.query.v;
    }

    this._getprofesslist();
    this._getjoblist();
  },
  methods: {
    // 职能一级菜单
    activeJob(id) {
      this.JobOneFunctionId = id;
      this._getjoblist(id);
    },
    // 职能二级菜单
    activeTwoJob(id) {
      this.JobFunctionId = id;
      this.getPositionlist();
    },
    // 行业一级菜单
    activeProfess(id) {
      this.ProfessionOneId = id;
      this._getprofesslist(id);
    },
    // 行业二级菜单
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
            this.total = res.data.total;
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
.position_list_ul {
  width: 100%;
  padding: 0 20px;
  .position_list_item {
    overflow: hidden;
    float: left;
    position: relative;
    width: 250px;
    height: 150px;
    margin: 12px 12px 0 0;
    padding: 20px 18px 0;
    border: 1px solid #eaeeed;
    background-color: #fff;
    .top_icon {
      position: absolute;
      top: -1px;
      left: -1px;
      width: 40px;
      height: 40px;
      background-position: center;
      background-repeat: no-repeat;
    }
    .direct_recruitment {
      background-image: url(//www.lgstatic.com/lg-www-fed/index/modules/job_list/img/direct-recruit@2x_0d49da5.png);
      background-size: 40px 40px;
    }
    .position-top {
      border-bottom: 1px dotted #a2a3a3;
      .position-item-title {
        font-size: 14px;
        color: #000;
        .title-tip {
          color: #9fa0a0;
        }
      }
      .position-title-desc {
        
        color: #9fa0a0;
      }
      .postion-money {
        color: #ff6700;
      }
    }
    .position-bottom {
      .company-item {
        display: flex;
        // margin-bottom: 15px;
        padding: 14px 0 14px;
        box-sizing: border-box;
        .cmp-img {
          width: 40px;
          height: 40px;
          overflow: hidden;
          margin-right: 15px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .cmp-msg {
          text-align: left;
          .cmp-desc {
            display: inline-block;
            width: 80px;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            color: rgb(176, 177, 177);
          }
          .cmp-address {
            vertical-align: top;
            display: inline-block;
            color: rgb(176, 177, 177);
          }
        }
      }
    }
  }
}
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
    display: flex;
    width: 500px;
    border: 1px solid rgba(0, 0, 0, 0.06);
    border-radius: 4px;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 20px;
    cursor: pointer;
    .schoolLogo {
      width: 240px;
      height: 100%;
    }
    .paddingleft {
        padding-left: 30px;
      }
    .options-right {
      
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
}
</style>