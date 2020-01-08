export default {
  routes: [
    {
      path: '/',
      name: 'companylist',
      component: () => import('../pages'),
      meta: {
        key:'companylist'
      }
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../detail.vue'),
      meta: {
        key:'detail'
      }
    },
  ]
}