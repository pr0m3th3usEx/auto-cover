// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', 'nuxt-icon'],
  googleFonts: {
    families: {
      'Red Hat Display': true,
    },
  },
  typescript: {
    typeCheck: true,
  },
});
