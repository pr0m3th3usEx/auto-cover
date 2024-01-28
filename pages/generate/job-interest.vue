<template>
  <NuxtLayout name="generation" title="Interest" subtitle="Test" :step-index="5">
    <div class="flex w-full max-w-6xl flex-col items-start gap-8">
      <textarea
        name="job_interests"
        placeholder="Why do you want to work for this company ?"
        class="text-input col-span-2 !max-w-full"
        rows="5"
      />

      <BottomBar next next-btn-text="Generate my cover letter" @next="onNext" />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const onNext = () => console.log('Generate my cover letter');
</script>
