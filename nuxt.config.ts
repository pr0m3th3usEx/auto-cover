// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', 'nuxt-icon', '@formkit/nuxt'],
  googleFonts: {
    families: {
      'Red Hat Display': true,
    },
  },
  formkit: {
    autoImport: true,
  },
  imports: {
    dirs: ['./types/*.ts'],
  },
  typescript: {
    typeCheck: true,
  },
});
