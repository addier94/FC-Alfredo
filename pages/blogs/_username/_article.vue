<template>
  <div class="mt-24 max-w-screen-xl m-auto p-4">
    <div
      class="flex flex-col items-center m-auto mb-8 lg:items-start lg:flex-row"
    >
      <article-block
        class="w-full lg:mr-4 lg:w-4/6 mb-8"
        style="max-width: 880px"
      />

      <div class="w-full lg:block lg:w-1/3 relative bg-yellow-300 h-4">
        <blog-aside class="sticky" style="top: 1rem" />
      </div>
    </div>
    <comments-block class="xl:m-2" />
  </div>
</template>

<script>
// import AsideUsernameBlock from "@/components/AsideUsernameBlock";
import ArticleBlock from "@/components/ArticleBlock";
import BlogAside from "@/components/shared/BlogAside";
import PostsSingleBlog from "@/components/placeholders/PostsSingleBlog";
import PostsBlog from "@/components/placeholders/PostsBlog";
export default {
  components: {
    BlogAside,
    PostsBlog,
    PostsSingleBlog,
    ArticleBlock,
    // AsideUsernameBlock,
  },
};
</script>

<style lang="scss" scoped>
</style>
