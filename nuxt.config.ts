// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {
        content: [
          "./components/**/*.{js,vue,ts}",
          "./layouts/**/*.vue",
          "./pages/**/*.vue",
          "./plugins/**/*.{js,ts}",
          "./app.vue",
          "./error.vue",
        ],
        theme: {
          extend: {},
        },
        plugins: [require('daisyui')],
      },
      autoprefixer: {},
    },
  },
  modules: ["@nuxtjs/tailwindcss"]
})
