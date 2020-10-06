<template>
  <a href="#"
    tag="article">
    <div class="image-wrapper">
      <img
        src="@/assets/images/frontend/alfredo.jpeg" alt="">
    </div>
    <div class="content">
      <a href="#">
        <h1>Titulo del articulo</h1>
      </a>
      <div class="tags">
        <a href="#" class="tag"># tag</a>
      </div>
      <div class="meta">
        <div class="scl">
          <span>
            <heart-icon />
            <fa class="text-3xl" :icon="['fas', 'heart']"></fa>
            corazon
          </span>
          <span>
            <comments-icon />
            <fa class="text-3xl" :icon="['fas', 'comments']"></fa>
          </span>
        </div>
        <time>formato fecha</time>
      </div>
    </div>
  </a>
</template>
<script>
export default {
name: 'CourseCard',
  
}
</script>
<style scoped>

</style>