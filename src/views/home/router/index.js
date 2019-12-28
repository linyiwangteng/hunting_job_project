export default {
  routes: [
    {
      path:'/',
      name:'home',
      component: ()=>import('../pages/Index/index.vue'),
      meta:{
        key:'home'
      }
    },
    {
      path:'/newinfo',
      name:'newinfo',
      component: ()=>import('../pages/newdetail/index.vue'),
      meta:{
        key:'home'
      }

    },
    {
      path: '/detail',
      name:'detail',
      component: ()=>import('../pages/detail/index.vue'),
      meta: {
        key:'home'
      }
    },
    {
      path: '/organization',
      name: 'organizationIntro',
      component: ()=>import("../pages/organization"),
      meta:{
        key:'home'
      }
    },
    {
      path:'*',
      redirect:'/'
    }
  ]
}