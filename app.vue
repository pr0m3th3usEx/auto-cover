<template>
  <div
    class="flex min-h-screen w-screen flex-col bg-smoky-black bg-gradient-to-bl from-keppel from-0.45 to-smoky-black-transparent to-101.58 pb-12"
  >
    <Nav />
    <NuxtPage class="flex-grow" />
  </div>
</template>

<style>
* {
  @apply m-0 box-border p-0 font-red-hat;
}

.button {
  @apply rounded border px-6 py-4 text-white transition-colors;
}

.button-primary {
  @apply border-pine-green bg-pine-green;
  @apply hover:border-castleton-green hover:bg-castleton-green;
}

.button-primary:disabled {
  @apply opacity-50;
  @apply hover:border-pine-green hover:bg-pine-green;
}

.button-secondary {
  @apply border-blue-950 bg-blue-950;
  @apply hover:border-yankees-blue hover:bg-yankees-blue;
}

.button-secondary:disabled {
  @apply opacity-50;
  @apply hover:border-blue-950 hover:bg-blue-950;
}

.button-outline {
  @apply hover:bg-pastel-blue-alpha;
}

.button-outline:disabled {
  @apply opacity-50;
  @apply hover:bg-transparent;
}

.text-input {
  @apply !bg-yankees-blue !text-base !text-white !transition-colors;
  @apply w-full max-w-md rounded px-3 py-4;
}

.formkit-messages {
  @apply py-2;
}
.formkit-message {
  @apply text-red-400;
}
</style>

<style src="@vueform/multiselect/themes/default.css"></style>
