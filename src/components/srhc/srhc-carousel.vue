<template>
  <div v-if="isDesktop">
     <Carousel :items-to-show="2" :autoplay="3000" :wrap-around="true">
        <Slide v-for="slide in slides" :key="slide.id">
          <div class="">
            <p class="p-2 text-sm leading-loose">{{ slide.description }}</p>
            <a :href="slide.img" target="blank" class="flex flex-col items-center">
              <img class="rounded-md h-3/4 w-3/4 hover:border-4 hover:border-red-900" :src="slide.img" :alt="slide.alt">
            </a>
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
            <a :href="slide.img" target="blank" class="flex flex-col items-center">
              <img class="rounded-md h-3/4 w-3/4 hover:border-4 hover:border-red-900" :src="slide.img" :alt="slide.alt">
            </a>
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
          'landingPage': {'id': 1, 'alt': 'South Royalton Health Center Landing Page', 'description': 'Landing page for South Royalton Health Center showing logo and responsive nav bars.', 'img': '/img/srhc-landing-page.png'},
          'aboutUs': {'id': 2, 'alt': 'South Royalton Health Center Staff Cards', 'description': 'Staff cards with button for accessing more information.', 'img': '/img/srhc-about-us-cards.png'},
          'localResources': {'id': 3, 'alt': 'South Royalton Health Center Local Resources', 'description': 'Responsive tabs for categorizing local community resources.', 'img': '/img/srhc-local-resources.png'},
          'patientForms': {'id': 4, 'alt': 'South Royalton Health Center Patient Forms', 'description': 'Expansion panels for categorizing online patient health forms.', 'img': '/img/srhc-patient-forms.png'},
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