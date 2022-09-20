<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <PageHeader />
  </header>

  <nav>
    <NavbarComponent />
  </nav>

  <main>
      <RouterView />
  </main>

  <footer>
    <PageFooter />
  </footer>

</template>

<style scoped>

header {
  background-color: blue;
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
  background-color: lightyellow;
  min-height: 100vh;
}

footer {
  background-color: green;
  margin-top: auto;
}

@media (min-width: 768px) {
  header {
    padding-right: calc(var(--section-gap) / 2);
  }

}
</style>
