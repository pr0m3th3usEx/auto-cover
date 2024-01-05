<template>
  <div
    class="flex h-screen w-screen flex-col bg-smoky-black bg-gradient-to-bl from-keppel from-0.45 to-smoky-black-transparent to-101.58"
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
  @apply focus:border-dark-green focus:bg-dark-green;
}

.button-primary:disabled {
  @apply opacity-50;
  @apply hover:border-pine-green hover:bg-pine-green;
}

.button-outline {
  @apply hover:bg-pastel-blue-alpha;
}

.button-outline:disabled {
  @apply opacity-50;
  @apply hover:bg-transparent;
}
</style>
