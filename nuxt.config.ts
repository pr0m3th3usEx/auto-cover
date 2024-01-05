// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      'Red Hat Display': true,
    },
  },
});
