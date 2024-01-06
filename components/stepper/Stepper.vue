<template>
  <ul class="flex flex-row justify-center">
    <StepperStepItem
      v-for="(step, index) in steps"
      :id="step.id"
      :key="step.id"
      :index="index + 1"
      :name="step.name"
      :first="index === 0"
      :active="index < currentStepIdx"
    />
  </ul>
</template>

<script lang="ts" setup>
import type { GlobalStepperProps, StepperStep } from '~/types/stepper';

defineProps<
  Omit<GlobalStepperProps, 'currentStep'> & {
    currentStep?: StepperStep;
    currentStepIdx: number;
  }
>();
</script>

<style></style>
