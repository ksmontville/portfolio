<template>

  <div v-for="project in projects" :key="project.id" class="card flex flex-col bg-zinc-900 text-slate-200 rounded-lg border-2 border-red-50 w-fit lg:w-1/4">

    <div class="card-img rounded-md h-fit border-b-8 border-red-50 h-fit">
      <p class="bg-red-500 rounded-t-md text-center text-2xl border-b-8 border-red-50 p-4">{{ project.title }}</p>
      <img class="m-auto aspect-square" :src="project.image" :alt="project.alt">
    </div>

    <div class="card-body text-slate-200 border-b-8 border-red-50">
      <div class="rounded-lg bg-zinc-800 p-2 flex flex-col items-center">
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
      'chopThatVeg': {
        'id': 1,
        'title': 'Chop That Veg!',
        'image': '/img/chop-that-veg.jpeg',
        'alt': 'Screenshot of the the Chop That Veg! API.',
        'description': 'Full-stack SPA where users can search for a vegetable by name or from a list. Returns' +
            ' a procedure for chopping and useful links. Users may add new vegetables to the API.',
        'tech': 'Vue.js, Flask, Marshmallow, SQLite, SQLAlchemy, Tailwind CSS, Netlifly, Heroku',
        'link': 'https://chop-that-veg.netlify.app/',
        'credentials': 'No credentials needed.'
      },
      'mhDashboard': {
        'id': 2,
        'title': 'Mental Health Dashboard',
        'image': '/img/dashboard-landing-page.jpeg',
        'alt': 'Screenshot of the Mental Health Dashboard webapp.',
        'description': 'In-progress SPA serving dual-purpose as a repository of mental health resources, and a dashboard component' +
            ' which allows users to track their daily mental health activities.',
        'tech': 'Vue.js, Python Django REST, Express, Auth0 API, Bootstrap 5, Heroku',
        'link': 'https://drliza-mentalhealth.herokuapp.com/',
        'credentials': 'Username: GuestAccount, Password: !Password'
      },
      'weddingRSVP': {
        'id': 3,
        'title': 'Wedding RSVP',
        'image': '/img/weddingwebsite.png',
        'alt': 'Screenshow showing the wedding RSVP form and website.',
        'description': 'A personal wedding website with password protection, guest RSVP form, and links to travel accommodations which' +
            ' I used to keep track of my event attendees.',
        'tech': 'Python Django, Django Lockdown, JavaScript, Bootstrap 5, Heroku',
        'link': 'https://www.montovacelebration.com',
        'credentials': 'Password: 052723'
      },
      'letsGetTrivial': {
        'id': 4,
        'title': "Let's Get Trivial",
        'image': '/img/letsgettrivial.png',
        'alt': 'Screenshot showing the text-based interface.',
        'description': 'A text-based quiz game which generates questions using Open Trivia DB. Users can select category,' +
            ' difficulty, and number of questions. Creates a locally stored leaderboard for recording high scores.',
        'tech': 'Python, Requests, OpenTrivia API',
        'link': 'https://github.com/ksmontville/lets_get_trivial',
        'credentials': 'No credentials needed.'
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