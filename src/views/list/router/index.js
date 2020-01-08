export default {
  routes: [
    {
      path: '/',
      name: 'postion',
      component: () => import('../index.vue'),
      meta:{
        key: 'jobPosition'
      }
    },
    {
      path: '/detail',
      name: 'postion_detail',
      component: () => import('../detail.vue'),
      meta:{
        key:'postion'
      }
    }
  ]
}