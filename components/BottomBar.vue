<template>
  <div class="flex w-full justify-between">
    <button v-if="previous" class="button button-secondary" @click="$emit('previous')">
      {{ prevBtnText ?? 'Previous' }}
    </button>
    <button v-if="next" class="button button-primary" @click="$emit('next')">
      {{ nextBtnText ?? 'Next' }}
    </button>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  previous?: boolean;
  next?: boolean;
  prevBtnText?: string;
  nextBtnText?: string;
}>();

defineEmits(['previous', 'next']);
</script>
