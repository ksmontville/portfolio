<template>
  <div v-for="project in projects" :key="project.id" class="card shadow-xl shadow-black bg-white text-black rounded-lg border-4 border-indigo-200 w-3/4 p-3 mb-10">
    <div class="card-img border-b-8">
      <p class="text-center text-xl underline border-b-8 p-3 mt-3 mb-3">{{ project.title }}</p>
      <img class="rounded-md mb-3" :src="project.image" alt="Project Image">
    </div>
    <div class="card-body rounded-lg border-b-8 p-3">
      <div class="rounded-lg bg-slate-300 p-3">
        <p class="leading-loose mb-6 p-3">{{ project.description }}</p>
        <p class="text-center">
          <button class="text-white bg-gradient-to-t from-slate-600 to-slate-400 rounded-md p-3 mt-5" type="button"><a :href="project.link" target="_blank">Show me more!</a></button>
        </p>
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
            'and Python Django REST framework for custom API endpoints to serve and store user data.' +
            ' This project is minimally functional and is currently in progress!',
        'link': 'https://drliza-mentalhealth.herokuapp.com/'
      },
      'weddingRSVP': {
        'id': 2,
        'title': 'Wedding RSVP',
        'image': '/img/weddingwebsite.png',
        'description': 'A personal wedding website with password protection and functional RSVP form using ' +
            'Python Django framework for storage of user data, web serving, and HTML templating with Bootstrap 5 for custom styling.' +
              '\n Password: 052723',
        'link': 'https://www.montovacelebration.com',
      },
      'letsGetTrivial': {
        'id': 3,
        'title': "Let's Get Trivial!",
        'image': '/img/letsgettrivial.png',
        'description': 'A text-based quiz game which generates questions using Open Trivia DB. Users can select category,' +
            'difficulty, and number of questions. Creates a locally stored leaderboard for recording high scores.',
        'link': 'https://github.com/ksmontville/lets_get_trivial'
      },
      'snakeVsMongoose': {
        'id': 4,
        'title': 'Snake vs. Mongoose',
        'image': '/img/snakevsmongoose.png',
        'description': 'A variation on the classic game of Snake!' +
            ' Users can choose single player mode against a cpu-controlled mongoose, or a second player can play ' +
            'using the keyboard to control the mongoose manually.',
        'link': 'https://github.com/ksmontville/snake_vs_mongoose'
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