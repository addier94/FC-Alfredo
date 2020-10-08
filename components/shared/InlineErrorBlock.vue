<template>
  <div class="error-block">
    <fa class="text-5xl text-red-600" :icon="['fas', 'exclamation-triangle']"></fa>
    <h2>Titulo de error</h2>
  </div>
</template>

<style lang="scss" scoped>
  .error-block {
    @apply flex flex-col items-center p-8;
    h2 {
      @apply text-center text-2xl;
    }
  }
</style>