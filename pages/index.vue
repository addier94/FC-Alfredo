<template>
<div>
  <hero />
  <section class="section">
    <h1 class="mt-12 ml-4 mb-8 text-3xl sm:text-5xl font-semibold capitalize inline-block leading-none">Recursos destacados</h1>
    <div class="page-wrapper">
      <template>
        <div class="article-cards-wrapper">
          <content-placeholders
            v-for="p in 6"
            :key="p"
            rounded
            class="article-card-block"
            >
            <content-placeholders-img />
            <content-placeholders-text :lines="3" />
          </content-placeholders>
        </div>
      </template>
      <template>
        <inline-error-block />
      </template>
      <template>
        <div class="article-cards-wrapper">
          <v-popover class="article-card-block"
              offset="16"
              trigger="hover"
              placement="right-start">
              <course-card />
            <template slot="popover">
              <course-card-tooltip />
            </template>
          </v-popover>
          <v-popover class="article-card-block"
              offset="16"
              trigger="hover"
              placement="right-start">
              <course-card />
            <template slot="popover">
              <course-card-tooltip />
            </template>
          </v-popover>
          <v-popover class="article-card-block"
              offset="16"
              trigger="hover"
              placement="right-start">
              <course-card />
            <template slot="popover">
              <course-card-tooltip />
            </template>
          </v-popover>
          <v-popover class="article-card-block"
              offset="16"
              trigger="hover"
              placement="right-start">
              <course-card />
            <template slot="popover">
              <course-card-tooltip />
            </template>
          </v-popover>
          <v-popover class="article-card-block"
              offset="16"
              trigger="hover"
              placement="right-start">
              <course-card />
            <template slot="popover">
              <course-card-tooltip />
            </template>
          </v-popover>
          <v-popover class="article-card-block"
              offset="16"
              trigger="hover"
              placement="right-start">
              <course-card />
            <template slot="popover">
              <course-card-tooltip />
            </template>
          </v-popover>
        </div>
      </template>
      <template>
        <h1 class="mt-8 ml-4 mb-8 text-3xl sm:text-5xl font-semibold capitalize inline-block leading-none">posts destacados</h1>

        <div class="sm:grid sm:grid-cols-2 sm:gap-4 m-4">
          <blog-card />
          <blog-card />
          <blog-card />
          <blog-card />
        </div>
      </template>
    </div>
  </section>
</div>
</template>

<script>
import Hero from '@/components/shared/Hero'
import CourseCard from '@/components/shared/CourseCard'
import InlineErrorBlock from '@/components/shared/InlineErrorBlock'
import CourseCardTooltip from '@/components/CourseCardTooltip'
import BlogCard from '@/components/shared/BlogCard'
export default {
  components: {
    Hero, CourseCard, InlineErrorBlock, CourseCardTooltip, BlogCard
  }
}
</script>

<style lang="scss" scoped>
h1{
  border-bottom: 2px solid $primary;
}
.page-wrapper{
  max-width: 1280px;
  margin: auto;
  // padding: 1rem;
  min-height: 100vh;
  .article-cards-wrapper {
    @apply flex flex-wrap items-start;
    .article-card-block {
      width: calc(100% - 2 * 1rem);
      @apply m-4 mb-6 mt-2;
      @media (min-width: 576px) {
        width: calc(50% - 2 * 1rem);
      }
      @media (min-width: 768px) {
        width: calc(33.33333% - 2 * 1rem);
      }
      @media (min-width: 1024px) {
        width: calc(25% - 2 * 1rem);
      }
    }
  }
}
</style>
