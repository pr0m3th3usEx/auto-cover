<template>
  <NuxtLayout name="generation" title="Interest" subtitle="Test" :step-index="5">
    <FormKit
      id="form"
      ref="formRef"
      type="form"
      :actions="false"
      form-class="flex w-full max-w-6xl flex-col items-start gap-8"
      :incomplete-message="false"
      @submit="submitHandler"
    >
      <FormKit
        type="textarea"
        name="interests"
        placeholder="Why do you want to work for this position ?"
        validation="required"
        :validation-messages="{
          required: 'You must explain why you are attracted by this position',
        }"
        outer-class="col-span-2 !w-full"
        input-class="text-input !max-w-full"
        rows="5"
      />

      <BottomBar previous next next-btn-text="Generate my cover letter" @next="onNext" @previous="onPrev" />
    </FormKit>
  </NuxtLayout>
</template>

<script setup lang="ts">
const formRef = ref<HTMLFormElement>();

const onNext = () => {
  const node = formRef.value?.node;

  node?.submit();
};
const onPrev = () => navigateTo('/generate/job-offer');

const submitHandler = (data: JobInterestForm) => {
  console.log(data);
};
</script>
