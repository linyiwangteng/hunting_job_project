<template>
  <div id="container">
    <div class="clearfix">
      <div class="content_l">
        <dl class="c_delivery">
          <dt>
            <h1>
              <em></em>已投递简历状态
            </h1>
            <a class="d_refresh" href="javascript:;">刷新</a>
          </dt>
          <dd>
            <div class="delivery_tabs">
              <ul class="reset">
                <li class="current">
                  <a href="/delivery.html">全部</a>
                </li>
              </ul>
            </div>
            <form id="deliveryForm">
              <ul class="reset my_delivery">
                <li :key="index" v-for="(item,index) in list">
                  <div class="d_item">
                    <img :src="item.logo" class="left-logo" alt />
                    <div>
                      <div class="clear"></div>
                      <a
                        title="公司名称"
                        class="d_jobname"
                        target="_blank"
                        href="javascript:;"
                        v-text="item.companyName"
                      ></a>
                      <span class="d_time">2014-07-01 17:15</span>
                      <div class="clear"></div>
                      <div class="d_resume">
                        使用简历：
                        <span>在线简历</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <input type="hidden" value="-1" name="tag" />
              <input type="hidden" value name="r" />
            </form>
          </dd>
        </dl>
      </div>
      <div class="content_r">
        <!-- <div class="mycenterR" id="myInfo">
          <h2>我的信息</h2>
          <a href="collections.html">我收藏的职位</a>
          <br />
          <a href="toudi.html" target="_blank">
            我投递的职位
            <span id="noticeNoPage" class="red dn">&nbsp;(0)</span>
          </a>
        </div> -->
        <!--end #myInfo-->
        <div class="mycenterR" id="myRecommend">
          <h2>
            可能适合你的职位
            <i>匹配度</i>
          </h2>
          <ul class="reset">
            <li>
              <a target="_blank" href="http://www.lagou.com/jobs/22194.html">
                <span class="f16">产品经理</span>
                <span class="c7">广州百田</span>
                <em>92%</em>
              </a>
            </li>
            <li>
              <a target="_blank" href="http://www.lagou.com/jobs/148004.html">
                <span class="f16">产品经理</span>
                <span class="c7">短讯神州</span>
                <em>92%</em>
              </a>
            </li>
            <li>
              <a target="_blank" href="http://www.lagou.com/jobs/46793.html">
                <span class="f16">产品经理</span>
                <span class="c7">爱拍</span>
                <em>89%</em>
              </a>
            </li>
            <li>
              <a target="_blank" href="http://www.lagou.com/jobs/99307.html">
                <span class="f16">产品经理</span>
                <span class="c7">一彩票</span>
                <em>88%</em>
              </a>
            </li>
            <li>
              <a target="_blank" href="http://www.lagou.com/jobs/147510.html">
                <span class="f16">产品经理</span>
                <span class="c7">林安集团</span>
                <em>88%</em>
              </a>
            </li>
          </ul>
          <!-- <a target="_blank" class="more" href="mList.html">更多推荐职位&gt;&gt;</a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import DefaultImg from "./assets/./assets/touxiang.jpg";
import api from "@/api";
import { isArray } from "util";
export default {
  data() {
    return {
      list: []
    };
  },
  beforeCreate() {},
  created() {},
  mounted() {
    this.getToudiList();
  },
  methods: {
    getToudiList() {
      api
        .getTouDiList({
          StartTime: "1990-01-01",
          EndTime: "2025-01-01",
          Type: 1,
          Status: -1
        })
        .then(res => {
          if (res.code == 1) {
            if (isArray(res.data.rows)) {
              this.list = [...res.data.rows];
            }
          }
        });
    }
  }
};
</script>
<style lang="less" scoped>
.d_item {
  display: flex;
  flex-direction: row;
  .left-logo {
    width: 150px;
    margin-right: 20px;
  }
}
</style>