<template>
  <div>
    <ul class="flex flex-row justify-center">
      <StepperStepItem id="test" name="Who are you ?" :first="true" :index="1" :active="true" />
      <StepperStepItem id="test" name="Skills" :index="2" :active="true" />
      <StepperStepItem id="test" name="Education" :index="3" />
      <StepperStepItem id="test" name="Work experiences / Projects" :index="4" />
      <StepperStepItem id="test" name="Job offer" :index="5" />
      <StepperStepItem id="test" name="Interest" :index="6" />
      <StepperStepItem id="test" name="Cover letter generation" :index="7" :last="true" />
    </ul>
  </div>
</template>
