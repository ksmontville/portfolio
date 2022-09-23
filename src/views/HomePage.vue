<template>
  <div class="bg-cover flex flex-col flex-nowrap items-center">
    <p class="leading-loose text-5xl">Hello, I'm <span class="text-red-500">Kyle</span>!</p>
    <p class="leading-loose text-lg decoration-double overline mb-6">Science teacher turned <span class="text-red-500">web developer</span></p>
    <div class="p-6">
      <img class="rounded-full max-w-xs sepia" src="/img/kylemontville.jpeg" alt="Kyle Montville">
    </div>
    <div class="flex flex-col flex-nowrap justify-center items-center">
      <button class="rounded-md bg-red-500 w-48 p-2 m-6">
        <a class="text-lg" href="/img/Kyle-Montville-Resume.pdf" download="Kyle-Montville-Resume">
        <strong>Download Resume</strong>
        </a>
      </button>
    </div>

    <div class="mt-6 lg:mt-12">
      <ul v-for="bullet in bulletPoints" role="list">
        <li class="leading-loose m-4">
          <img class="inline p-2" src="/icons/caret-right-red.svg" alt="Carat Right">{{ bullet.text }}
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
import {ref} from "vue";

export default {
  name: "HomePage",

  setup() {

    const bulletPoints = ref({
      'one': {'text': 'Problem solving, collaboration, and communication are my specialties.'},
      'two': {'text': 'Employing myriad soft-skills developed during a career in teaching to the technology industry.'},
      'three': {'text': 'Excited to start building your next website using responsive, mobile-first design principles.'}
    })

    return {
      bulletPoints,
    }
  }
}
</script>

<style scoped>

</style>