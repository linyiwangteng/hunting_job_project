export default {
  routes: [
    {
      path:'/',
      name:'home',
      component: ()=>import('../pages/Index/index.vue')
    },
    {
      path:'/table',
      name:'table',
      component: ()=>import('../pages/table')
    }
  ]
}