<template>
  <div class="bg-cover flex flex-col flex-nowrap items-center text-slate-700 p-5" style="background-image: url('/img/cta_background.jpg')">
    <p class="leading-loose text-5xl pt-5">Hello, I'm Kyle!</p>
    <p class="leading-loose text-xl decoration-double overline pb-5">Science teacher turned web developer</p>
    <div class="pt-5 pb-5">
      <img class="rounded-full shadow-sm shadow-black w-auto p-5" src="/img/kylemontville.jpeg" alt="Kyle Montville">
    </div>
     <div class="flex flex-col flex-nowrap justify-center items-center mt-10 mb-10">
    <button class="rounded-lg bg-gradient-to-b from-bg-slate-700 to bg-slate 500 border-2 border-slate-700 shadow-lg shadow-black text-white w-32 p-2">
      <a class="text-lg" href="https://i.ibb.co/WKrgDxt/Kyle-Montville-Resume.jpg" target="_blank" download="Kyle Montville Resume">
      <strong>Download Resume</strong>
      </a>
    </button>
    </div>
  </div>

  <div class="text-left p-5">
    <ul role="list">
      <li class="leading-loose p-5">
        <img class="inline p-2" src="/icons/caret-right.svg" alt="Carat Right">Problem solving, collaboration, and communication are my specialties.
      </li>
      <li class="leading-loose p-5">
        <img class="inline p-2" src="/icons/caret-right.svg" alt="Carat Right">Employing myriad soft-skills developed during a career in teaching to the technology industry.
      </li>
      <li class="leading-loose p-5">
        <img class="inline p-2" src="/icons/caret-right.svg" alt="Carat Right">Excited to start building your next website.
      </li>
      <li class="leading-loose p-5">
        <img class="inline p-2" src="/icons/caret-right.svg" alt="Carat Right">Explore this portfolio to find out more about my education, work history, projects, and personal life.
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomePage"
}
</script>

<style scoped>

</style>