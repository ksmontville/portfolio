<template>
  <div class="">
     <Carousel :items-to-show="1" :autoplay="3000" :wrap-around="true">
        <Slide v-for="slide in slides" :key="slide.id">
          <div class="">
            <p class="p-2 text-sm leading-loose">{{ slide.description }}</p>
            <img class="rounded-md h-full w-full" :src="slide.img" :alt="slide.alt">
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
     </Carousel>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import {ref} from "vue";
export default {
  name: "CarouselComponent",
  components: {
    Carousel, Slide, Pagination, Navigation
  },

  setup() {

    const slides = ref(
        {
          'landingPage': {'id': 1, 'alt': 'Black Moon Games Landing Page', 'description': 'Landing page with content editable by admin.', 'img': '/img/bmg-landing-page-sm'},
          'productCarousel': {'id': 2, 'alt': 'Black Moon Games Product Carousel', 'description': 'Carousel for displaying new products, with links to their external store page.', 'img': '/img/bmg-carousel-sm'},
          'eventCalendar': {'id': 3, 'alt': 'Black Moon Games Event Calendar', 'description': 'Dynamic events calendar synced with Google Calendar.', 'img': '/img/bmg-event-calendar-sm'},
          'adminPage': {'id': 4, 'alt': 'Black Moon Games Admin Dashboard', 'description': 'Custom content management system using Django Wagtail.', 'img': '/img/bmg-admin-dashboard-sm'},
        }
    )

    return {
      slides
    }
  }

}
</script>

<style scoped>

</style>