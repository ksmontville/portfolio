<template>
  <div class="flex flex-col flex-nowrap items-center p-6">
    <p class="leading-loose text-4xl">Check me out.</p>
    <img src="/icons/arrow-down.png" alt="Down Arrow">
  </div>

  <div>
    <AccordionComponent />
  </div>

  <div class="flex flex-col flex-nowrap justify-center items-center p-6">
    <p class="leading-loose text-4xl">Snippets.</p>
    <div class="w-2/3">
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