<template>
  <div class="consult-container">
    <filter-options @requestList="requestList"></filter-options>
    <div class="list-container">
      <span class="options" v-for="school in schoolsList" :key="school.id" @click="goDetail(school.id,school.schoolID)">
        <img :src="school.logo" alt="" class="schoolLogo">
        <h1 class="paddingleft">{{school.name}}</h1>
        <span class="paddingleft">学校名称:{{school.schoolName}}</span>
        <!-- <p class="description" :title="school.description">简介:{{school.description}}</p> -->
      </span>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";
import FilterOptions from '@/components/FilterOptions.vue'
export default {  
 data() {
    return {
      schoolsList: [],
      options: [{
        name:'院校地址',
        key: 'address',
        opts: ['全国','北京','上海','广州','杭州','深圳']
      },{
        name:'培训课程',
        key:'course',
        opts:['不限','电子商务','游戏','媒体','广告营销','数据服务','医疗健康','生活服务','o2o','不限','电子商务','游戏','媒体','广告营销','数据服务','医疗健康','生活服务','o2o','不限','电子商务','游戏','媒体','广告营销','数据服务','医疗健康','生活服务','o2o']
      }]
    };
  },
  mounted() {
    // this._getNoticeList();
  },
  methods: {
    requestList(selectCity,selectZone){
      this._getNoticeList(selectCity,selectZone)
    },
    _getNoticeList(selectCity,selectZone) {
      api.schoolList({
          Days: 3,
          ProvinceId:8587,
          CityId: selectCity,
          AreaId: selectZone
        })
        .then(res => {
          if (res.code == 1) {
            this.schoolsList = res.data.rows;
            console.log(this.schoolsList)
          }
        });
    },
    goDetail(id,schoolID) {
      this.$router.push(`/detail?id=${id}&schoolId=${schoolID}`);
    }
  },
  components: {
    FilterOptions
  }
}
</script>

<style lang="less" scope>
  .consult-container{
    width: 1080px;
    min-height: calc(100vh - 125px);
    margin: 0 auto;
    background: #ffffff;
    .notice{
      margin: 20px 0;
    }
  }
  .list-container{
    padding: 0 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .options{
      position: relative;
      width: 500px;
      height: 86px;
      border: 1px solid rgba(0,0,0,0.06);
      border-radius: 4px;
      padding: 10px;
      box-sizing: border-box;
      margin-bottom: 20px;
      cursor: pointer;
      .schoolLogo{
        position:absolute;
        top:20px;
        left:10px;
        width: 120px;
        height: 40px;
      }
      .paddingleft{
        padding-left: 130px;
      }
      h1{
        margin-bottom: 0;
      }
      p.description{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
</style>