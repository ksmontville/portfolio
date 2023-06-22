import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ConsultingPage from '../views/ContractingPage.vue'
import AboutMe from '../views/AboutMe.vue'
import ProjectsPage from '../views/ProjectsPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        transition: 'fade'
      },
      component: HomePage
    },
    {
      path: '/contracting',
      name: 'contracting',
      meta: {
        transition: 'fade'
      },
      component: ConsultingPage
    },
    {
      path: '/projects',
      name: 'projects',
      meta: {
        transition: 'fade'
      },
      component: ProjectsPage
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        transition: 'fade'
      },
      component: AboutMe
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: () => import(/*webpackChunkName: "error-page": */ '@/views/ErrorPage.vue'),
    },
  ],
    scrollBehavior()
  {
    return {top: 0}
  }
})

export default router
