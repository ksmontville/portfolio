<template>
  <div class="flex flex-col items-center justify-center gap-2 mb-8">
    <p class="text-center leading-loose text-4xl">Contracting</p>
    <p class="text-center leading-loose text-2xl">
      Satisfied clients of my web design business <span class="underline text-red-300"><a href="https://codingcat.io" target="_blank">CodingCat, LLC</a></span>.</p>
  </div>

  <div class="flex flex-col p-4" id="contracts">
      <div class="flex flex-row justify-center items-center gap-8 mb-8" id="logos">

          <div class="tab logo rounded-lg" id="bmg">
            <div class="max-w-lg flex flex-col  rounded-lg" id="logoContainerBmg" >
              <button class="rounded-lg focus:border-red-300" @click="toggleTab('bmgInfo')">
                  <img class="max-h-52 rounded-lg hover:border-4 hover:border-red-900 focus:border-4" src="/img/bmg-logo.png" alt="Black Moon Games Logo" id="bmgLogoContainer">
                  <small class="text-red-500">Click to learn more</small>
              </button>
            </div>
          </div>

          <div class="tab logo rounded-lg " id="srhc">
            <div class="max-w-lg flex flex-col" id="logoContainerSrhc" >
              <button class="rounded-lg focus:border-red-300" @click="toggleTab('srhcInfo')">
                  <img class="max-h-52 rounded-lg hover:border-4 hover:border-red-900 focus:border-4" src="/img/srhc-logo-light.jpg" alt="Black Moon Games Logo">
                  <small class="text-red-500">Click to learn more</small>
              </button>
            </div>
          </div>

      </div>

      <div class="tab-content" id="bmgInfo">
        <Transition name="fade">
          <bmg-info v-if="currentTab === 'bmgInfo'" />
        </Transition>
      </div>

      <div class="tab-content" id="srhcInfo">
        <Transition name="fade">
          <srhc-info v-if="currentTab === 'srhcInfo'" />
        </Transition>
      </div>

  </div>

</template>

<script>
import {ref} from "vue";

export default {
  name: "FreelancePage",

  setup() {
      const currentTab = ref('')

      const toggleTab = (tab) => {
          if (currentTab.value === tab) {
              currentTab.value = null
          }
          else {
            currentTab.value = tab

          }
      }

      return {
         currentTab,
         toggleTab,
      }
  }

}

</script>

<style scoped>

  #bmgLogoContainer {
    background-color: white;
  }

</style>