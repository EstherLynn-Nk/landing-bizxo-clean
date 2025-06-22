import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../components/ContactSection.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView.vue
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
