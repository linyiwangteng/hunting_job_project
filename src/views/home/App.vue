<template>
  <div id="app">
    <tab></tab>
    <div>this is a home window page</div>
    <router-view/>
  </div>
</template>
<script>
import Tab from '@/components/Tab'
export default {
  components:{
    Tab
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 32px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
