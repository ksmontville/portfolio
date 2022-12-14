<template>

  <div v-for="project in projects" :key="project.id" class="card flex flex-col text-slate-200 rounded-lg border-2 border-red-50 w-fit lg:w-1/4">

    <div class="card-img rounded-md h-fit border-b-8 border-red-50 h-fit">
      <p class="bg-red-500 rounded-t-md text-center text-2xl border-b-8 border-red-50 p-4">{{ project.title }}</p>
      <img class="m-auto aspect-square" :src="project.image" :alt="project.alt">
    </div>

    <div class="card-body text-slate-200 border-b-8 border-red-50">
      <div class="rounded-lg p-2 flex flex-col items-center">
        <div class="h-fit overflow-visible">
          <p class="leading-loose text-center text-xl underline p-2">Guest Credentials</p>
          <p class="leading-loose text-center mb-6"><strong>{{ project.credentials }}</strong></p>
          <p class="leading-loose text-center text-xl underline p-2">Description</p>
          <p class="leading-loose text-justify p-2">{{ project.description }}</p>
          <p class="leading-loose text-center text-xl underline p-2">Technologies</p>
          <p class="leading-loose text-left p-2">{{ project.tech }}</p>
        </div>
        <form :action="project.link" method="get" target="_blank">
          <button type="submit" class="rounded-md bg-red-500 text-slate-200 text-center hover:bg-red-300 p-2 mt-12 mb-6">Show me more!</button>
        </form>
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
        'credentials': 'No credentials needed.'
      },
      'chopThatVeg': {
        'id': 2,
        'title': 'Chop That Veg!',
        'image': '/img/chop-that-veg.jpeg',
        'alt': 'Screenshot of the the Chop That Veg! API.',
        'description': 'Full-stack SPA where users can search for a vegetable by name or from a list. Returns' +
            ' a procedure for chopping and useful links. Users may add new vegetables to the API. Primarily a ' +
            ' proof-of-concept build for a full-stack API project.',
        'tech': 'Vue.js, Flask, Marshmallow, SQLite, SQLAlchemy, Tailwind CSS, Netlify, Heroku',
        'link': 'https://chop-that-veg.netlify.app/',
        'credentials': 'No credentials needed.'
      },
      'mhDashboard': {
        'id': 3,
        'title': "Dr. Liza's Website",
        'image': '/img/dashboard-landing-page.jpeg',
        'alt': 'Screenshot of the Mental Health Dashboard webapp.',
        'description': 'A prototype web app serving as a repository of mental health resources and as a tool for' +
            ' managing mental health. This project was built for my wife who is' +
            ' a mental health professional, and its development is at her discretion!',
        'tech': 'Vue.js, Python Django REST, Express, Auth0 API, Bootstrap 5, Heroku',
        'link': 'https://drliza-mentalhealth.herokuapp.com/',
        'credentials': 'Username: GuestAccount, Password: !Password'
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
        'credentials': 'Password: 052723'
      },
    })

    return {
      projects,
    }
  }
}
</script>

<style scoped>

</style>