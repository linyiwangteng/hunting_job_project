export default {
  routes: [
    {
      path:'/',
      name:'home',
      component: ()=>import('../pages/Index/index.vue')
    },
    {
      path: '/detail',
      name:'detail',
      component: ()=>import('../pages/detail/index.vue')
    },
    {
      path:'/table',
      name:'table',
      component: ()=>import('../pages/table')
    },
    {
      path: '/organization',
      name: 'organizationIntro',
      component: ()=>import("../pages/organization")
    },
    {
      path:'*',
      redirect:'/'
    }
  ]
}