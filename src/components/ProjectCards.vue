<template>
  <div v-for="project in projects" :key="project.id" class="card bg-white text-black rounded-lg w-3/4 p-3 mb-10">
    <div class="card-img border-b-8">
      <p class="text-center text-xl underline border-b-8 p-3 mt-3 mb-3">{{ project.title }}</p>
      <img class="rounded-md mb-3" :src="project.image" alt="Project Image">
    </div>
    <div class="card-body rounded-md text-left border-b-8 p-6">
      <p class="leading-loose mb-6">{{ project.description }}</p>
      <p class="text-center">
        <button class="text-white bg-gradient-to-t from-slate-600 to-slate-400 rounded-md p-3 mt-5" type="button"><a :href="project.link" target="_blank">Show me more!</a></button>
      </p>
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
        'description': 'A web app for managing mental health. This project is minimally functional and is currently in progress!',
        'link': 'https://drliza-mentalhealth.herokuapp.com/'
      },
      'weddingRSVP': {
        'id': 2,
        'title': 'Wedding RSVP',
        'image': '/img/weddingwebsite.png',
        'description': 'A wedding website and RSVP form. Password: 052723',
        'link': 'https://www.montovacelebration.com',
      },
      'letsGetTrivial': {
        'id': 3,
        'title': "Let's Get Trivial!",
        'image': '/img/letsgettrivial.png',
        'description': 'A text-based quiz game which generates questions using Open Trivia DB.',
        'link': 'https://github.com/ksmontville/lets_get_trivial'
      },
      'snakeVsMongoose': {
        'id': 4,
        'title': 'Snake vs. Mongoose',
        'image': '/img/snakevsmongoose.png',
        'description': 'A new take on the classic game of Snake. Play against a cpu-controlled or player controlled Mongoose!',
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