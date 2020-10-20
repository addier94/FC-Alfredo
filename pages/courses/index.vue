<template>
  <section class="section mt-12">
    <h1 class="mt-12 ml-4 mb-8 text-3xl sm:text-5xl font-semibold capitalize inline-block leading-none border-solid border-b-2 border-primary">Recursos destacados</h1>
    <div class="max-w-screen-xl m-auto min-h-screen">
      <template>
        <placeholders :items="6" />
      </template>
      <template>
        <inline-error-block />
      </template>
      <template>
        <div class="flex flex-wrap items-start">
          <v-popover class="w-full mx-4 mb-6 mt-2 sm-w-1-2 md-w-1-3 lg-w-1-4"
              offset="16"
              trigger="hover"
              placement="right-start">
              <course-card />
            <template slot="popover">
              <course-card-tooltip />
            </template>
          </v-popover>
          <v-popover class="w-full mx-4 mb-6 mt-2 sm-w-1-2 md-w-1-3 lg-w-1-4"
              offset="16"
              trigger="hover"
              placement="right-start">
              <course-card />
            <template slot="popover">
              <course-card-tooltip />
            </template>
          </v-popover>
          <v-popover class="w-full mx-4 mb-6 mt-2 sm-w-1-2 md-w-1-3 lg-w-1-4"
              offset="16"
              trigger="hover"
              placement="right-start">
              <course-card />
            <template slot="popover">
              <course-card-tooltip />
            </template>
          </v-popover>
          <v-popover class="w-full mx-4 mb-6 mt-2 sm-w-1-2 md-w-1-3 lg-w-1-4"
              offset="16"
              trigger="hover"
              placement="right-start">
              <course-card />
            <template slot="popover">
              <course-card-tooltip />
            </template>
          </v-popover>
          <v-popover class="w-full mx-4 mb-6 mt-2 sm-w-1-2 md-w-1-3 lg-w-1-4"
              offset="16"
              trigger="hover"
              placement="right-start">
              <course-card />
            <template slot="popover">
              <course-card-tooltip />
            </template>
          </v-popover>
          <v-popover class="w-full mx-4 mb-6 mt-2 sm-w-1-2 md-w-1-3 lg-w-1-4"
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
<script>
import Placeholders from '@/components/placeholders/CardCourse'
export default {
  components: {
    Placeholders
  }
}
</script>
<style lang="scss" scoped>
</style>