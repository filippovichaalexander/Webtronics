// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-quasar-ui',
    'nuxt-lodash',
  ],
  lodash: {
    prefix: "_",
  },
  quasar: {
    plugins: ['Notify'],
  }
})
