<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<!--  <header class="bg-gradient-to-b from-black to-gray-700 text-white text-center">-->
<!--    <PageHeader />-->
<!--  </header>-->

  <nav>
    <NavbarComponent />
  </nav>

  <main>
    <div class="bg-gradient-to-b from-slate-800 to-slate-400 text-white min-h-screen">
      <RouterView />
    </div>
  </main>

  <footer class="bg-gradient-to-t from-black to-gray-600 text-white text-center">
    <PageFooter />
  </footer>

</template>

<style scoped>


header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

main {

}

footer {

}

@media (min-width: 768px) {
  header {
    padding-right: calc(var(--section-gap) / 2);
  }

}
</style>
