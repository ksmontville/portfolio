<template>
  <div class="flex flex-row flex-nowrap">

    <div class="bg-red-500 w-4">
    </div>

    <div class="flex flex-col justify-evenly flex-1">

      <div class="flex flex-row flex-wrap flex-1 justify-evenly items-baseline p-5 lg:justify-center lg:gap-36" id="contactIcons">

        <div class="flex flex-col flex-nowrap items-center text-xs mt-6">
          <a href="https://github.com/ksmontville?tab=repositories" target="_blank"><img src="/icons/github-icon.png" alt="GitHub Icon"></a>
          <p class="p-3">GitHub</p>
        </div>

        <div class="flex flex-col flex-nowrap items-center text-xs">
          <a href="https://www.linkedin.com/in/kyle-montville/" target="_blank"><img src="/icons/linkedin-icon.png" alt="LinkedIn Icon"></a>
          <p class="p-3">LinkedIn</p>
        </div>

        <div class="flex flex-col flex-nowrap items-center text-xs">
          <a href="mailto:ksmontville@gmail.com"><img src="/icons/gmail-icon.png" alt="Gmail Icon"></a>
          <p class="p-3">Gmail</p>
        </div>
      </div>

      <div class="text-center text-xs p-3" id="copyright">
        <span>Kyle Montville, &copy; 2022-2023 -- Icons by <a class="text-red-500 underline" target="_blank" href="https://icons8.com">Icons8</a></span>
      </div>

    </div>

  </div>


</template>

<script>
export default {
  name: "PageFooter"
}
</script>

<style scoped>

</style>