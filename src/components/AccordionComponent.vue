<template>

  <div class="p-3" id="accordion">
    <div :id="'accordionItem' + panel.id" v-for="panel in panels" :key="panel.id" >
      <button class="rounded-md bg-indigo-200 w-full text-center hover:bg-indigo-300 active:bg-indigo-300 text-black text-xl p-3" :class="{active: !panel.hidden}" @click="panel.hidden = !panel.hidden">{{ panel.title }}</button>
      <div :id="panel.id" class="bg-gray-900 block border-b-4 p-5" v-if="!panel.hidden">
        <p class="leading-loose p-3">{{ panel.text }}</p>
      </div>
    </div>
  </div>

</template>

<script>
import {ref} from "vue";

export default {
  name: "AccordionComponent",

  setup(){

    const textAboutMe = 'Blurb about me.'

    const textHobbies = 'My interests include cycling, skateboarding, reading, video games, ' +
        'miniature painting, Dungeons and Dragons, and board games.'

    const textProfessionalGoals = 'I have spent the last year or more self-studying computer science fundamentals and ' +
        'programming paradigms (specifically Python, JavaScript, HTML, CSS, and related frameworks) by leveraging my ' +
        'problem solving and analytical skills developed during my undergraduate education in physics and mathematics. ' +
        'I will be relocating to California with my wife in the time frame of June, 2023 and will be seeking employment,' +
        ' either on-site, remote, or hybrid, in the Bay Area.'

    const textYearsAsTeacher = 'I am a fully certified high school science teacher formerly working for a number of ' +
        'schools, both public and private. Though I remain a fervent supporter of public education ' +
        'and its important duties in developing young minds, I have recently come to understand that my true ' +
        'passion is for computer programming and its related fields of web development, data science, and ' +
        'software engineering. Teaching is a wonderfully fulfilling job rife with emotional highs and lows. It is also' +
        ' a very stressful, energy-intensive, and often tragic profession. Ultimately, the negatives began to outweigh' +
        ' the positives and I made the decision to pursue a new career. I will always value the lessons ' +
        ' that I learned, and the personal growth that I developed as a teacher, and hope to employ those skills in my next professional endeavor.'

    const panels = ref({
      'About Me': {id: 1, title: 'About Me', text: textAboutMe , hidden: true,},
      'Hobbies': {id: 2, title: 'Hobbies', text: textHobbies, hidden: true,},
      'Professional Goals:': {id: 3, title: 'Professional Goals', text: textProfessionalGoals, hidden: true,},
      'Years as a Teacher': {id: 4, title: 'Years as a Teacher', text: textYearsAsTeacher, hidden: true,},
    })
    const isHidden = ref(true)


    return {
      isHidden, panels,
    }
  }
}
</script>

<style scoped>

button:after {
  content: '\02795';
  font-size: 0.8rem;
  float: right;
}

.active:after {
  content: "\2796";
}

</style>