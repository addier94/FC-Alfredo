<template>
<div>
  <hero />
  <section class="section">
    <h1 class="mt-12 mb-10 text-3xl sm:text-5xl font-semibold capitalize inline-block leading-none">Recursos destacados</h1>
    <div class="page-wrapper">
      <template>
        <div class="article-cards-wrapper">
          <content-placeholders
            v-for="p in 30"
            :key="p"
            rounded
            class="article-card-block"
            >
            <content-placholders-img />
            <content-placeholders-text :lines="3" />
          </content-placeholders>
        </div>
      </template>

      <template>

      </template>

      <template>
        <div class="article-cards-wrapper">
          <course-card />
        </div>
      </template>

    </div>
  </section>
</div>
</template>

<script>
import Hero from '@/components/shared/Hero';
import CourseCard from '@/components/shared/CourseCard';
export default {
  name: 'index page',
  components: {
    Hero, CourseCard
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/variables";
h1{
  border-bottom: 2px solid $primary;
}
.pag-wrapper{
  max-width: 1280px;
  margin: auto;
  padding: 1rem;
  min-height: 100vh;
  .article-cards-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    .article-card-block {
      width: calc(100% - 2 * 1rem);
      margin: 1rem;
      margin-bottom: 1.5rem;
      margin-top: 0.5rem;
      @media (min-width: 640px) {
        width: calc(50% - 2 * 1rem);
      }
      @media (min-width: 1024) {
        width: calc(33.33333% - 2 * 1rem);
      }
    }
  }
}
</style>
