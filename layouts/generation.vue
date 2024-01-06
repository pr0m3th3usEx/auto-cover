<template>
  <div class="mx-8 flex flex-col items-center gap-12">
    <Stepper :steps="steps" :current-step="steps[stepIndex]" :current-step-idx="stepIndex" />

    <div class="flex flex-col items-center gap-3">
      <h2 class="text-2xl font-bold text-white">{{ title }}</h2>
      <p class="text-lg font-light text-gray-300">{{ subtitle }}</p>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
}>();

const steps = computed<StepperStep[]>(() => [
  {
    id: 'identity',
    name: 'Who are you ?',
  },
  {
    id: 'skills',
    name: 'Your skills',
  },
  {
    id: 'education',
    name: 'Education',
  },
  {
    id: 'experiences-and-projects',
    name: 'Work experience & Projects',
  },
  {
    id: 'job-offer',
    name: 'Job offer',
  },
  {
    id: 'job-interest',
    name: 'Interest',
  },
]);

const stepIndex = ref(0);
</script>
