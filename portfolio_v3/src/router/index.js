import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dev',
    name: 'Dev',
    component: () => import( '../views/Dev.vue')
  },
  {
    path: '/cv',
    name: 'CV',
    component: () => import( '../views/CV.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import( '../views/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
