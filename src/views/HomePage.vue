<template>
  <div class="flex flex-row flex-wrap items-baseline justify-center p-4 mt-4 mb-12">

    <div class="text-center flex-1 bg-cover flex flex-col flex-nowrap items-center">
      <p class="leading-loose text-5xl lg:text-6xl">Hello, I'm <span class="text-red-500">Kyle</span>!</p>
      <p class="leading-loose text-xl decoration-double overline mb-6">Science teacher turned <span class="text-red-500">Web Developer</span></p>
      <div class="p-6">
          <a href="/img/kylemontville.jpeg" target="_blank">
          <img class="rounded-full max-w-xs hover:border-4 hover:border-red-900" src="/img/kylemontville.jpeg" alt="Kyle Montville">
          </a>
      </div>

      <div class="flex flex-col flex-nowrap justify-center items-center border-b-2 mb-16">
        <button class="rounded-md bg-red-500 text-slate-200 text-center hover:bg-red-300 p-2 mt-12 mb-4">
          <a class="text-lg" href="/img/Kyle-Montville-Resume.pdf" download="Kyle-Montville-Resume">
          <strong>Download R&eacute;sum&eacute;</strong>
          </a>
        </button>
      </div>
    </div>

    <div class="flex-1 flex flex-col gap-8 justify-center">

      <div class="container flex flex-col gap-4 border-b-2">
        <p class="text-center leading-loose text-4xl">Why Hire <span class="text-red-500">Me</span>?</p>
        <ul role="list" class="mb-4">
          <li class="leading-loose text-lg my-4">
              <img class="inline p-2" src="/icons/caret-right-red.svg" alt="Carat Right">Owner and Developer of
              <a href="https://codingcat.io" target="_blank" class="text-red-300 underline">CodingCat, LLC.</a>
          </li>
          <li v-for="bullet in bulletPointsTop" class="leading-loose text-lg my-4">
            <img class="inline p-2" src="/icons/caret-right-red.svg" alt="Carat Right">{{ bullet.text }}
          </li>
        </ul>
      </div>

      <div class="container flex flex-col gap-4 border-b-2">
        <p class="text-center leading-loose text-4xl mt-8">At a <span class="text-red-500">Glance</span>:</p>
        <ul role="list" class="mb-4">
          <li v-for="bullet in bulletPointsBot" class="leading-loose text-lg my-4">
            <img class="inline p-2" src="/icons/caret-right-red.svg" alt="Carat Right">{{ bullet.text }}
          </li>
        </ul>
      </div>

    </div>

</div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "HomePage",

  setup() {

    const openImage = (imgSrc) => {
      window.open(imgSrc)
    }

    const bulletPointsTop = ref({
      'one': {'text': 'Contracting full-stack web developer building responsive, performant, accessible, custom designed small business websites with integrated content management solutions and SEO optimization.'},
      'two': {'text': "Flexible with language frameworks and able to rapidly learn new tech stacks."},
      'three': {'text': 'Specializes in problem solving, collaboration, and communication.'},
      'four': {'text': 'Employs leadership, inclusivity, empathy, and other soft-skills developed during a career in teaching to the technology industry.'},
      'five': {'text': 'Excited to start building your next website and to generate value for your company.'}
    })

    const bulletPointsBot = ref({
      'one': {'text': 'Former science teacher with Master of Arts in Teaching and six years of experience.'},
      'two': {'text': 'Dual major Bachelor of Science in physics and mathematics with concentrations in calculus and statistics.'},
      'three': {'text': 'Undergraduate research in astronomy and computational physics using MATLAB, Mathematica, and R.'},
      'four': {'text': 'Living in San Francisco and looking for work either on-site, hybrid, or remote.'}
    })

    return {
      openImage,
      bulletPointsTop, bulletPointsBot
    }
  }
}
</script>

<style scoped>

a:hover {
  background-color: transparent;
}

</style>