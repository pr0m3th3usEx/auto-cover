<template>
  <NuxtLayout name="generation" title="Skills" subtitle="Test">
    <div class="flex w-full max-w-6xl flex-col items-start gap-8">
      <div class="flex w-full gap-1">
        <input name="Test" placeholder="Enter 1 skill then press Enter" class="text-input" />
        <button class="button button-primary">Ajouter</button>
      </div>

      <!-- Ajouter le listing des compétences ajoutées -->

      <BottomBar previous next @next="onNext" @previous="onPrev" />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const onNext = () => console.log('NEXT');
const onPrev = () => console.log('PREVIOUS');
</script>
