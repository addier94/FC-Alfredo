<template>
  <div class="container ml-auto mr-auto mt-12 pt-12 px-4 lg:flex lg:justify-between">
    <main>
      <!-- blog post -->
      <div class="lg:grid lg:grid-cols-2 lg:gap-4 lg:mr-5">
        <blog-card />
        <blog-card />
        <blog-card />
        <blog-card />
      </div>
      <!-- paginate -->
      <ul class="pagination mt-12 flex text-blackc font-bold">
        <a class="mr-2" href="#"><font-awesome-icon size="lg" :icon="[ 'fas', 'angle-left' ]" /></a>
        <a class="mr-2 paginate-active" href="#">1</a>
        <a class="mr-2" href="#">2</a>
        <a class="mr-2" href="#">3</a>
        <a href="#"><font-awesome-icon size="lg" :icon="[ 'fas', 'angle-right' ]" /></a>
      </ul>
    </main>
    <aside class="lg:w-64 sm:grid sm:grid-cols-2 lg:grid-cols-none">
      <div class="flex relative mt-12 lg:mt-0  sm:h-12">
        <input placeholder="Search ..." class="w-full bg-info p-4 rounded" type="text">
        <div class="absolute right-0 h-full flex items-center">
          <div class="search bg-primary p-2 mr-2 rounded text-white cursor-pointer">
            <font-awesome-icon size="lg" :icon="[ 'fas', 'search' ]" />
          </div>
        </div>
      </div>
      <div class="categories mt-10 sm:mt-12 sm:justify-self-end lg:justify-self-start">
        <h2>Categorias</h2>
        <div class="mt-4">
          <a class="transition duration-100 hover:text-gray-500 transform hover:-translate-y-1 hover:scale-100" href="#">Business <span>(3)</span></a>
          <a class="transition duration-100 hover:text-gray-500 transform hover:-translate-y-1 hover:scale-100" href="#">Ideas Y Tips <span>(283)</span></a>
          <a class="transition duration-100 hover:text-gray-500 transform hover:-translate-y-1 hover:scale-100" href="#">Languages <span>(4)</span></a>
          <a class="transition duration-100 hover:text-gray-500 transform hover:-translate-y-1 hover:scale-100" href="#">Learning <span>(8)</span></a>
          <a class="transition duration-100 hover:text-gray-500 transform hover:-translate-y-1 hover:scale-100" href="#">Smart <span>(9)</span></a>
          <a class="transition duration-100 hover:text-gray-500 transform hover:-translate-y-1 hover:scale-100" href="#">Technology <span>(10)</span></a>
        </div>
      </div>
      <div class="featured mt-10">
        <h2>Posts Destacados</h2>
        <div class="mt-4">
          <a class="transition duration-100 hover:text-gray-500 transform hover:-translate-y-1 hover:scale-100" href="#">lorem </a>
          <a class="transition duration-100 hover:text-gray-500 transform hover:-translate-y-1 hover:scale-100" href="#">Ideas Y Tips </a>
          <a class="transition duration-100 hover:text-gray-500 transform hover:-translate-y-1 hover:scale-100" href="#">Languages </a>
          <a class="transition duration-100 hover:text-gray-500 transform hover:-translate-y-1 hover:scale-100" href="#">Learning </a>
          <a class="transition duration-100 hover:text-gray-500 transform hover:-translate-y-1 hover:scale-100" href="#">Smart </a>
          <a class="transition duration-100 hover:text-gray-500 transform hover:-translate-y-1 hover:scale-100" href="#">Technology </a>
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
    </aside>
  </div>
</template>

<script>
import BlogCard from '@/components/shared/BlogCard'
export default {
  components:{
    BlogCard
  }
}
</script>

<style lang="scss" scoped>
.pagination a{
  @apply py-2 px-4 bg-info rounded;
  transition: all .3s;
  &:hover{
    @apply bg-primary text-white;
  }
  &.paginate-active{
    @apply bg-primary text-white;
  }
}
.search{
  transition: .3s all;
  &:hover{
    @apply bg-black text-primary;
  }
}

.categories, .featured {
  h2{
    @apply border-l-4 font-semibold pl-3 text-base uppercase text-primary;
  }
  a{
    @apply block font-semibold leading-loose ml-5 relative;
    span{
      @apply text-gray-500;
    }
    &::before{
      content: '';
      @apply absolute block bg-secondary rounded-full w-2 h-2;
      top: 13px;
      left: -21px;
    }
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