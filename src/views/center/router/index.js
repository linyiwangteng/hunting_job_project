export default {
  routes: [
    {
      path:'/',
      name:'center',
      component: ()=>import('../pages/index.vue')
    }
  ]
}