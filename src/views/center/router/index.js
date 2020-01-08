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
    {
      path:'/jianli',
      name:'jianli',
      component: ()=>import('../pages/jianli')
    },
    {
      path:'/collections',
      name:'collections',
      component: ()=>import('../pages/collections')
    },
  ]
}