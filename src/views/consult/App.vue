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
<style lang="less" scoped >
</style>