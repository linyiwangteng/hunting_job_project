export default {
  routes: [
    {
      path: '/',
      name: 'consult',
      component: () => import('../index.vue'),
      meta:{
        key:'consult'
      }
    },
    {
      path: '/newInfo',
      name: 'newInfo',
      component: () => import('../newdetail/index.vue'),
      meta:{
        key:'consult'
      }
    },
  ]
}