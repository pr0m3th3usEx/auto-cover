<template>
  <NuxtLayout name="generation" title="Job offer" subtitle="Test">
    <div class="flex w-full max-w-6xl flex-col items-start gap-8">
      <div class="grid w-full grid-cols-2 gap-3">
        <input name="company_name" placeholder="Company" class="text-input w-full !max-w-full" />
        <input name="job_title" placeholder="Job Title" class="text-input w-full !max-w-full" />
        <textarea
          name="company_description"
          placeholder="Company description"
          class="text-input col-span-2 !max-w-full"
          rows="5"
        />
        <textarea
          name="job_description"
          placeholder="Job description"
          class="text-input col-span-2 !max-w-full"
          rows="5"
        />
        <textarea
          name="qualifications"
          placeholder="Minimal and preferred requirements for the position"
          class="text-input col-span-2 !max-w-full"
          rows="5"
        />
      </div>

      <BottomBar previous next @next="onNext" @previous="onPrev" />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const onNext = () => console.log('NEXT');
const onPrev = () => console.log('PREVIOUS');
</script>
