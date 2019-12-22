export default {
  routes: [
    {
      path:'/',
      name:'login',
      component: ()=>import('../pages/index.vue')
    },
    {
      path:'/register',
      name:'login',
      component: ()=>import('../pages/register')
    },
    {
      path:'/reset',
      name:'login',
      component: ()=>import('../pages/reset')
    },
  ]
}