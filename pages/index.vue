<script setup lang="ts">
useSeoMeta({
  title: 'AI-generated cover letter | AutoCover',
});
</script>

<template>
  <div class="relative w-full px-8">
    <div class="absolute bottom-1/2 flex translate-y-1/2 flex-col items-start gap-16">
      <div>
        <h2 class="landing-title landing-animation w-full opacity-0 lg:max-w-screen-md">
          You virtual assistant to create your cover letter
        </h2>
      </div>
      <button
        class="button button-primary landing-animation landing-animation-delay-cta opacity-0"
        @click="navigateTo('/generate')"
      >
        Create my cover letter
      </button>
    </div>
  </div>
</template>

<style scoped>
.landing-title {
  @apply text-4xl text-white lg:text-6xl;
}

.landing-animation {
  @apply animate-fadeTranslation;
  animation-fill-mode: forwards;
}

.landing-animation-delay-cta {
  animation-delay: 300ms;
}
</style>
