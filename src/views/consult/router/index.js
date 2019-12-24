export default {
  routes: [
    {
      path: '/',
      name: 'consult',
      component: () => import('../index.vue')
    },
  ]
}