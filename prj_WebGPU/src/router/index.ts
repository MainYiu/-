import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { constantRoute } from './routes'
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoute
})

export default router
