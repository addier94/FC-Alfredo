<template>
  <div class="error-block">
    <font-awesome-icon class="text-red-600" size="6x" :icon="[ 'fas', 'exclamation-triangle' ]" />
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