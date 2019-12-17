<template>
  
</template>

<script>
import api from '@/api/index'
export default {
  mounted(){
    let {query} = this.$route;
    api.orgDetail({
      id: query.id
    }).then(res=>{
      console.log(res);
    })
  }
}
</script>

<style>

</style>