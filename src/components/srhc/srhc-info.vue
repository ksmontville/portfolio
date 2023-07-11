<template>
  <div class="flex flex-col gap-8 p-2 pt-8 pb-8 mb-12 border-t-2 border-b-2" id="container">

    <div class="flex flex-col gap-4 mb-8" id="">
      <p class="text-4xl text-center font-bold leading-loose">South Royalton Health Center</p>
      <p class="text-lg italic text-center leading-loose text-red-500">Health Practice Website with HIPAA Compliant Email and Forms</p>
      <div class="">
        <srhc-carousel />
      </div>
    </div>

    <div class="flex flex-row items-center justify-center gap-16 mb-8" id="">
      <button class="bg-red-500 rounded-md p-4 hover:bg-red-300" @click="handleClick">Live Site</button>
      <button class="bg-red-500 rounded-md p-4 hover:bg-red-300" @click="showMore">More Info</button>
    </div>

    <Transition name="fade">
      <div v-show="showingMore" class="mb-8" id="">
        <ul class="flex flex-col gap-4 leading-loose">
          <li>
            <img class="inline p-2" src="/icons/caret-right-red.svg" alt="Carat Right">
            Designed a responsive, performant, accessible website for a local doctor's office.
          </li>
          <li>
            <img class="inline p-2" src="/icons/caret-right-red.svg" alt="Carat Right">
            Updated the design and layout to integrate modern web components such as responsive navbars, expansion panels, dialogs, and drop-down menus.
          </li>
          <li>
            <img class="inline p-2" src="/icons/caret-right-red.svg" alt="Carat Right">
            Improved the UI/UX and accessibility experience for users accessing the website using ARIA standards.
          </li>
          <li>
            <img class="inline p-2" src="/icons/caret-right-red.svg" alt="Carat Right">
              Implemented a suite of HIPAA compliant email and online forms using a third party service.
          </li>
          <li>
            <img class="inline p-2" src="/icons/caret-right-red.svg" alt="Carat Right">
            Frontend is a single page app hosted on Netlify and designed with customized Vuetify components.
          </li>
        </ul>
      </div>
    </Transition>


  </div>
</template>

<script>
import {ref} from "vue";

export default {
    name: "srhc-info.vue",

    setup() {
      const showingMore = ref(null)

    const handleClick = () => {
      window.open('https://srhealthcenter.com')
    }

    const showMore = () => {
      showingMore.value = !showingMore.value
    }

    return {
      showingMore,
      handleClick, showMore
    }
    }
}
</script>

<style scoped>

</style>