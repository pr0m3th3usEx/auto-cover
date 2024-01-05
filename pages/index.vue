<script setup lang="ts">
useSeoMeta({
  title: 'AI-generated cover letter | AutoCover',
});
</script>

<template>
  <div class="w-full px-8 relative">
    <div class="flex flex-col gap-16 items-start absolute bottom-1/2 translate-y-1/2">
      <div>
        <h2 class="landing-title w-full lg:max-w-screen-md">You virtual assistant to create your cover letter</h2>
      </div>
      <button class="button button-primary">Create my cover letter</button>
    </div>
  </div>
</template>

<style scoped>
.landing-title {
  @apply text-white text-4xl lg:text-6xl;
}
</style>
