<template>
  <div id="app">
    <tab ></tab>
    <div class="center-warp">
      <router-view />
    </div>
    <right-contact />
    <my-footer ></my-footer>
  </div>
</template>
<script>
import Tab from '@/components/Tab';
import MyFooter from '@/components/Footer'
import RightContact from '@/components/Right-contact'
export default {
  components:{
    Tab,
    MyFooter,
    RightContact
  }
}
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

.center-warp {
  width: 1182px;
  margin: 0 auto;
}
</style>
