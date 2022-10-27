<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-red-500 text-white text-center">
<!--    <PageHeader />-->
  </header>

  <nav>
    <NavbarComponent />
  </nav>

  <main>
    <div class="text-slate-200 min-h-screen p-2 lg:p-6">
      <RouterView />
    </div>

  </main>

  <footer class="bg-zinc-900 text-slate-200 text-center">
    <PageFooter />
  </footer>

</template>

<style scoped>


main {
  background-image: url('/img/black-backgroundsm.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
}

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

footer {

}

@media (min-width: 500px) {
  main {
    background-image: url('/img/black-backgroundmd.jpg');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
  }

}

@media (min-width: 768px) {
  header {
    padding-right: calc(var(--section-gap) / 2);
  }

  main {
    background-image: url('/img/black-backgroundlg.jpg');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
  }

}
</style>
