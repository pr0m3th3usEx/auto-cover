<template>
  <NuxtLayout name="generation" title="Who are you ?" subtitle="Test">
    <div class="flex w-full max-w-6xl flex-col items-start gap-8">
      <div class="grid w-full grid-cols-2 gap-3">
        <input name="first_name" placeholder="First name" class="text-input w-full !max-w-full" />
        <input name="last_name" placeholder="Last name" class="text-input w-full !max-w-full" />
        <input name="email" placeholder="E-mail address" class="text-input !max-w-full" />
        <input name="phone" placeholder="Phone number" class="text-input !max-w-full" />
        <input name="city" placeholder="City" class="text-input !max-w-full" />
        <input name="postal_code" placeholder="Postal code" class="text-input !max-w-full" />
      </div>

      <BottomBar next @next="onNext" @previous="onPrev" />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const onNext = () => console.log('NEXT');
const onPrev = () => console.log('PREVIOUS');
</script>
