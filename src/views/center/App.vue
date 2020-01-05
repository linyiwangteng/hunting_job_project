<template>
  <div id="app">
    <tab></tab>
    <div class="center-warp">
      <a-locale-provider :locale="zhCN">
        <router-view />
      </a-locale-provider>
    </div>
  </div>
</template>
<script>
import Tab from "@/components/Tab";
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
export default {
  data() {
    return {
      zhCN
    }
  },
  components: {
    Tab
  }
};
</script>
<style lang="less" scoped >
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.center-warp{
  width: 1182px;
  margin: 0 auto;
}
</style>
