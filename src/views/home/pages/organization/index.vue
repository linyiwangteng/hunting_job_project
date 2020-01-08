<template>
  <div class="intro-container">
      
      <h1>{{info.name}}</h1>
      <p>地址：{{info.address}}</p>
      <p class="intro">介绍：{{info.description}}</p>
  </div>
</template>

<script>
import api from '@/api/index'
export default {
  data(){
    return {
      info: {}
    }
  },
  mounted(){
    let {query} = this.$route;
    api.orgDetail({
      id: query.id
    }).then(res=>{
      let result = res.data;
      this.info = result;
      // console.log(result);
    })
  }
}
</script>

<style lang="less" scope>
  .intro-container{
    width: 1080px;
    height: auto;
    margin: 0 auto;
    text-align: center;
    h1{
      margin-top: 40px;
      margin-bottom:20px;
    }
    .intro{
      text-align: left;
    }
  }
</style>