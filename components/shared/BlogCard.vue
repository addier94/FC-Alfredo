<template>
  <div class="p-3 container-post-card">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <div class="">
          <img src="@/assets/images/frontend/alfredo.jpeg" alt="" class="w-10 h-10 rounded-full">
        </div>
        <div class="leading-tight ml-2 text-gray-700">
          <p>
            Madza
          </p>
          <p><time datetime="2020-10-08T10:56:57Z" title="jueves, 8 de octubre de 2020 6:56:57 a.&nbsp;m.">Oct  8</time><span class="" data-seconds="1602154617"></span></p>
        </div>
      </div>
      <div>
        <a href="#" class="category">
          <font-awesome-icon :icon="[ 'fas', 'calendar-alt' ]" />
          Categoria
        </a>
      </div>
    </div>

    <div class="my-1">
      <h2 class="font-bold text-2xl leading-none">
        <a class="title-tags" href="#" id="">
          5 Awesome 3D Globe Projects To Inspire You 

        </a>
      </h2>
      <div class="tags mt-1">
        <a href="/t/webdev" class="tag"><span class="">#</span>webdev</a>
        <a href="/t/javascript" class="tag"><span class="">#</span>javascript</a>
        <a href="/t/css" class="tag"><span class="">#</span>css</a>
        <a href="/t/html" class="tag"><span class="">#</span>html</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.category:hover{
  color: $primary;
}
.title-tags:hover{
  color: $primary;
}
.container-post-card{
  box-shadow: $shadow;
    &:hover {
    box-shadow: $small-shadow;
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
}
</style>