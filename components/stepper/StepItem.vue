<template>
  <li class="flex w-36 list-none flex-col items-center justify-start text-center">
    <div class="progress" :class="progressClassNames">
      <p class="z-10">{{ index }}</p>
      <Icon name="uil:check" class="check z-10 mx-8 my-0 !hidden" />
    </div>
    <p class="text-lg" :class="active ? 'text-keppel' : 'text-white'">{{ name }}</p>
  </li>
</template>

<script lang="ts" setup>
const props = defineProps<{
  id: string;
  name: string;
  index: number;
  active?: boolean;
  first?: boolean;
  isLoading?: string;
}>();

const progressClassNames = ref({
  first: props.first ?? false,
  active: props.active ?? false,
});
</script>

<style scoped>
.progress {
  @apply mx-0 my-3 h-9 w-9 rounded-full bg-white text-lg;
  @apply relative grid cursor-pointer place-items-center;
}

.progress::after {
  content: ' ';
  position: absolute;
  width: 109px;
  height: 6px;
  background: white;
  z-index: 1;
  right: 36px;
}

.first::after {
  width: 0;
  height: 0;
}

.active {
  @apply bg-keppel;
  /* @apply  */
}

.active::after {
  @apply bg-keppel;
}

.active p {
  @apply !hidden text-white;
}

.active .check {
  @apply m-0 !flex text-xl text-white;
}
</style>
