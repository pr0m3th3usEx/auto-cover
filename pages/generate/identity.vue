<template>
  <div>
    <Stepper :steps="steps" :current-step="steps[stepIndex]" :current-step-idx="stepIndex" />
  </div>
</template>

<script lang="ts" setup>
import type { StepperStep } from '~/types/stepper';

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

const stepIndex = 0;
</script>

<style></style>
~/types/stepper