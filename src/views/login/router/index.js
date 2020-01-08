export default {
  routes: [
    {
      path:'/',
      name:'login',
      component: ()=>import('../pages/index.vue')
    },
    {
      path:'/register',
      name:'register',
      component: ()=>import('../pages/register')
    },
    {
      path:'/reset',
      name:'reset',
      component: ()=>import('../pages/reset')
    },
  ]
}