<template>
  <div id="app">
    <tab></tab>
    <div class="login-wrap">
      <router-view />
    </div>
    <my-footer></my-footer>
    <right-contact class="rightFixed"></right-contact>
  </div>
</template>
<script>
import Tab from "@/components/Tab";
import MyFooter from '@/components/Footer'
import RightContact from '@/components/Right-contact'
export default {
  components: {
    Tab,
    MyFooter,
    RightContact
  }
};
</script>
<style lang="less" scoped >
.login-wrap{
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
.rightFixed{
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.routerClass{
  min-height: 100vh;
}
</style>