<template>
  <NuxtLayout name="generation" title="Work experience & projects" subtitle="Test" :step-index="3">
    <div class="flex w-full max-w-6xl flex-col items-start gap-8">
      <FormKit
        id="form"
        ref="formRef"
        type="form"
        form-class="w-full"
        :actions="false"
        :incomplete-message="false"
        @submit="submitHandler"
      >
        <FormKit name="experiences" :type="experienceForm" outer-class="w-full" input-class="!w-full" :value="[{}]" />
      </FormKit>

      <BottomBar previous next @next="onNext" @previous="onPrev" />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import ExperienceInput from '~/components/inputs/ExperienceInput.vue';
import RepeatedForm from '~/components/form/RepeatedForm.vue';

const formRef = ref<HTMLFormElement>();

const experienceForm = createInput({
  type: 'input',
  $cmp: RepeatedForm,
  props: {
    component: ExperienceInput,
    context: '$node.context',
    addBtnText: 'Add more',
    itemName: 'Experience',
  },
  features: [],
});

const onNext = () => {
  const node = formRef.value?.node;
  node?.submit();
};

const onPrev = () => navigateTo('/generate/education');

const submitHandler = (data: ExperienceForm) => {
  console.log(data);

  navigateTo({ path: '/generate/job-offer' });
};
</script>
