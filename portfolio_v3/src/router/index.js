import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { transition: 'fade' },
  },
  {
    path: '/dev',
    name: 'Dev',
    component: () => import( '../views/Dev.vue'),
    meta: { transition: 'fade' },
  },
  {
    path: '/cv',
    name: 'CV',
    component: () => import( '../views/CV.vue'),
    meta: { transition: 'fade' },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import( '../views/Contact.vue'),
    meta: { transition: 'fade' },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
