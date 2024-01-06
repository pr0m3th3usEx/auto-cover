<template>
  <div></div>
</template>

<script lang="ts" setup>
import { type GlobalStepperProps, type StepperStep } from '@autocover/components/stepper';

defineProps<
  Omit<GlobalStepperProps, 'currentStep'> & {
    currentStep?: StepperStep;
    currentStepIdx: number;
  }
>();
</script>

<style></style>
