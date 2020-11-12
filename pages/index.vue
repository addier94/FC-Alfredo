<template>
  <div>
    <hero />
    <section class="section">
      <h1
        class="mt-12 ml-4 mb-8 text-3xl sm:text-5xl font-semibold capitalize inline-block leading-none border-solid border-b-2 border-primary"
      >
        Recursos destacados
      </h1>
      <div class="max-w-screen-xl m-auto min-h-screen">
        <template>
          <placeholders :items="6" />
        </template>
        <template>
          <inline-error-block />
        </template>
        <template>
          <div class="flex flex-wrap items-start">
            <v-popover
              class="w-full mx-4 mb-6 mt-2 sm-w-1-2 md-w-1-3 lg-w-1-4"
              offset="16"
              trigger="hover"
              placement="right-start"
            >
              <course-card />
              <template slot="popover">
                <course-card-tooltip />
              </template>
            </v-popover>
            <v-popover
              class="w-full mx-4 mb-6 mt-2 sm-w-1-2 md-w-1-3 lg-w-1-4"
              offset="16"
              trigger="hover"
              placement="right-start"
            >
              <course-card />
              <template slot="popover">
                <course-card-tooltip />
              </template>
            </v-popover>
            <v-popover
              class="w-full mx-4 mb-6 mt-2 sm-w-1-2 md-w-1-3 lg-w-1-4"
              offset="16"
              trigger="hover"
              placement="right-start"
            >
              <course-card />
              <template slot="popover">
                <course-card-tooltip />
              </template>
            </v-popover>
            <v-popover
              class="w-full mx-4 mb-6 mt-2 sm-w-1-2 md-w-1-3 lg-w-1-4"
              offset="16"
              trigger="hover"
              placement="right-start"
            >
              <course-card />
              <template slot="popover">
                <course-card-tooltip />
              </template>
            </v-popover>
            <v-popover
              class="w-full mx-4 mb-6 mt-2 sm-w-1-2 md-w-1-3 lg-w-1-4"
              offset="16"
              trigger="hover"
              placement="right-start"
            >
              <course-card />
              <template slot="popover">
                <course-card-tooltip />
              </template>
            </v-popover>
            <v-popover
              class="w-full mx-4 mb-6 mt-2 sm-w-1-2 md-w-1-3 lg-w-1-4"
              offset="16"
              trigger="hover"
              placement="right-start"
            >
              <course-card />
              <template slot="popover">
                <course-card-tooltip />
              </template>
            </v-popover>
          </div>
        </template>
        <template>
          <h1
            class="mt-8 ml-4 mb-8 text-3xl sm:text-5xl font-semibold capitalize inline-block leading-none border-solid border-b-2 border-primary"
          >
            posts destacados
          </h1>
          <!-- class="article-block w-full lg:mr-4 lg:w-3/4 lg:mb-8 lg:grid lg:grid-cols-2 lg:gap-4" -->
          <div class="sm:grid sm:grid-cols-2 sm:gap-4 m-4">
            <blog-card :isFeatured="true" />
          </div>
        </template>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from "@/components/shared/Hero";
import CourseCard from "@/components/shared/CourseCard";
import Placeholders from "@/components/placeholders/CardCourse";
import InlineErrorBlock from "@/components/shared/InlineErrorBlock";
import CourseCardTooltip from "@/components/CourseCardTooltip";
import BlogCard from "@/components/shared/BlogCard";
export default {
  components: {
    Hero,
    CourseCard,
    InlineErrorBlock,
    CourseCardTooltip,
    BlogCard,
    Placeholders,
  },
};
</script>

<style lang="scss" scoped>
</style>
