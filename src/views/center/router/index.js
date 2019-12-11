export default {
  routes: [
    {
      path:'/',
      name:'center',
      component: ()=>import('../pages/index.vue')
    },
    {
      path:'/resume',
      name:'resume',
      component: ()=>import('../pages/resume')
    },
  ]
}