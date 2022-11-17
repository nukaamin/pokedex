// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@formkit/nuxt'],
  build: {
    transpile: [
      '@apollo/client',
      'ts-invariant/process'
    ],
  }
})
