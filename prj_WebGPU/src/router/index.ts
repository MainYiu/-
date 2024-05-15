import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/threejs',
      name: 'threejs',
      component: () => import('@/views/ThreeJS/index_threejs.vue')
    },
    {
      path: '/webgpu',
      name: 'webgpu',
      component: () => import('@/views/WebGPU/index_webgpu.vue')
    },
    {
      path: '/cesium',
      name: 'cesium',
      component: () => import('@/views/Cesium/index_cesium.vue')
    }
  ]
})

export default router
