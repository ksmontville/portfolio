<template>
     <Carousel :items-to-show="1" :autoplay="3000" :wrap-around="true">
        <Slide v-for="slide in slides" :key="slide.id">
          <div class="rounded-full flex flex-col items-center justify-center">
            <p class="leading-loose text-lg mb-4">{{ slide.description }}</p>
            <img class="rounded-full max-h-80" :src="slide.img" :alt="slide.alt">
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
     </Carousel>
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
          'goldenGate': {'id': 1, 'alt': 'Golden Gate Bridge', 'description': 'Wife and I in San Francisco', 'img': '/img/goldengatebridge.png'},
          'glacierPoint': {'id': 2, 'alt': 'Glacier Point', 'description': 'Visit Yosemite National Park', 'img': '/img/glacierpoint.jpg'},
          'gravelBike': {'id': 3, 'alt': 'My gravel bike', 'description': 'Favorite pass-time', 'img': '/img/bicycle.jpg'},
          'nelly': {'id': 4, 'alt': 'Nelly on her tree', 'description': 'Nelly in her tree :)', 'img': '/img/nelly-in-tree.jpg'},
          'moose': {'id': 5, 'alt': 'Moose in his bag', 'description': 'Moose in his bag :)', 'img': '/img/moose-in-bag.jpg'}
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