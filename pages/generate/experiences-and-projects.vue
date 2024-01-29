<template>
  <NuxtLayout name="generation" title="Work experience & projects" subtitle="Test" :step-index="3">
    <div class="flex w-full max-w-6xl flex-col items-start gap-8">
      <div class="flex w-full flex-col gap-3">
        <div class="grid w-full grid-cols-2 gap-3">
          <div class="col-span-2 flex flex-row gap-8">
            <div class="col-span-2 flex gap-1">
              <input type="radio" name="exp_type" />
              <label for="exp_type" class="text-white">Work experience</label>
            </div>
            <div class="col-span-2 flex gap-1">
              <input type="radio" name="exp_type" />
              <label for="exp_type" class="text-white">Project</label>
            </div>
          </div>
          <input name="job_title" placeholder="Job title" class="text-input w-full !max-w-full" />
          <input name="contract_type" placeholder="Contract type" class="text-input !max-w-full" />
          <input name="company" placeholder="Company" class="text-input !max-w-full" />
          <div class="grid grid-cols-2 gap-3">
            <input name="start_date" placeholder="Start date" class="text-input w-full !max-w-full" />
            <input name="end_date" placeholder="End date" class="text-input !max-w-full" />
          </div>
        </div>
        <input name="skills_related" placeholder="Skills related" class="text-input !max-w-full" />
      </div>
      <button class="button button-outline flex items-center gap-1">
        <Icon name="uil:plus" />
        Add an experience / project
      </button>

      <BottomBar previous next @next="onNext" @previous="onPrev" />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const onNext = () => console.log('NEXT');
const onPrev = () => navigateTo('/generate/education');
</script>
