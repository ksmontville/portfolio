<template>

  <div class="flex flex-col flex-wrap justify-center gap-8">
    <div v-for="project in projects" :key="project.id" class="card flex flex-col lg:flex-row text-slate-200 rounded-l-lg border-2 border-red-50">

      <div class="flex-1 flex flex-col items-stretch justify-center card-img rounded-l-md border-b-8 border-r-4 border-red-50">
        <p class="bg-red-500 rounded-l-lg text-center text-2xl border-b-8 border-red-50 p-4">{{ project.title }}</p>
        <img class="flex-1 hover:border-4 hover:border-red-900" :src="project.image" :alt="project.alt" @click="openImage(project.image)">
      </div>

      <div class="flex-1 card-body text-slate-200 border-b-8 border-red-50 md:p-4">
        <div class="rounded-lg p-2 flex flex-col items-center">
          <div class="flex-1">
            <p class="leading-loose text-center text-xl underline p-2">Guest Credentials</p>
            <p class="leading-loose text-center text-lg mb-6"><strong>{{ project.credentials }}</strong></p>
            <p class="leading-loose text-center text-xl underline p-2">Description</p>
            <p class="leading-loose text-justify text-lg p-2">{{ project.description }}</p>
            <p class="leading-loose text-center text-xl underline p-2">Technologies</p>
            <p class="leading-loose text-left text-lg p-2">{{ project.tech }}</p>
          </div>
          <form class="mt-16 mb-8" :action="project.link" method="get" target="_blank">
            <button type="submit" class="rounded-md bg-red-500 text-slate-200 text-center hover:bg-red-300 p-4">Show me more!</button>
          </form>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "ProjectCard",

  setup() {

    const projects = ref({
      'openVegAPI': {
        'id': 1,
        'title': "OpenVeg API",
        'image': '/img/openveg-api.png',
        'alt': 'Screenshot of a prototype OpenVeg API.',
        'description': 'Prototype API for locating vegan/vegetarian restaurants by state, city, and/or zip code. Uses FastAPI' +
            ' for managing backend data and React for frontend searching and filtering tools. Data gathered and filtered' +
            ' programmatically via BeautifulSoup web scraping utilities.',
        'tech': 'React, FastAPI, BeautifulSoup, python-google-search, PostgreSQL, SQLAlchemy, Tailwind CSS',
        'link': 'https://openveg.app',
        'credentials': '[ No credentials needed ]'
      },
      'chopThatVeg': {
        'id': 2,
        'title': 'Chop That Veg!',
        'image': '/img/chop-that-veg.jpeg',
        'alt': 'Screenshot of the the Chop That Veg! API.',
        'description': 'NOTE: APP HAS CEASED FUNCTIONING SINCE HEROKU DISABLED THEIR FREE-TIER DATABASES. WORK IN PROGRESS! ' +
            'Full-stack SPA where users can search for a vegetable by name or from a list. Returns' +
            ' a procedure for chopping and useful links. Users may add new vegetables to the API.',
        'tech': 'Vue.js, Flask, Marshmallow, SQLite, SQLAlchemy, Tailwind CSS, Netlify, Heroku',
        'link': 'https://chop-that-veg.netlify.app/',
        'credentials': '[ No credentials needed ]'
      },
      'mhDashboard': {
        'id': 3,
        'title': "Mental Health Tracker",
        'image': '/img/mentalhealthdashboard.png',
        'alt': 'Screenshot of the Mental Health Dashboard webapp.',
        'description': 'A prototype web app serving as a repository of mental health resources and as a tool for' +
            ' managing mental health. Currently includes a TODO and drawing board app. Work in progress!',
        'tech': 'Vue.js, Python Django REST, Express, Auth0 API, Bootstrap 5, Heroku',
        'link': 'https://drliza-mentalhealth.herokuapp.com/',
        'credentials': '[ Username: GuestAccount ]::[ Password: !Password ]'
      },
      'weddingRSVP': {
        'id': 4,
        'title': 'Wedding RSVP',
        'image': '/img/weddingwebsite.png',
        'alt': 'Screenshot showing the wedding RSVP form and website.',
        'description': 'A personal wedding website with password protection, guest RSVP form, and links to travel accommodations which' +
            ' I used to keep track of my event attendees. Uses vanilla Python Django for MVT format and traditional serverside rendering.',
        'tech': 'Python Django, Django Lockdown, JavaScript, Bootstrap 5, Heroku',
        'link': 'https://www.montovacelebration.com',
        'credentials': '[ Password: 052723 ]'
      },
    })

    const openImage = (imgSrc) => {
      window.open(imgSrc)
    }

    return {
      projects,
      openImage,
    }
  }
}
</script>

<style scoped>

</style>