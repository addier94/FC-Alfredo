<template>
  <ul class="pagination mt-12 flex text-blackc font-bold">
    <a class="mr-2 py-2 px-4 bg-info rounded" href="#"><font-awesome-icon size="lg" :icon="[ 'fas', 'angle-left' ]" /></a>
    <a class="mr-2 py-2 px-4 bg-info rounded paginate-active" href="#">1</a>
    <a class="mr-2 py-2 px-4 bg-info rounded" href="#">2</a>
    <a class="mr-2 py-2 px-4 bg-info rounded" href="#">3</a>
    <a class="py-2 px-4 bg-info rounded" href="#"><font-awesome-icon size="lg" :icon="[ 'fas', 'angle-right' ]" /></a>
  </ul>
</template>

<style lang="scss" scoped>
.pagination a{
  transition: all .3s;
  &:hover{
    @apply bg-primary text-white;
  }
  &.paginate-active{
    @apply bg-primary text-white;
  }
}
</style>