<template>
  <div class="navbar bg-zinc-900 text-white pr-2 pl-2 lg:pl-12 lg:pr-12">
    <div class="navbar navbar-items flex flex-row flex-nowrap justify-between items-center p-2">
      <div class="navbar navbar-logo text-xl">
        <router-link :to="{name: 'home'}" @click="hidden=true">Kyle Montville</router-link>
      </div>
      <div class="navbar navbar-toggle flex flex-row flex-nowrap">
        <button class="outline-red" :class="{active: !hidden}" @click="toggleNav">
          <img class="" src="/icons/menu-icon.png" alt="Menu Nav">
        </button>
      </div>
    </div>

    <div class="navbar navbar-dropdown" :class="{hidden: hidden}">
      <div class="navbar navbar-navlinks flex flex-col flex-nowrap items-start p-2 gap-6">
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

    const hidden = ref(true)


    function toggleNav() {
      hidden.value = !hidden.value
    }

    return {
      hidden,
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

.hidden {
  display: none;
}

@media (min-width: 768px) {

  .navbar {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

  }

  .navbar-navlinks {
    display: flex;
    flex-flow: row nowrap;
    gap: 0 3.6vw;
  }

  .navbar-toggle {
    display: none;
  }

  .hidden {
    display: flex;
  }

}

</style>