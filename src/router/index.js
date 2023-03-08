import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import FreelancePage from '../views/ConsultingPage.vue'
import AboutMe from '../views/AboutMe.vue'
import ProjectsPage from '../views/ProjectsPage.vue'
import projectDetails from '../views/ProjectDetails.vue'


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
      path: '/freelance',
      name: 'freelance',
      meta: {
        transition: 'fade'
      },
      component: FreelancePage
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
  ]
})

export default router
