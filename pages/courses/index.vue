<template>
  <section class="section mt-12">
    <h1 class="mt-12 ml-4 mb-8 text-3xl sm:text-5xl font-semibold capitalize inline-block leading-none">Recursos destacados</h1>
    <div class="page-wrapper">
      <template>
        <div class="flex flex-wrap items-start">
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
        <div class="flex flex-wrap items-start">
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
    </div>
  </section>
</template>
<style lang="scss" scoped>
h1{
  border-bottom: 2px solid $primary;
}
.page-wrapper{
  max-width: 1280px;
  margin: auto;
  min-height: 100vh;
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
</style>