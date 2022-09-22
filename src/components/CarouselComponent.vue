<template>
  <div class="flex flex-col justify-center items-center rounded-md">
     <Carousel :items-to-show="1" :autoplay="3000" :wrap-around="true">
        <Slide v-for="slide in slides" :key="slide.id">
          <div class="rounded-lg flex flex-col items-center justify-center border-4">
            <p class="leading-loose text-lg overline">{{ slide.description }}</p>
            <img class="rounded-lg h-1/2" :src="slide.img" :alt="slide.alt">
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
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
          'goldenGate': {'id': 1, 'alt': 'Golden Gate Bridge', 'description': 'My wife and I in San Francisco', 'img': '/img/goldengatebridge.png'},
          'glacierPoint': {'id': 2, 'alt': 'Glacier Point', 'description': 'Trip to Yosemite National Park', 'img': '/img/glacierpoint.jpg'},
          'gravelBike': {'id': 3, 'alt': 'My gravel bike', 'description': 'My favorite pass-time', 'img': '/img/bicycle.jpg'},
          'nelly': {'id': 4, 'alt': 'Nelly on her tree', 'description': 'Nelly in her tree', 'img': '/img/nelly-in-tree.jpg'},
          'moose': {'id': 5, 'alt': 'Moose in his bag', 'description': 'Moose in his bag', 'img': '/img/moose-in-bag.jpg'}
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