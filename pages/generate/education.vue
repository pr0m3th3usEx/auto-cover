<template>
  <NuxtLayout name="generation" title="Education" subtitle="Test" :step-index="2">
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
        <FormKit name="education" :type="educationForm" outer-class="w-full" input-class="!w-full" :value="[{}]" />
      </FormKit>

      <BottomBar previous next @next="onNext" @previous="onPrev" />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import EducationInput from '~/components/inputs/EducationInput.vue';
import RepeatedForm from '~/components/form/RepeatedForm.vue';

const educationForm = createInput({
  type: 'input',
  $cmp: RepeatedForm,
  props: {
    component: EducationInput,
    context: '$node.context',
    addBtnText: 'Add more',
    itemName: 'Training',
  },
  features: [],
});

const formRef = ref<HTMLFormElement>();

const onNext = () => {
  const node = formRef.value?.node;
  node?.submit();
};

const onPrev = () => navigateTo({ path: '/generate/skills' });

const submitHandler = (data: EducationForm) => {
  console.log(data);

  navigateTo({ path: '/generate/experiences-and-projects' });
};
</script>
