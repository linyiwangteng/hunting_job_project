<template>
  <div class="detail">
    <h1>{{query.name}}</h1>
    <content v-html="contents"></content>
  </div>
</template>

<script>
import api from '@/api/index.js'
import {mapGetters} from 'vuex'
export default {
  data(){
    return {
      query: {},
      contents: ''
    }
  },
  mounted(){
    this.query = this.$route.query;
    this._getData();
  },
  watch: {
    $route:function(){
      this.query = this.$route.query;
      this._getData();
    }
  },
  methods: {
    goDetail(id){
      this.$router.push('/detail?id='+id);
    },
    _getData(){
      console.log(this.getNewsContent())
      this.contents = this.getNewsContent();
    },
    ...mapGetters([
      'getNewsContent'
    ])
  }
}
</script>

<style lang="less" scope>
  .detail{
    width: 1080px;
    margin: 0 auto;
    padding-top: 40px;
  }
</style>