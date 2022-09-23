<template>
  <div class="bg-zinc-900 border-4 m-auto p-2 lg:w-1/2 lg:p-6">


  <div class="text-center" id="header">
    <p class="text-4xl p-3">Kyle Montville</p>
    <p class="text-2xl decoration-double overline mt-3 mb-6">Full-Stack Web Developer</p>
  </div>

  <div class="text-justify p-3" id="description">
    <p class="leading-loose">
      Teacher turned web developer. Six years as a high school science teacher has given me a wide array of highly
      developed soft-skills which will facilitate my rapid deployment into a development team with an expeditious
      understanding of their work-flow and production pipelines. Problem solving, collaboration, and communication are
      my specialties. Eager to learn, quick to comprehend, and excited to start delivering value to your company.
    </p>
  </div>

  <div class="text-justify p-3" id="contact">
    <p class="rounded-lg text-xl underline m-6 text-center lg:text-left">Contact</p>
    <ul class="rounded-lg leading-loose">
      <li><img class="inline mr-3" src="/icons/gps-icon-large.png" alt="GPS Icon" height="24" width="24">Lebanon, New Hampshire</li>
      <li><img class="inline mr-3" src="/icons/smartphone-icon-large.png" alt="Smartphone Icon" height="24" width="24">518-844-6577</li>
      <li><img class="inline mr-3" src="/icons/gmail-icon-large.png" alt="Gmail Icon" height="24" width="24">ksmontville@gmail.com</li>
      <li><img class="inline mr-3" src="/icons/github-icon-large.png" alt="GitHub Icon" height="24" width="24">
        <a class="underline" href="https://www.github.com/ksmontville" target="_blank">GitHub</a></li>
      <li><img class="inline mr-3" src="/icons/linkedin-icon-large.png" alt="LinkedIn Icon" height="24" width="24">
        <a class="underline" href="https://www.linkedin.com/in/kyle-montville" target="_blank">LinkedIn</a></li>
    </ul>
  </div>

  <div class="text-justify p-3" id="education">
    <p class="rounded-lg text-xl underline m-6 text-center lg:text-left">Education</p>
    <ul class="rounded-lg leading-loose">
      <li><img class="inline mr-2" src="/icons/caret-right.svg" alt="Carat Right">Clarkson University, 2016-2017</li>
        <li class="ml-5"><img class="inline mr-2" src="/icons/circle-thin.png" alt="Thin Circle">Master of Arts in Teaching</li>
        <li class="ml-5"><img class="inline mr-2" src="/icons/circle-thin.png" alt="Thin Circle">Summa Cum Laude</li>
      <li><img class="inline mr-2" src="/icons/caret-right.svg" alt="Carat Right">SUNY at Albany, 2012-2016</li>
        <li class="ml-5"><img class="inline mr-2" src="/icons/circle-thin.png" alt="Thin Circle">Bachelor of Science in Physics</li>
        <li class="ml-5"><img class="inline mr-2" src="/icons/circle-thin.png" alt="Thin Circle">Bachelor of Science in Mathematics</li>
        <li class="ml-5"><img class="inline mr-2" src="/icons/circle-thin.png" alt="Thin Circle">Magna Cum Laude</li>
    </ul>
  </div>

  <div class="text-justify p-3" id="coursework">
    <p class="rounded-lg text-xl underline m-6 text-center lg:text-left">Relevant Coursework</p>
    <ul class="rounded-lg leading-loose">
      <li><img class="inline mr-2" src="/icons/caret-right.svg" alt="Carat Right">Data Analysis and Signal Processing</li>
      <li><img class="inline mr-2" src="/icons/caret-right.svg" alt="Carat Right">Ordinary Differential Equations</li>
      <li><img class="inline mr-2" src="/icons/caret-right.svg" alt="Carat Right">Probability and Statistics</li>
      <li><img class="inline mr-2" src="/icons/caret-right.svg" alt="Carat Right">Multivariable Calculus</li>
      <li><img class="inline mr-2" src="/icons/caret-right.svg" alt="Carat Right">Linear Algebra</li>
    </ul>
  </div>

  <div class="text-justify p-3" id="tech-stack">
    <p class="rounded-lg text-xl underline m-6 text-center lg:text-left">Tech Stack</p>
    <ul class="rounded-lg leading-loose">
      <li><img class="inline mr-2" src="/icons/caret-right.svg" alt="Carat Right">Python</li>
        <li class="ml-5"><img class="inline mr-2" src="/icons/circle-thin.png" alt="Thin Circle">Django</li>
        <li class="ml-5"><img class="inline mr-2" src="/icons/circle-thin.png" alt="Thin Circle">Flask</li>
        <li class="ml-5"><img class="inline mr-2" src="/icons/circle-thin.png" alt="Thin Circle">Pandas</li>
      <li><img class="inline mr-2" src="/icons/caret-right.svg" alt="Carat Right">JavaScript</li>
        <li class="ml-5"><img class="inline mr-2" src="/icons/circle-thin.png" alt="Thin Circle">Vue.js</li>
        <li class="ml-5"><img class="inline mr-2" src="/icons/circle-thin.png" alt="Thin Circle">Node.js</li>
        <li class="ml-5"><img class="inline mr-2" src="/icons/circle-thin.png" alt="Thin Circle">Express</li>
      <li><img class="inline mr-2" src="/icons/caret-right.svg" alt="Carat Right">HTML</li>
      <li><img class="inline mr-2" src="/icons/caret-right.svg" alt="Carat Right">CSS</li>
        <li class="ml-5"><img class="inline mr-2" src="/icons/circle-thin.png" alt="Thin Circle">Bootstrap</li>
        <li class="ml-5"><img class="inline mr-2" src="/icons/circle-thin.png" alt="Thin Circle">Tailwind CSS</li>
      <li><img class="inline mr-2" src="/icons/caret-right.svg" alt="Carat Right">PostgreSQL</li>
      <li><img class="inline mr-2" src="/icons/caret-right.svg" alt="Carat Right">SQLite</li>
      <li><img class="inline mr-2" src="/icons/caret-right.svg" alt="Carat Right">Git</li>
        <li class="ml-5"><img class="inline mr-2" src="/icons/circle-thin.png" alt="Thin Circle">GitHub CLI</li>
        <li class="ml-5"><img class="inline mr-2" src="/icons/circle-thin.png" alt="Thin Circle">Heroku CLI</li>
      <li><img class="inline mr-2" src="/icons/caret-right.svg" alt="Carat Right">Linux BASH</li>
      <li><img class="inline mr-2" src="/icons/caret-right.svg" alt="Carat Right">R</li>
      <li><img class="inline mr-2" src="/icons/caret-right.svg" alt="Carat Right">MATLAB</li>
      <li><img class="inline mr-2" src="/icons/caret-right.svg" alt="Carat Right">Mathematica</li>
    </ul>
  </div>

  <div class="text-justify p-3" id="other-work-experience">
    <p class="rounded-lg text-xl underline m-6 text-center lg:text-left">Other Work Experience</p>
    <ul class="rounded-lg leading-loose">
      <li><img class="inline mr-2" src="/icons/caret-right.svg" alt="Carat Right">Science Teacher NY 7-12, NH 9-12</li>
        <li class="ml-5"><img class="inline mr-2" src="/icons/circle-thin.png" alt="Thin Circle">Lebanon High School, 2020 - 2022</li>
        <li class="ml-5"><img class="inline mr-2" src="/icons/circle-thin.png" alt="Thin Circle">RCS High School, 2017 - 2020</li>
        <li class="ml-5"><img class="inline mr-2" src="/icons/circle-thin.png" alt="Thin Circle">Emma Willard School, 2016-2017</li>
    </ul>
  </div>
  </div>
</template>

<script>
export default {
  name: "ResumePage"
}
</script>

<style scoped>

</style>