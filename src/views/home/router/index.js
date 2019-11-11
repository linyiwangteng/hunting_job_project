export default {
  routes: [
    {
      path:'/',
      name:'home',
      component: ()=>import('../pages/index.vue')
    }
  ]
}