/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      'index.html',
      './src/App.vue',
      './src/views/HomePage.vue',
      './src/views/ResumePage.vue',
      './src/components/NavbarComponent.vue',
      './src/components/PageHeader.vue',
      './src/components/PageFooter.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
