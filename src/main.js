import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import PageHeader from './components/PageHeader.vue'
import NavbarComponent from './components/NavbarComponent.vue'
import HomePage from './views/HomePage.vue'
import ResumePage from './views/ResumePage.vue'
import ProjectsPage from './views/ProjectsPage.vue'
import ProjectDetails from './views/ProjectDetails.vue'
import ProjectCards from './components/ProjectCards.vue'
import AboutMe from './views/AboutMe.vue'
import AccordionComponent from './components/AccordionComponent.vue'
import CarouselComponent from './components/CarouselComponent.vue'
import PageFooter from './components/PageFooter.vue'
import './index.css'

const app = createApp(App)

app
    .use(router)
    .component('PageHeader', PageHeader)
    .component('NavbarComponent', NavbarComponent)
    .component('HomePage', HomePage)
    .component('Resume', ResumePage)
    .component('ProjectsPage', ProjectsPage)
    .component('ProjectDetails', ProjectDetails)
    .component('ProjectCards', ProjectCards)
    .component('AboutMe', AboutMe)
    .component('AccordionComponent', AccordionComponent)
    .component('CarouselComponent', CarouselComponent)
    .component('PageFooter', PageFooter)
    .mount('#app')
