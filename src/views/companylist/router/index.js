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
  ]
}