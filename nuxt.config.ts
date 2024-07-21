// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: "src/",

  alias: {
    "@": "src/",
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: "Calendar",
      titleTemplate: "%s",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },

  css: [
    "~/assets/scss/common.scss"
  ],

  modules: ["vuetify-nuxt-module"]
});