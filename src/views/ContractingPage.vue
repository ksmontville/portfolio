<template>
  <div class="flex flex-col items-center justify-center gap-2 mb-8">
    <p class="text-center leading-loose text-4xl">Contracting</p>
    <p class="text-center leading-loose text-2xl">
      Satisfied clients of my web design business <span class="text-red-500">CodingCat, LLC</span>.</p>
  </div>

  <div class="flex flex-col gap-8 p-2 pt-8 pb-8 mb-12 border-t-2 border-b-2" id="container">

    <div class="flex flex-col gap-4 mb-8" id="">
      <p class="text-4xl text-center font-bold leading-loose">Black Moon Games</p>
      <p class="text-lg italic text-center leading-loose text-red-500">Small Business Website with Dynamic Events Calendar and Headless CMS</p>
      <div class="">
        <CarouselComponentFreelanceBMG />
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
            Designed a responsive, high speed, mobile first website for a local board game store.
          </li>
          <li>
            <img class="inline p-2" src="/icons/caret-right-red.svg" alt="Carat Right">
            Created a dynamic events calendar which syncs with Google Calendar API. Users can add individual events to their
            own Google calendar, or users can subscribe to the calendar to stay up to date with the latest events at the store.
            Each event also includes an optional link to an external store page where users can register or learn more about the specific event.
          </li>
          <li>
            <img class="inline p-2" src="/icons/caret-right-red.svg" alt="Carat Right">
            Includes a headless content management system using Django Wagtail CMS. The admin user can edit numerous rich text fields
            on the website including the hero section, add events, descriptions, and timeframes to the event calendar, upload images to a carousel,
            add links to various sections of their online store page, and more.
          </li>
          <li>
            <img class="inline p-2" src="/icons/caret-right-red.svg" alt="Carat Right">
            Uses Vue 3 to create a dynamic frontend which implements a variety of async API calls to the backend for fetching content.
          </li>
          <li>
            <img class="inline p-2" src="/icons/caret-right-red.svg" alt="Carat Right">
            Integrates Python Django on the backend for data models, calls to Google Calendar API, and PostgreSQL database management.
          </li>
          <li>
            <img class="inline p-2" src="/icons/caret-right-red.svg" alt="Carat Right">
            Frontend is a single page app hosted on Netlify, and the backend & headless CMS are hosted on Heroku
            for deployment efficiency and curated database management. Image content is hosted on a separate Amazon S3 bucket.
          </li>
        </ul>
      </div>
    </Transition>


  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "FreelancePage",

  setup() {

    const showingMore = ref(null)

    const handleClick = () => {
      window.open('https://black-moon-games.com')
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