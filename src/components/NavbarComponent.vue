<template>
  <div class="navbar bg-zinc-900 opacity-90 text-white pr-2 pl-2 lg:pl-12 lg:pr-12">
    <div class="navbar-items flex flex-row flex-nowrap justify-between items-center p-2">
      <div class="navbar-logo text-xl">
        <router-link :to="{name: 'home'}" @click="isHidden=true">
          <span class="font-mono">{ </span>
          <span class="font-mono text-lg text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500via-yellow-500 via-green-500 to-violet-500">Kyle Montville</span>
          <span class="font-mono"> }</span>
        </router-link>
      </div>
      <div class="navbar navbar-toggle flex flex-row flex-nowrap">
        <button class="outline-red" :class="{active: !isHidden}" @click="toggleNav">
          <img class="" src="/icons/menu-icon.png" alt="Menu Nav">
        </button>
      </div>
    </div>


<!--  Mobile navbar -->
    <Transition v-if="!isDesktop" name="slide">
      <div v-show="!isHidden" class="navbar-dropdown">
        <div class="navbar-navlinks flex flex-col flex-nowrap items-start p-2 gap-6">
          <router-link :to="{name: 'home'}" @click="toggleNav">Home</router-link>
          <router-link :to="{name: 'resume'}" @click="toggleNav">R&eacute;sum&eacute;</router-link>
          <router-link :to="{name: 'projects'}" @click="toggleNav">Projects</router-link>
          <router-link :to="{name: 'about'}" @click="toggleNav">About</router-link>
        </div>
      </div>
    </Transition>

<!--    Desktop navbar-->
    <div v-else class="navbar-dropdown">
        <div class="navbar-navlinks flex flex-col flex-nowrap items-start p-2 gap-6">
          <router-link :to="{name: 'home'}" @click="toggleNav">Home</router-link>
          <router-link :to="{name: 'resume'}" @click="toggleNav">R&eacute;sum&eacute;</router-link>
          <router-link :to="{name: 'projects'}" @click="toggleNav">Projects</router-link>
          <router-link :to="{name: 'about'}" @click="toggleNav">About</router-link>
        </div>
      </div>


  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "NavbarComponent",

  setup() {

    const isHidden = ref(true)
    const isDesktop = ref(window.innerWidth >= 768)

    function toggleNav() {
      isHidden.value = !isHidden.value
    }

    return {
      isHidden, isDesktop,
      toggleNav,
    }

    }
  }

</script>

<style scoped>

.active {
  padding: 0.1rem;
  outline: 0.1rem solid whitesmoke;
  border-radius: 2rem;

}

@media (min-width: 768px) {

  .navbar {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

  }

  .navbar-dropdown {
  }

  .navbar-navlinks {
    display: flex;
    flex-flow: row nowrap;
    gap: 0 3.6vw;
  }

  .navbar-toggle {
    display: none;
  }

  .isVisible {
    visibility: visible;
  }

}

</style>