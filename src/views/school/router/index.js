export default {
  routes: [
    {
      path: '/',
      name: 'school',
      component: () => import('../index.vue'),
      meta:{
        key: 'school'
      }
    },
    {
      path: '/detail',
      name: 'school_detail',
      component: () => import('../detail.vue'),
      meta:{
        key:'school'
      }
    }
  ]
}