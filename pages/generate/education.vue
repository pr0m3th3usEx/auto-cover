<template>
  <NuxtLayout name="generation" title="Education" subtitle="Test">
    <div class="flex w-full max-w-6xl flex-col items-start gap-8">
      <div class="grid w-full grid-cols-2 gap-3">
        <input name="school_name" placeholder="School name" class="text-input w-full !max-w-full" />
        <input name="diploma" placeholder="Diploma" class="text-input w-full !max-w-full" />
        <input name="school_type" placeholder="School type" class="text-input !max-w-full" />
        <input name="degree" placeholder="Degree" class="text-input !max-w-full" />
        <input name="postal_code" placeholder="Graduation date" class="text-input !max-w-full" />
        <input name="skills_related" placeholder="Skills related" class="text-input !max-w-full" />
      </div>

      <button class="button button-outline flex items-center gap-1">
        <Icon name="uil:plus" />
        Add another formation
      </button>

      <BottomBar previous next @next="onNext" @previous="onPrev" />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const onNext = () => console.log('NEXT');
const onPrev = () => console.log('PREVIOUS');
</script>
