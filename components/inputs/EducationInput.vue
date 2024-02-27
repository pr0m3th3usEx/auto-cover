<template>
  <div class="grid w-full grid-cols-2 gap-3">
    <input
      placeholder="School name"
      class="text-input w-full !max-w-full"
      @input="(event) => handleChange('schoolName', (event.target as HTMLInputElement).value)"
    />
    <input
      placeholder="Diploma"
      class="text-input w-full !max-w-full"
      @input="(event) => handleChange('diploma', (event.target as HTMLInputElement).value)"
    />
    <input
      placeholder="School Type"
      class="text-input !max-w-full"
      :value="props.data.schoolType"
      @input="(event) => handleChange('schoolType', (event.target as HTMLInputElement).value)"
    />
    <input
      placeholder="Degree"
      class="text-input !max-w-full"
      @input="(event) => handleChange('degree', (event.target as HTMLInputElement).value)"
    />
    <input
      placeholder="Graduation date"
      class="text-input !max-w-full"
      @input="(event) => handleChange('graduationDate', (event.target as HTMLInputElement).value)"
    />
    <Multiselect
      mode="tags"
      :options="options"
      :searchable="true"
      class="text-input !max-w-full !border-0 !px-0 !py-2.5"
      placeholder="Skills related"
      :classes="$multiselectClasses as Record<string, string>"
      @change="(value) => handleChange('skillsRelated', value)"
    />
  </div>
</template>

<script setup lang="ts">
import Multiselect from '@vueform/multiselect';
const emit = defineEmits(['change']);
const props = defineProps<{ data: Partial<Training> }>();

const { $multiselectClasses } = useNuxtApp();
const options = computed(() => ['Test', 'Test1', 'Test2']);

const handleChange = (fieldName: TrainingKeys, value: any) => {
  emit('change', {
    ...props.data,
    [fieldName]: value,
  });
};
</script>
