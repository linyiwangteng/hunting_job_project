<template>
  <div class="detail">
    <div class="fl detail-left">
      <h1>{{news.title}}</h1>
      <content v-html="news.contents"></content>
    </div>
    <div class="fr">
      <hot-job />
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";
import { mapGetters } from "vuex";
import HotJob from "@/components/HotJob.vue";

export default {
  components: {
    HotJob
  },
  data() {
    return {
      query: {},
      news: {
        id: 0,
        title: "",
        titlePage: null,
        titleChild: "",
        author: "",
        contents: "",
        infoType: 1
      }
    };
  },
  mounted() {
    this.query = this.$route.query;
    this._getData(this.query.id);
  },
  watch: {
    $route: function() {
      this.query = this.$route.query;
      this._getData(this.query.id);
    }
  },
  methods: {
    _getData(id) {
      api
        .newsDetail({
          id
        })
        .then(res => {
          if (res.code == 1) {
            this.news = { ...res.data };
          }
        });
    },
    ...mapGetters(["getNewsContent"])
  }
};
</script>

<style lang="less" scope>
.detail {
  width: 1080px;
  margin: 0 auto;
  padding-top: 40px;
  overflow: hidden;
  .detail-left{
    width: 700px;
  }
}
</style>