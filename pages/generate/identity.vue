<template>
  <NuxtLayout name="generation" title="Who are you ?" subtitle="Test" :step-index="0">
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
        <FormKit type="text" name="firstName" placeholder="First name" input-class="text-input w-full !max-w-full" />
        <FormKit type="text" name="lastName" placeholder="Last name" input-class="text-input w-full !max-w-full" />
        <FormKit
          type="text"
          placeholder="E-mail (Required)"
          validation="required|email"
          :validation-messages="{
            required: 'E-mail address required.',
          }"
          input-class="text-input w-full !max-w-full"
        />
        <FormKit type="text" name="phone" placeholder="Phone number" input-class="text-input w-full !max-w-full" />
        <FormKit type="text" name="city" placeholder="City" input-class="text-input w-full !max-w-full" />
        <FormKit type="text" name="postalCode" placeholder="Postal code" input-class="text-input w-full !max-w-full" />
      </FormKit>
      <BottomBar next @next="onNext" />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { IdentityForm } from '~/types/doc-gen';

const formRef = ref<HTMLFormElement>();
const onNext = () => {
  const node = formRef.value?.node;

  node?.submit();
};

const submitHandler = (data: IdentityForm) => {
  console.log(data);

  navigateTo({ path: '/generate/skills' });
};
</script>
