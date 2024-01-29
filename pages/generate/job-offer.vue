<template>
  <NuxtLayout name="generation" title="Job offer" subtitle="Test" :step-index="4">
    <div class="flex w-full max-w-6xl flex-col items-start gap-8">
      <FormKit
        id="form"
        ref="formRef"
        type="form"
        form-class="grid w-full grid-cols-2 gap-3"
        :actions="false"
        :incomplete-message="false"
        @submit="submitHandler"
      >
        <FormKit
          type="text"
          name="companyName"
          placeholder="Company (Required)"
          validation="required"
          :validation-messages="{
            required: 'Fill the company name',
          }"
          input-class="text-input w-full !max-w-full"
        />
        <FormKit
          type="text"
          name="jobTitle"
          placeholder="Job Title (Required)"
          validation="required"
          :validation-messages="{
            required: 'Fill the job title (Ex: Lead Software Engineer)',
          }"
          input-class="text-input w-full !max-w-full"
        />
        <FormKit
          type="textarea"
          name="companyDescription"
          placeholder="Company description (Required)"
          validation="required"
          :validation-messages="{
            required: 'Paste the company description',
          }"
          outer-class="col-span-2 !max-w-full"
          input-class="text-input !max-w-full"
          rows="5"
        />

        <FormKit
          type="textarea"
          name="jobDescription"
          placeholder="Job description (Required)"
          validation="required"
          :validation-messages="{
            required: 'Paste the job description',
          }"
          outer-class="col-span-2 !max-w-full"
          input-class="text-input !max-w-full"
          rows="5"
        />

        <FormKit
          type="textarea"
          name="requirements"
          placeholder="Minimal and preferred requirements for the position (Required)"
          validation="required"
          :validation-messages="{
            required: 'Paste the requirements for this position',
          }"
          outer-class="col-span-2 !max-w-full"
          input-class="text-input !max-w-full"
          rows="5"
        />
      </FormKit>

      <BottomBar previous next @next="onNext" @previous="onPrev" />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { JobOfferForm } from '~/types/doc-gen';

const formRef = ref<HTMLFormElement>();

const onNext = () => {
  const node = formRef.value?.node;

  node?.submit();
};
const onPrev = () => navigateTo('/generate/experiences-and-projects');

const submitHandler = (data: JobOfferForm) => {
  console.log(data);
  navigateTo('/generate/job-interest');
};
</script>
