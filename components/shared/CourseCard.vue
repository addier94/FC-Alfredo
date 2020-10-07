<template>
  <article>
    <div class="image-wrapper">
      <a href="#">
        <img
          src="@/assets/images/frontend/alfredo.jpeg" alt="">
      </a>
    </div>
    <div class="content">
      <div>
        <a href="#">
          <h3 class="text-xl font-bold tracking-tighter">
            my short title
            <small class="font-normal block text-sm text-gray-600">Title shot description of full description of my project</small>
          </h3>
        </a>
      </div>
      <div class="tags mt-1 tracking-tight">
        <a href="#" class="tag">Explorar</a>
        <p class="tag">
          <span class="text-gray-600 text-base line-through">8.39</span>
          3.92
        </p>
        <!-- <p href="#" class="tag">Free</p> -->
      </div>
    </div>
  </article>
</template>
<script>
export default {
  
}
</script>

<style lang="scss" scoped>
article {
  @apply overflow-hidden;
  border-radius: 1rem;
  box-shadow: $shadow;
  &:hover {
    box-shadow: $small-shadow;
  }
  .image-wrapper {
    @apply relative;
    padding-bottom: 96.25%;
    background-color: $elevated-surface-color;
    img {
      @apply absolute top-0 left-0 w-full h-full object-cover;
    }
  }
  .content {
    padding: .5rem 1rem;
    .tags {
      @apply flex flex-wrap justify-between mb-2;
      .tag {
        @apply text-sm font-medium leading-none rounded p-2;
        margin: 0 0.5rem 0.5rem 0;
        box-shadow: $small-shadow;
        &:hover {
          background: $hovered-surface-color;
        }
        &:active {
          background: transparent;
          box-shadow: $small-inner-shadow;
        }
      }
    }
  }
}
</style>