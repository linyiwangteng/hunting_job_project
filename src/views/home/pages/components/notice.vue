<template>
  <div class="notice-box" v-if="noticeData.length">
    <h1 class="notice-title">
      政策报告
      <span class="more">更多></span>
    </h1>
    <ul class="article-box">
      <li @click="goDetail(item.id)" v-for="(item) in noticeData" :key="item.id">
        <h2 class="article-title">{{item.title}}</h2>
        <span class="date">{{item.modifiedTime.split(' ')[0]}}</span>
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
          }
        });
    },
    goDetail(id) {
      location.href = `consult.html#/newinfo?id=${id}`;
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/variable.less";
ul,
li {
  position: relative;
  padding: 0;
  margin: 0;
}
.notice-box {
  color: #000000;
  padding: 0 23px;
  .notice-title {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 42px;
    font-size: 18px;
    color: @maincolor;
    padding-left: 20px;
    text-align: left;
    margin-bottom: 0;
    &::before {
      content: "";
      position: absolute;
      top: 14px;
      left: 0;
      width: 14px;
      height: 14px;
      background: url("../../img/right_point.png") no-repeat center;
      background-size: 100% auto;
    }
  }
  .more {
    position: absolute;
    font-size: 14px;
    color: #000000;
    right: 0;
  }
  .article-box {
    width: 100%;
    height: 305px;
    overflow: hidden;
    li {
      display: flex;
      align-content: center;
      justify-content: flex-start;
      cursor: pointer;
    }
    .article-title {
      width: 264px;
      font-size: 15px;
      line-height: 34px;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 0;
      overflow: hidden;
    }
    .date {
      position: absolute;
      right: 0;
      top: 11px;
      font-size: 12px;
      color: #a5a5a5;
    }
  }
}
</style>