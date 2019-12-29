export default {
  routes: [
    {
      path: '/company/:id',
      name: 'company',
      component: () => import('../pages/company'),
      meta:{
        key:'jobPosition'
      }
    },
    {
      path: '/',
      name: 'jobPosition',
      component: () => import('../pages'),
      meta: {
        key:'jobPosition'
      }
    },
  ]
}