<template>
  <div class="flex w-full flex-col gap-3">
    <div class="grid w-full grid-cols-2 gap-3">
      <div class="col-span-2 flex flex-row gap-8">
        <div class="col-span-2 flex gap-1">
          <input
            type="radio"
            name="expType"
            :checked="props.data.type === 'work'"
            @change="() => handleChange('type', 'work')"
          />
          <label for="exp_type" class="text-white">Work experience</label>
        </div>
        <div class="col-span-2 flex gap-1">
          <input
            type="radio"
            name="expType"
            :checked="props.data.type === 'project'"
            @change="() => handleChange('type', 'project')"
          />
          <label for="exp_type" class="text-white">Project</label>
        </div>
      </div>
      <template v-if="props.data.type === 'work'">
        <input
          placeholder="Job title"
          class="text-input w-full !max-w-full"
          :value="props.data.jobTitle"
          @change="(event) => handleChange('jobTitle', (event.target as HTMLInputElement).value)"
        />
        <input
          name="contract_type"
          placeholder="Contract type"
          class="text-input !max-w-full"
          :value="props.data.contractType"
          @change="(event) => handleChange('contractType', (event.target as HTMLInputElement).value)"
        />
        <input
          name="company"
          placeholder="Company"
          class="text-input !max-w-full"
          :value="props.data.companyName"
          @change="(event) => handleChange('companyName', (event.target as HTMLInputElement).value)"
        />
        <div class="grid grid-cols-2 gap-3">
          <input
            name="start_date"
            placeholder="Start date"
            class="text-input w-full !max-w-full"
            :value="props.data.startDate"
            @change="(event) => handleChange('startDate', (event.target as HTMLInputElement).value)"
          />
          <input
            name="end_date"
            placeholder="End date"
            class="text-input !max-w-full"
            :value="props.data.endDate"
            @change="(event) => handleChange('endDate', (event.target as HTMLInputElement).value)"
          />
        </div>
      </template>

      <template v-if="props.data.type === 'project'">
        <input
          placeholder="Project name"
          class="text-input w-full !max-w-full"
          :value="props.data.projectName"
          @change="(event) => handleChange('projectName', (event.target as HTMLInputElement).value)"
        />
        <textarea
          placeholder="Detailed description"
          class="text-input col-span-2 w-full !max-w-full"
          rows="5"
          :value="props.data.projectDescription"
          @change="(event) => handleChange('projectDescription', (event.target as HTMLInputElement).value)"
        ></textarea>
      </template>
    </div>
    <Multiselect
      mode="tags"
      :options="options"
      :searchable="true"
      class="text-input !max-w-full !border-0 !px-0 !py-2.5"
      placeholder="Skills related"
      :classes="$multiselectClasses as Record<string, string>"
      :value="props.data.skillsRelated"
      @change="(value) => handleChange('skillsRelated', value)"
    />
  </div>
</template>

<script setup lang="ts">
import Multiselect from '@vueform/multiselect';

const emit = defineEmits(['change']);
const props = defineProps<{ data: Experience }>();

const { $multiselectClasses } = useNuxtApp();
const options = computed(() => ['Test', 'Test1', 'Test2']);

onMounted(() => {
  if (!props.data.type) handleChange('type', 'work');
});

const handleChange = (fieldName: ProjectKeys | WorkKeys, value: any) => {
  emit('change', {
    ...(fieldName === 'type' ? {} : props.data),
    [fieldName]: value,
  });
};
</script>
