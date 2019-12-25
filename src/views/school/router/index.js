export default {
  routes: [
    {
      path: '/',
      name: 'school',
      component: () => import('../index.vue')
    },
  ]
}