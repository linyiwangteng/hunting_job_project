<template>
  <div id="app">
    <tab></tab>
    <!-- <div>this is a home window page</div> -->
    <div class="routerClass">
      <router-view />
    </div>
    <my-footer></my-footer>
    <right-contact class="fixed"></right-contact>
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

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  background: #ffffff;
}
.fixed{
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.routerClass{
  min-height: 100vh;
}
</style>
