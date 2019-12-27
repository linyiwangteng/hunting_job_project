export default {
  routes: [
    {
      path: '/',
      name: 'school',
      component: () => import('../index.vue')
    },
    {
      path: '/detail',
      name: 'school_detail',
      component: () => import('../detail.vue')
    }
  ]
}