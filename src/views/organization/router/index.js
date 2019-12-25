export default {
  routes: [
    {
      path: '/',
      name: 'organization',
      component: () => import('../index.vue')
    },
  ]
}