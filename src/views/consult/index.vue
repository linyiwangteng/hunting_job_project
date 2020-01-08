<template>
  <div class="consult-container">
    <div class="fl">
      <h1 class="notice">政策公告</h1>
      <ul class="news_C">
        <li v-for="item in noticeData" :key="item.id">
          <h2 @click="goDetail(item.id)">{{item.title}}</h2>
        </li>
      </ul>
    </div>
    <div class="fr">
      <hot-job />
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";
import HotJob from "@/components/HotJob.vue";
export default {
  components: {
    HotJob
  },
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
            console.log(this.noticeData);
          }
        });
    },
    goDetail(id) {
      // window.location.href = `/home.html#/newinfo?id=${id}`;
      this.$router.push(`/newInfo?id=${id}`);
    }
  }
};
</script>

<style lang="less" scope>
.consult-container {
  width: 1080px;
  height: 0 auto;
  margin: 0 auto;
  overflow: hidden;
  background: #fff;
  padding: 15px;
  .notice {
    margin: 20px 0;
  }
  ul.news_C{
    li{
      cursor: pointer;
      height: 30px;
      // list-style: disc;
      h2{
        color: #868686;
        &:hover{
          color: #dd0101;
        }
      }
    }
  }
}
</style>