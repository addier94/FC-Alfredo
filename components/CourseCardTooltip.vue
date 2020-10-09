<template>
    <div class="card-content bg-white">
      <div class="content__head">
        <!-- TODO: Course Title -->
        <h4 class="title">Curso de javascript de cero a experto</h4>
        <!-- TODO: Course Subtitle -->
        <p class="mt-2 mb-1 text-green-700">Updated <strong class="font-bold">August 2020</strong></p>
      </div>

      <!-- TODO: Course Description -->
      <div class="description__course leading-tight">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus adipisci vitae itaque molestias facere, ut natus.
      </div>
      <div class="content__description">
        <ul class="mt-2">
          <!-- TODO: Iterate wsl -->
          <li class="flex items-center leading-none mt-2 text-gray-700">
            <fa class="mr-4" :icon="['fas', 'check']"></fa>
            wsl description of cloud computing in amazon web services
          </li>
          <li class="flex items-center leading-none mt-2 text-gray-700">
            <fa class="mr-4" :icon="['fas', 'check']"></fa>
            wsl description of cloud computing
          </li>
          <li class="flex items-center leading-none mt-2 text-gray-700">
            <fa class="mr-4" :icon="['fas', 'check']"></fa>
            wsl description of cloud computing in amazon web services
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped lang="scss">
  .card-content {
    max-width: 350px;
    padding: 1rem;
    box-shadow: $small-shadow;
    .title {
      @apply font-bold text-2xl leading-none;
    }
  }
</style>