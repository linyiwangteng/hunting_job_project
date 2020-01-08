<template>
  <div id="app">
    <tab ></tab>
    <div class="login-warp">
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
.login-wrap{
  width: 100%;
  min-height: calc(100vh - 125px);
  background: rgba(0,0,0,0.06);
}
</style>