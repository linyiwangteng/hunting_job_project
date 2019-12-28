export default {
  routes: [
    {
      path:'/',
      name:'login',
      component: ()=>import('../pages/index.vue')
    }
  ]
}