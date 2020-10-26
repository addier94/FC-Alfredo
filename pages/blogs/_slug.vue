<template>
<div class="mt-24">
  <h1 class="ml-4 mb-8 text-2xl sm:text-5xl font-semibold leading-tight">A machine learning-powered cryptocurrency trading bot</h1>
  <!-- <div class="max-w-screen-xl ml-auto mr-auto px-4 lg:flex lg:justify-between"> -->
  <div class="max-w-screen-xl ml-auto mr-auto px-4 lg:relative">
    <main class="lg:w-9/12">
      <template>
        <content-placeholders rounded>
          <content-placeholders-heading />
          <content-placeholders-img />
          <content-placeholders-text :lines="24" />
        </content-placeholders>
      </template>
      <template>
        <inline-error-block />
      </template>
      <!-- blog post -->
      <div>
        <div class="flex items-center mb-10">
          <img class="w-10 h-10 rounded-full" src="@/assets/images/frontend/alfredo.jpeg">
          <p class="ml-2">alfredo fernandez</p>
          <p class="ml-6 text-gray-600"> 23 oct. 1 min read</p>
        </div>
        <p class="mb-4 text-xl lg:text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa distinctio voluptas neque eaque? Aliquam, dolores modi vitae quas distinctio asperiores! Quam quas dolor sit vero accusamus rerum facilis omnis eveniet.Nihil quisquam aspernatur maiores. Deserunt magnam non voluptas veniam aperiam magni amet, quos eveniet aliquid vel provident qui quo saepe enim dolor officiis tempora! Fugit hic quos ipsam ipsa nam.</p>
        <p class="mb-4 text-xl lg:text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa distinctio voluptas neque eaque? Aliquam, dolores modi vitae quas distinctio asperiores! Quam quas dolor sit vero accusamus rerum facilis omnis eveniet.Nihil quisquam aspernatur maiores. Deserunt magnam non voluptas veniam aperiam magni amet, quos eveniet aliquid vel provident qui quo saepe enim dolor officiis tempora! Fugit hic quos ipsam ipsa nam.</p>
      </div>
    </main>
    <template>
      <blog-aside />
    </template>
  </div>
</div>
</template>

<script>
import BlogAside from '@/components/shared/BlogAside'
import AsideBlog from '@/components/placeholders/AsideBlog'
export default {
  components:{
    BlogAside, AsideBlog
  }
}
</script>

<style lang="scss" scoped>
</style>