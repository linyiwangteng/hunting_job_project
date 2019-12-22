export default {
  routes: [
    // {
    //   path: '/company/:id',
    //   name: 'company',
    //   component: () => import('../pages/company')
    // },
    {
      path: '/',
      name: 'company',
      component: () => import('../pages')
    },
  ]
}