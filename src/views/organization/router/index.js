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
    },
    {
      path:'/detail-class',
      name:'organization_detail_class',
      component: () => import('../detail-class.vue')
    }
  ]
}