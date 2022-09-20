<template>
  <div class="navbar bg-gradient-to-b from-slate-800 to-slate-400 text-white">
    <div class="navbar navbar-items flex flex-row flex-nowrap justify-between p-6">
      <div class="navbar navbar-logo text-xl">
        <router-link :to="{name: 'home'}">Kyle Montville</router-link>
      </div>
      <div class="navbar navbar-toggle">
        <button :class="{active: !hidden}" @click="toggleNav">| | |</button>
      </div>
    </div>

    <div class="navbar navbar-dropdown" :class="{hidden: hidden}">
      <div class="navbar navbar-navlinks flex flex-col flex-nowrap items-start p-4 gap-6">
        <router-link :to="{name: 'home'}">Home</router-link>
        <router-link :to="{name: 'resume'}">Resume</router-link>
        <router-link :to="{name: 'projects'}">Projects</router-link>
        <router-link :to="{name: 'about'}">About</router-link>
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
  padding: 0.2rem;
  outline: 0.2rem solid whitesmoke;
  border-radius: 0.2rem;
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