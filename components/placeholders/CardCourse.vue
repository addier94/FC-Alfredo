<template>
  <div class="flex flex-wrap items-start">
    <content-placeholders
      v-for="p in 6"
      :key="p"
      rounded
      class="w-full mx-4 mb-6 mt-2 sm-w-1-2 md-w-1-3 lg-w-1-4"
      >
      <content-placeholders-img style="height:13rem" />
      <content-placeholders-heading />
      <content-placeholders-text :lines="1" />
    </content-placeholders>
  </div>
</template>