export default {
  routes: [
    {
      path:'/',
      name:'delivery',
      component: ()=>import('../pages/index.vue')
    }
  ]
}