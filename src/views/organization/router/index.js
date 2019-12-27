export default {
  routes: [
    {
      path: '/',
      name: 'organization',
      component: () => import('../index.vue')
    },
    {
      path: '/detail',
      name:'organization_detail',
      component: () => import('../detail.vue')
    }
  ]
}