export default {
  routes: [
    {
      path: '/',
      name: 'organization',
      component: () => import('../index.vue'),
      meta: {
        key: 'organization'
      }
    },
    {
      path: '/detail',
      name:'organization_detail',
      component: () => import('../detail.vue'),
      meta: {
        key: 'organization'
      }
    },
    {
      path:'/detail-class',
      name:'organization_detail_class',
      component: () => import('../detail-class.vue'),
      meta: {
        key: 'organization'
      }
    }
  ]
}