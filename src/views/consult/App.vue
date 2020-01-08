<template>
  <div id="app">
    <tab></tab>
    <div class="login-warp">
      <router-view />
    </div>
  </div>
</template>
<script>
import Tab from "@/components/Tab";
export default {
  components: {
    Tab
  }
};
</script>
<style lang="less" scoped>
.login-warp{
  width: 100%;
  min-height: calc(100vh - 125px);
  background: rgba(0,0,0,0.06);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  background: #ffffff;
}
</style>