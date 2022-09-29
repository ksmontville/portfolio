<template>

  <div class="p-4" id="accordion">
    <div :id="'accordionItem' + panel.id" v-for="panel in panels" :key="panel.id" >
      <button class="rounded-md bg-red-500 w-full text-center text-slate-200 hover:bg-red-400 focus:bg-red-300 active:bg-red-300 text-xl mb-1 p-4"
              :class="{active: !panel.hidden}" @click="panel.hidden = !panel.hidden">{{ panel.title }}</button>
      <div :id="panel.id" class="bg-zinc-700 block p-2" v-if="!panel.hidden">
        <p class="leading-loose p-2">{{ panel.text }}</p>
      </div>
    </div>
  </div>

</template>

<script>
import {ref} from "vue";

export default {
  name: "AccordionComponent",

  setup(){

    const textAboutMe = 'I am a former high school science teacher, now web developer seeking to leverage my passion for knowledge to the technology industry. ' +
        'I am always excited to learn new technologies,' +
        ' engage in diverse development methodologies, process constructive feedback, and make meaningful contributions to a team.' +
        ' I am currently living in Lebanon, New Hampshire with my wife and two cats! '

    const textHobbies = 'My non-work interests include cycling, skateboarding, reading, video games, ' +
        'miniature painting, Dungeons and Dragons, board games, and cats.'

    const textProfessionalGoals = 'I have spent the last year or more self-studying computer science fundamentals and ' +
        'programming paradigms (specifically Python, JavaScript, HTML, CSS, and related frameworks) by leveraging my ' +
        'problem solving and analytical skills developed during my undergraduate education in physics and mathematics. ' +
        'I will be relocating to California with my wife in the time frame of June, 2023 and will be seeking employment,' +
        ' either on-site, remote, or hybrid, in the Bay Area.'

    const textWhyWebDev = 'I find designing and developing websites to be a zen experience. The hours slip away as I work tirelessly ' +
        ' to bring a specific design to life, a certain functionality into reality. It is endlessly satisfactory to watch your program' +
        ' become part of the infinitely large information conglomerate that we call the web, and to know that someone out there' +
        ' is enjoying a piece of software that you designed just for them. I hope to be able to work on a web service that has a real' +
        ' and measurable and positive experience on a user\'s life, even if it is only for a brief moment of their day.'

    const textYearsAsTeacher = 'I am a fully certified high school science teacher formerly working for a number of ' +
        'schools, both public and private. Though I remain a fervent supporter of public education ' +
        'and its important duties in developing young minds, I have recently come to understand that my true ' +
        'passion is for computer programming and its related fields of web development, data science, and ' +
        'software engineering. Teaching is a wonderfully fulfilling job rife with emotional highs and lows. It is also' +
        ' a very stressful, energy-intensive, and often tragic profession. Ultimately, the negatives began to outweigh' +
        ' the positives and I made the decision to pursue a new career. I will always value the lessons ' +
        ' that I learned, and the personal growth that I developed as a teacher, and seek to employ those skills in my next professional endeavor.'

    const panels = ref({
      'About Me': {id: 1, title: 'About Me', text: textAboutMe , hidden: true,},
      'Hobbies': {id: 2, title: 'Hobbies', text: textHobbies, hidden: true,},
      'Professional Goals:': {id: 3, title: 'Professional Goals', text: textProfessionalGoals, hidden: true,},
      'Why Web Development': {id: 4, 'title': 'Why Web Development', text: textWhyWebDev, hidden:true},
      'Years as a Teacher': {id: 5, title: 'Years as a Teacher', text: textYearsAsTeacher, hidden: true,},
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
  color: whitesmoke;
  content: ' + ';
  font-size: 1.4rem;
  float: right;
}

.active:after {
  color: whitesmoke;
  content: ' - ';
  font-size: 2rem;
}

</style>