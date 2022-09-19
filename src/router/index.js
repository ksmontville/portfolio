import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ResumePage from '../views/ResumePage.vue'
import AboutMe from '../views/AboutMe.vue'
import ProjectsPage from '../views/ProjectsPage.vue'
import projectDetails from '../views/ProjectDetails.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/resume',
      name: 'resume',
      component: ResumePage
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsPage
    },
    {
      path: '/projects/:id',
      name: 'projectDetails',
      component: projectDetails
    },
    {
      path: '/about',
      name: 'about',
      component: AboutMe
    },
  ]
})

export default router
