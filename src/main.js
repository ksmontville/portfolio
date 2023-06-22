import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import PageHeader from './components/PageHeader.vue'
import NavbarComponent from './components/NavbarComponent.vue'
import HomePage from './views/HomePage.vue'
import FreelancePage from './views/ContractingPage.vue'
import ProjectsPage from './views/ProjectsPage.vue'
import ProjectDetails from './views/ProjectDetails.vue'
import ProjectCards from './components/ProjectCards.vue'
import AboutMe from './views/AboutMe.vue'
import AccordionComponent from './components/AccordionComponent.vue'
import CarouselComponentAboutMe from './components/CarouselComponentAboutMe.vue'
import CarouselComponentFreelanceBMG from './components/CarouselComponentFreelanceBMG.vue';
import PageFooter from './components/PageFooter.vue'
import './style.css'

const app = createApp(App)

app
    .use(router)
    .component('PageHeader', PageHeader)
    .component('NavbarComponent', NavbarComponent)
    .component('HomePage', HomePage)
    .component('FreelancePage', FreelancePage)
    .component('ProjectsPage', ProjectsPage)
    .component('ProjectDetails', ProjectDetails)
    .component('ProjectCards', ProjectCards)
    .component('AboutMe', AboutMe)
    .component('AccordionComponent', AccordionComponent)
    .component('CarouselComponentAboutMe', CarouselComponentAboutMe)
    .component('CarouselComponentFreelanceBMG', CarouselComponentFreelanceBMG)
    .component('PageFooter', PageFooter)
    .mount('#app')
