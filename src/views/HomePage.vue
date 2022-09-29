<template>
  <div class="bg-cover flex flex-col flex-nowrap items-center">
    <p class="leading-loose text-5xl">Hello, I'm <span class="text-red-500">Kyle</span>!</p>
    <p class="leading-loose text-lg decoration-double overline mb-6">Science teacher turned <span class="text-red-500">Web Developer</span></p>
    <div class="p-6">
      <img class="rounded-full max-w-xs gra" src="/img/kylemontville.jpeg" alt="Kyle Montville">
    </div>
    <div class="flex flex-col flex-nowrap justify-center items-center">
      <button class="rounded-md bg-red-500 text-slate-200 text-center hover:bg-red-300 p-2 mt-12 mb-12 lg:mb-6">
        <a class="text-lg" href="/img/Kyle-Montville-Resume.pdf" download="Kyle-Montville-Resume">
        <strong>Download R&eacute;sum&eacute;</strong>
        </a>
      </button>
    </div>

    <div class="lg:mt-12">
      <ul v-for="bullet in bulletPoints" role="list">
        <li class="leading-loose text-lg m-4">
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
      'one': {'text': 'Specializing in problem solving, collaboration, and communication.'},
      'two': {'text': 'Employing leadership, inclusivity, empathy, and other soft-skills developed during a career in teaching to the technology industry.'},
      'three': {'text': 'Excited to start building your next website using responsive, mobile-first design principles.'}
    })

    return {
      bulletPoints,
    }
  }
}
</script>

<style scoped>

a:hover {
  background-color: transparent;
}

</style>