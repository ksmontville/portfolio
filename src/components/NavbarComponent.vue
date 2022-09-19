<template>
  <div class="navbar">
    <div class="navbar navbar-items">
      <div class="navbar navbar-logo">
        <router-link :to="{name: 'home'}">KM</router-link>
      </div>

      <div class="navbar navbar-toggle">
        <button @click="toggleNav">Toggle</button>
      </div>
    </div>

    <div class="navbar navbar-dropdown" :class="{hidden: hidden}">
      <div class="navbar navbar-navlinks">
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

.navbar {
  background-color: lightblue;
}

.navbar-items {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 1.2vw 2.4vw;
 }

.navbar-navlinks {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  padding: 1.2vw 2.4vw;
  gap: 2.4vw 3.6vw;
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