<script setup lang="ts">
useSeoMeta({
  title: 'AI-generated cover letter | AutoCover',
});
</script>

<template>
  <div class="w-full px-8 relative">
    <div class="flex flex-col gap-16 items-start absolute bottom-1/2 translate-y-1/2">
      <div>
        <h2 class="landing-title w-full lg:max-w-screen-md landing-animation opacity-0">
          You virtual assistant to create your cover letter
        </h2>
      </div>
      <button class="button button-primary landing-animation landing-animation-delay-cta opacity-0">
        Create my cover letter
      </button>
    </div>
  </div>
</template>

<style scoped>
.landing-title {
  @apply text-white text-4xl lg:text-6xl;
}

.landing-animation {
  @apply animate-fadeTranslation;
  animation-fill-mode: forwards;
}

.landing-animation-delay-cta {
  animation-delay: 300ms;
}
</style>
