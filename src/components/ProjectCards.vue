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
      'mhDashboard': {
        'id': 1,
        'title': 'Mental Health Dashboard',
        'image': '/img/mentalhealthdashboard.png',
        'alt': 'Screenshot of the Mental Health Dashboard webapp.',
        'description': 'Full-stack project to create a SPA using Vue 3 for dynamic frontend interaction, ' +
            'and Python Django REST framework for API endpoints to serve and store user data.' +
            ' This project is minimally functional and is a work in progress!',
        'link': 'https://drliza-mentalhealth.herokuapp.com/',
        'credentials': 'Username: GuestAccount, Password: !Password'
      },
      'weddingRSVP': {
        'id': 2,
        'title': 'Wedding RSVP',
        'image': '/img/weddingwebsite.png',
        'alt': 'Screenshow showing the wedding RSVP form and website.',
        'description': 'A personal wedding website with password protection and functional RSVP form using ' +
            'Python Django framework for storage of user data, web serving, and HTML templating with Bootstrap 5 for custom styling.',
        'link': 'https://www.montovacelebration.com',
        'credentials': 'Password: 052723'
      },
      'letsGetTrivial': {
        'id': 3,
        'title': "Let's Get Trivial",
        'image': '/img/letsgettrivial.png',
        'alt': 'Screenshot showing the text-based interface.',
        'description': 'A text-based quiz game which generates questions using Open Trivia DB. Users can select category,' +
            ' difficulty, and number of questions. Creates a locally stored leaderboard for recording high scores.',
        'link': 'https://github.com/ksmontville/lets_get_trivial',
        'credentials': 'No credentials needed.'
      },
      'snakeVsMongoose': {
        'id': 4,
        'title': 'Snake vs. Mongoose',
        'image': '/img/snakevsmongoose.png',
        'alt': 'Screenshot of the game in progress.',
        'description': 'A variation on the classic game of Snake!' +
            ' Users can choose single player mode against a cpu-controlled mongoose, or a second player can play ' +
            'using the keyboard to control the mongoose manually.',
        'link': 'https://github.com/ksmontville/snake_vs_mongoose',
        'credentials': 'No credentials needed.'
      }
    })

    return {
      projects,
    }
  }
}
</script>

<style scoped>

</style>