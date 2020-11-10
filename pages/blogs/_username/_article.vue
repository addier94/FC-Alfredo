<template>
  <div class="mt-24 max-w-screen-xl m-auto p-4">
    <div
      class="article-content-wrapper flex flex-col items-center m-auto mb-8 lg:items-start lg:flex-row lg:justify-center"
    >
      <article-block
        class="w-full lg:mr-4 lg:w-3/4 mb-8"
        style="max-width: 880px"
      />

      <div class="aside-username-wrapper relative w-full lg:block lg:w-1/4">
        <blog-aside class="aside-username-block sticky" />
      </div>
    </div>
    <comments-blog class="xl:m-2" />
  </div>
</template>

<script>
// import AsideUsernameBlock from "@/components/AsideUsernameBlock";
import ArticleBlock from "@/components/ArticleBlock";
import BlogAside from "@/components/shared/BlogAside";
import CommentsBlog from "@/components/CommentsBlog";
import PostsSingleBlog from "@/components/placeholders/PostsSingleBlog";
import PostsBlog from "@/components/placeholders/PostsBlog";
export default {
  components: {
    BlogAside,
    PostsBlog,
    PostsSingleBlog,
    ArticleBlock,
    CommentsBlog,
    // AsideUsernameBlock,
  },
};
</script>

<style lang="scss" scoped>
@media (min-width: 1024px) {
  .article-content-wrapper {
    align-items: normal;
  }
}
.aside-username-wrapper {
  max-width: 880px;
  .aside-username-block {
    top: 5rem;
  }
}
</style>
