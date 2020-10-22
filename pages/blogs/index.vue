<template>
<div class="mt-12">
  <h1 class="mt-12 ml-4 mb-8 text-3xl sm:text-5xl font-semibold capitalize inline-block leading-none border-solid border-b-2 border-primary">Todos los posts</h1>
  <!-- <div class="max-w-screen-xl ml-auto mr-auto px-4 lg:flex lg:justify-between"> -->
  <div class="max-w-screen-xl ml-auto mr-auto px-4 lg:relative">
    <main class="lg:w-9/12">
      <template>
        <aside-blog :items="6" />
      </template>
      <template>
        <inline-error-block />
      </template>
      <!-- blog post -->
      <div class="lg:grid lg:grid-cols-2 lg:gap-4 lg:mr-5">
        <blog-card />
        <blog-card />
        <blog-card />
        <blog-card />
        <blog-card />
        <blog-card />
      </div>
      <template>
        <paginate />
      </template>
    </main>
    <template>
      <blog-aside />
    </template>
  </div>
</div>
</template>

<script>
import BlogCard from '@/components/shared/BlogCard'
import BlogAside from '@/components/shared/BlogAside'
import Paginate from '@/components/shared/Paginate'
import AsideBlog from '@/components/placeholders/AsideBlog'
export default {
  components:{
    BlogCard, BlogAside, Paginate, AsideBlog
  }
}
</script>

<style lang="scss" scoped>
</style>