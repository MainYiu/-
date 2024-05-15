export const constantRoute = [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index_login.vue')
    },
    {
      path: '/',
      name: 'threejs',
      component: () => import('@/views/ThreeJS/index_threejs.vue')
    },
    {
      path: '/cesium',
      name: 'cesium',
      component: () => import('@/views/Cesium/index_cesium.vue')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/views/login/index_404.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Any',
      redirect:'/404'
    }
  ]