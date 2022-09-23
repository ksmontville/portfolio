<template>

  <div v-for="project in projects" :key="project.id" class="card flex flex-col bg-zinc-900 text-slate-200 rounded-lg border-2 border-red-50 w-fit lg:w-1/4">

    <div class="card-img border-b-8 border-red-50 h-80 overflow-scroll">
      <p class="bg-red-400 text-center text-2xl border-b-8 border-red-50 p-4">{{ project.title }}</p>
      <img class="m-auto w-fit" :src="project.image" alt="Project Image">
    </div>

    <div class="card-body rounded-lg text-slate-200 border-b-8 border-red-50">
      <div class="rounded-md bg-zinc-700 p-2 flex flex-col items-center">
        <div class="h-fit overflow-visible">
          <p class="leading-loose text-center text-xl underline p-2">Guest Credentials</p>
          <p class="leading-loose text-center mb-6"><strong>{{ project.credentials }}</strong></p>
          <p class="leading-loose text-center text-xl underline p-2">Description</p>
          <p class="leading-loose text-justify p-2">{{ project.description }}</p>
        </div>
        <button class="rounded-md bg-red-500 text-slate-200 text-center p-2 mt-12 mb-6" type="button"><a :href="project.link" target="_blank">Show me more!</a></button>
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
        'description': 'A personal wedding website with password protection and functional RSVP form using ' +
            'Python Django framework for storage of user data, web serving, and HTML templating with Bootstrap 5 for custom styling.',
        'link': 'https://www.montovacelebration.com',
        'credentials': 'Password: 052723'
      },
      'letsGetTrivial': {
        'id': 3,
        'title': "Let's Get Trivial",
        'image': '/img/letsgettrivial.png',
        'description': 'A text-based quiz game which generates questions using Open Trivia DB. Users can select category,' +
            ' difficulty, and number of questions. Creates a locally stored leaderboard for recording high scores.',
        'link': 'https://github.com/ksmontville/lets_get_trivial',
        'credentials': 'No credentials needed.'
      },
      'snakeVsMongoose': {
        'id': 4,
        'title': 'Snake vs. Mongoose',
        'image': '/img/snakevsmongoose.png',
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