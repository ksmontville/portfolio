<template>
     <Carousel :items-to-show="1" :autoplay="3000" :wrap-around="true">
        <Slide v-for="slide in slides" :key="slide.id">
          <div class="rounded-full flex flex-col items-center justify-center">
            <p class="leading-loose mb-2">{{ slide.description }}</p>
              <a :href="slide.img" target="blank">
                <img class="rounded-lg max-h-80 hover:border-4 hover:border-red-900" :src="slide.img" :alt="slide.alt">
              </a>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
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

    const openImage = (imgSrc) => {
      window.open(imgSrc)
    }

    const slides = ref(
        {
          'goldenGate': {'id': 1, 'alt': 'Golden Gate Bridge', 'description': 'On a bike tour of San Francisco', 'img': '/img/goldengatebridge.png'},
          'redCurry': {'id': 2, 'alt': 'Eating red curry flavored ice cream', 'description': 'Eating red curry flavored ice cream ', 'img': '/img/red-curry-icecream.jpg'},
          'summerCamp': {'id': 3, 'alt': 'Years as a summer camp counselor', 'description': 'Years as a summer camp counselor', 'img': '/img/summer-camp.jpg'},
          'glacierPoint': {'id': 4, 'alt': 'Glacier Point', 'description': 'Visit to Yosemite National Park', 'img': '/img/glacierpoint.jpg'},
          'gravelBike': {'id': 5, 'alt': 'My gravel bike', 'description': 'Favorite pass-time', 'img': '/img/bicycle.jpg'},
          'nelly': {'id': 6, 'alt': 'Nelly on her tree', 'description': 'Nelly in her tree :)', 'img': '/img/nelly-in-tree.jpg'},
          'moose': {'id': 7, 'alt': 'Moose in his bag', 'description': 'Moose in his bag :)', 'img': '/img/moose-in-bag.jpg'}
        }
    )

    return {
      openImage,
      slides
    }
  }

}
</script>

<style scoped>

</style>