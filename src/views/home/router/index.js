export default {
  routes: [
    {
      path:'/',
      name:'home',
      component: ()=>import('../pages/Index/index.vue')
    }
  ]
}