<template>
  <div v-if="isDesktop">
     <Carousel :items-to-show="2" :autoplay="3000" :wrap-around="true">
        <Slide v-for="slide in slides" :key="slide.id">
          <div class="">
            <p class="p-2 text-sm leading-loose">{{ slide.description }}</p>
            <img class="rounded-md h-full w-full hover:border-4 hover:border-red-900" :src="slide.img" :alt="slide.alt" @click="openImage(slide.img)">
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
     </Carousel>
  </div>

  <div v-else>
     <Carousel :items-to-show="1" :autoplay="3000" :wrap-around="true">
        <Slide v-for="slide in slides" :key="slide.id">
          <div class="">
            <p class="p-2 text-sm leading-loose">{{ slide.description }}</p>
            <img class="rounded-md h-full w-full hover:border-4 hover:border-red-900" :src="slide.img" :alt="slide.alt" @click="openImage(slide.img)">
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
import {onMounted, onUnmounted, ref, watch} from "vue";
export default {
  name: "CarouselComponent",
  components: {
    Carousel, Slide, Pagination, Navigation
  },

  setup() {

    const isDesktop = ref(window.innerWidth >= 768)
    const windowWidth = ref(null)

    const onWidthChange = () => windowWidth.value = window.innerWidth
      onMounted(() => window.addEventListener('resize', onWidthChange))
      onUnmounted(() => window.removeEventListener('resize', onWidthChange))

    watch(windowWidth, () => {
      windowWidth.value = window.innerWidth
      isDesktop.value = windowWidth.value >= 768;
})

     const openImage = (imgSrc) => {
      window.open(imgSrc)
    }

    const slides = ref(
        {
          'landingPage': {'id': 1, 'alt': 'Black Moon Games Landing Page', 'description': 'Landing page with content editable by admin.', 'img': '/img/bmg-landing-page-sm.jpg'},
          'productCarousel': {'id': 2, 'alt': 'Black Moon Games Product Carousel', 'description': 'Carousel for displaying new products, with links to their external store page.', 'img': '/img/bmg-carousel-sm.jpg'},
          'eventCalendar': {'id': 3, 'alt': 'Black Moon Games Event Calendar', 'description': 'Dynamic events calendar synced with Google Calendar.', 'img': '/img/bmg-event-calendar-sm.jpg'},
          'adminPage': {'id': 4, 'alt': 'Black Moon Games Admin Dashboard', 'description': 'Custom content management system using Django Wagtail.', 'img': '/img/bmg-admin-dashboard-sm.jpg'},
        }
    )

    return {
      openImage,
      slides, isDesktop, windowWidth
    }
  }

}
</script>

<style scoped>

</style>