<template>
  <div class="consult-container">
    <h1 class="notice">政策公告</h1>
    <ul>
      <li v-for="item in noticeData" :key="item.id">
        <h2 @click="goDetail(item.id)">{{item.title}}</h2>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {  
 data() {
    return {
      noticeData: []
    };
  },
  mounted() {
    this._getNoticeList();
  },
  methods: {
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
  }
}
</script>

<style lang="less" scope>
  .consult-container{
    width: 1080px;
    height: 0 auto;
    margin: 0 auto;
    .notice{
      margin: 20px 0;
    }
  }
</style>