<template>
  <div class="flex flex-col flex-nowrap items-center mb-8 p-2 border-b-2">
    <p class="leading-loose text-4xl mb-6">A bit about me!</p>
    <div class="rounded-lg p-4 w-full lg:w-2/3">
        <AccordionComponent />
    </div>
  </div>


  <div class="flex flex-col flex-wrap justify-center items-center p-2 mb-8">
    <p class="text-center leading-loose text-4xl mb-6">Just some fun moments!</p>
    <div class="rounded-lg p-4 w-full lg:w-1/3">
      <CarouselComponentAboutMe />
    </div>
  </div>

</template>

<script>
export default {
  name: "AboutMe"
}
</script>

<style scoped>

</style>