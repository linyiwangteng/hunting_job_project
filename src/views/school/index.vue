<template>
  <div class="consult-container">
    <filter-options :options="options" @requestList="requestList"></filter-options>
    <div class="list-container">
      <span class="options" v-for="i in 10" :key="i">
        <h1>尚德机构</h1>
        <span>开设专业</span>
        <p>简介</p>
      </span>
      <span class="options"></span>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";
import FilterOptions from '@/components/FilterOptions.vue'
export default {  
 data() {
    return {
      noticeData: [],
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
    requestList(data){
      console.log(data);
    },
    _getNoticeList() {
      api
        .newsList({
          infoType: 1,
          topRow: 10
        })
        .then(res => {
          if (res.code == 1) {
            this.noticeData = res.data;
            console.log(this.noticeData)
          }
        });
    },
    goDetail(id) {
      window.location.href = `/home.html#/newinfo?id=${id}`;
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
      width: 500px;
      height: 120px;
      border: 1px solid rgba(0,0,0,0.06);
      border-radius: 4px;
      padding: 10px;
      box-sizing: border-box;
      margin-bottom: 20px;
      cursor: pointer;
      h1{
        margin-bottom: 0;
      }
    }
  }
</style>