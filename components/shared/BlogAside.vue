<template>
  <div class="lg:w-64 sm:grid sm:grid-cols-2 lg:grid-cols-none">
    <div class="flex relative mt-12 lg:mt-0  sm:h-12">
      <input placeholder="Search ..." class="w-full bg-info p-4 pr-12 rounded" type="text">
      <div class="absolute right-0 h-full flex items-center">
        <div class="search bg-primary p-2 mr-1 rounded text-white cursor-pointer">
          <font-awesome-icon size="lg" :icon="[ 'fas', 'search' ]" />
        </div>
      </div>
    </div>
    <div class="categories mt-10 sm:mt-12 sm:justify-self-end lg:justify-self-start">
      <h2 class="border-l-4 font-semibold pl-3 text-base uppercase text-primary">Categorias</h2>
      <div class="mt-4">
        <a class="block font-semibold leading-loose ml-5 relative transition duration-100 hover:text-gray-500 transform hover:-translate-y-1 hover:scale-100" href="#">Business <span class="text-gray-500">(3)</span></a>
        <a class="block font-semibold leading-loose ml-5 relative transition duration-100 hover:text-gray-500 transform hover:-translate-y-1 hover:scale-100" href="#">Ideas Y Tips <span class="text-gray-500">(283)</span></a>
        <a class="block font-semibold leading-loose ml-5 relative transition duration-100 hover:text-gray-500 transform hover:-translate-y-1 hover:scale-100" href="#">Languages <span class="text-gray-500">(4)</span></a>
        <a class="block font-semibold leading-loose ml-5 relative transition duration-100 hover:text-gray-500 transform hover:-translate-y-1 hover:scale-100" href="#">Learning <span class="text-gray-500">(8)</span></a>
        <a class="block font-semibold leading-loose ml-5 relative transition duration-100 hover:text-gray-500 transform hover:-translate-y-1 hover:scale-100" href="#">Smart <span class="text-gray-500">(9)</span></a>
        <a class="block font-semibold leading-loose ml-5 relative transition duration-100 hover:text-gray-500 transform hover:-translate-y-1 hover:scale-100" href="#">Technology <span class="text-gray-500">(10)</span></a>
      </div>
    </div>
    <div class="featured mt-10">
      <h2 class="border-l-4 font-semibold pl-3 text-base uppercase text-primary">Posts Destacados</h2>
      <div class="mt-4">
        <a class="block font-semibold leading-loose ml-5 relative transition duration-100 hover:text-gray-500 transform hover:-translate-y-1 hover:scale-100" href="#">lorem </a>
        <a class="block font-semibold leading-loose ml-5 relative transition duration-100 hover:text-gray-500 transform hover:-translate-y-1 hover:scale-100" href="#">Ideas Y Tips </a>
        <a class="block font-semibold leading-loose ml-5 relative transition duration-100 hover:text-gray-500 transform hover:-translate-y-1 hover:scale-100" href="#">Languages </a>
        <a class="block font-semibold leading-loose ml-5 relative transition duration-100 hover:text-gray-500 transform hover:-translate-y-1 hover:scale-100" href="#">Learning </a>
        <a class="block font-semibold leading-loose ml-5 relative transition duration-100 hover:text-gray-500 transform hover:-translate-y-1 hover:scale-100" href="#">Smart </a>
        <a class="block font-semibold leading-loose ml-5 relative transition duration-100 hover:text-gray-500 transform hover:-translate-y-1 hover:scale-100" href="#">Technology </a>
      </div>
    </div>
    <div class="mt-10 md:justify-self-end lg:justify-self-start">
      <h2 class="border-l-4 font-semibold pl-3 text-base uppercase text-primary">Posts Destacados</h2>
      <div class="tags mt-4">
        <a href="/t/webdev" class="tag"><span class="">#</span>webdev</a>
        <a href="/t/javascript" class="tag"><span class="">#</span>javascript</a>
        <a href="/t/css" class="tag"><span class="">#</span>css</a>
        <a href="/t/html" class="tag"><span class="">#</span>html</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search{
  transition: .3s all;
  &:hover{
    @apply bg-black text-primary;
  }
}
.categories a, .featured a{
  &::before{
    content: '';
    @apply absolute block bg-secondary rounded-full w-2 h-2;
    top: 13px;
    left: -21px;
  }
}
.tags {
  display: flex;
  flex-wrap: wrap;
  .tag {
    @apply text-sm font-semibold leading-none rounded;
    padding: 0.5rem 0.5rem;
    margin: 0 0.5rem 0.5rem 0;
    box-shadow: $small-shadow;
    &:hover {
      background: $hovered-surface-color;
    }
    &:active {
      background: transparent;
      box-shadow: $small-inner-shadow;
    }
  }
}
</style>