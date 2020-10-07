<template>
  <section class="hero__image mt-20 " :style="{ backgroundImage: 'url(' + require('@/assets/images/frontend/hero.jpg') + ')' }">
    <div class="banner__info relative z-10 pl-3 sm:pl-12">
      <h3 class="text-5xl sm:text-6xl font-bold">
        <small class="font-normal block -mb-2">Hello, I'm</small>
        Christopher
      </h3>
      <p class="description text-xl sm:text-2xl mt-4 mb-12 font-semibold inline-block leading-none">UI/UX Designer</p><br>
      <a class="btn btn-primary px-4 py-3 sm:px-5 sm:py-4" href="">My Work</a>
      <a class="btn btn-secondary px-4 py-3 sm:px-5 sm:py-4" href="">Hire Me</a>
    </div>
  </section>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.hero__image {
  // background-image: url('~assets/images/frontend/hero.jpg');
  @apply bg-no-repeat bg-cover bg-center bg-fixed relative flex items-center;
  min-height: calc(100vh - 5rem);
  &:before{
    content: "";
    @apply w-full absolute top-0 left-0 h-full opacity-25;
    background: linear-gradient(90deg, $lightgray, black);
  }
  p.description{
    border-bottom: 3px solid $primary;
    font-family: 'Open Sans', sans-serif;
  }
}
</style>