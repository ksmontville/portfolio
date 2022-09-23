<template>
  <div class="flex flex-col flex-nowrap items-center">
    <p class="leading-loose text-4xl">Learn about me.</p>
    <div class="w-full lg:w-1/3">
        <AccordionComponent />
    </div>
  </div>


  <div class="flex flex-col flex-nowrap justify-center items-center p-6">
    <p class="leading-loose text-4xl">Snippets.</p>
    <div class="bg-zinc-800 rounded-full p-6 w-fit lg:w-1/3">
      <CarouselComponent />
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