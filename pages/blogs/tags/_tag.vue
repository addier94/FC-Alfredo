<template>
  <div class="page-wrapper mt-32 max-w-screen-xl m-auto p-4">
    <div
      class="article-content-wrapper flex flex-col items-center m-auto mb-8 lg:flex-row lg:justify-center"
    >
      <blog-card
        :isTagArticle="true"
        class="article-block w-full lg:mr-4 lg:w-3/4 lg:mb-8"
      />
      <div class="aside-username-wrapper w-full relative lg:block lg:w-1/4">
        <blog-aside class="aside-username-block sticky" />
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from "@/components/shared/BlogCard";
import BlogAside from "@/components/shared/BlogAside";
export default {
  components: {
    BlogCard,
    BlogAside,
  },
};
</script>

<style lang="scss" scoped>
.article-content-wrapper {
  @media (min-width: 1024px) {
    align-items: normal;
  }
  .article-block {
    max-width: 880px;
  }
  .aside-username-wrapper {
    max-width: 880px;
    .aside-username-block {
      top: 5rem;
      // margin: 0.5rem;
    }
  }
}
</style>
