<template>
  <div id="app">
    <tab></tab>
    <div class="login-wrap">
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
<style lang="less" scoped >
.login-wrap{
  width: 100%;
  min-height: calc(100vh - 125px);
  background: rgba(0,0,0,0.06);
}
</style>