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
      path: '/webgpu',
      name: 'webgpu',
      component: () => import('@/views/WebGPU/index_webgpu.vue')
    }
  ]
})

export default router
