<template>
  <div class="flex w-full flex-col gap-8">
    <div v-for="(item, index) in items" :key="index" class="flex w-full flex-col gap-4">
      <div class="flex items-center gap-2">
        <div
          v-if="items.length > 1"
          class="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white"
          @click="() => removeItem(index)"
        >
          <Icon name="uil:multiply" class="absolute" />
        </div>
        <p class="text-lg text-white">{{ itemName }} {{ index + 1 }}</p>
      </div>
      <component :is="props.component" :data="item" @change="(data: any) => setItem(index, data)"></component>
    </div>

    <button class="button button-outline flex items-center gap-1" @click="addItem">
      <Icon name="uil:plus" />
      {{ props.addBtnText }}
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  component: Object, // Repeatable component
  context: Object,
  addBtnText: String,
  itemName: String,
});

/* Force rerender when mutations of elements  */

const items = computed(() => (props.context?._value ?? []) as any[]);

/* Utility functions */

const addItem = () => {
  if (props.context) {
    props.context.node.input([...((props.context._value as []) ?? []), {}]);
  }
};

const removeItem = (index: number) => {
  if (props.context && (props.context._value as []).length > index) {
    props.context.node.input(((props.context._value as []) ?? []).filter((_, i) => i !== index));
  }
};

const setItem = (index: number, data: any) => {
  if (props.context && (props.context._value as []).length > index) {
    const copy = (props.context._value as any[]).slice();
    copy[index] = data;
    props.context.node.input(copy);
  }
};
</script>
