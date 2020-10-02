<template>
  <header>
    <figure>
      <img src="@/assets/images/logo.png" alt="Logo" />
      <figcaption>
        <span>FC</span>
        <span>Alfredo</span>
      </figcaption>
    </figure>
    <nav :class="{ 'show-nav': showNavContent }">
      <section class="nav-content">
        <button
          class="nav-content__button"
        >
          <span>Home</span>
        </button>
        <button
          class="nav-content__button"
        >
          <span>Cursos</span>
        </button>
        <button
          class="nav-content__button"
        >
          <span>Blogs</span>
        </button>
        <button
          class="nav-content__button"
        >
          <span>Sobre Mi</span>
        </button>
        <button
          class="nav-content__button"
        >
          <span>Registro</span>
        </button>
        <button
          class="nav-content__button"
        >
          <span>Iniciar sesion</span>
        </button>
      </section>
      <button class="burger" @click="showNavContent = !showNavContent">
        <fa class="text-3xl" v-if="!showNavContent" :icon="['fas', 'bars']"></fa>
        <fa class="text-4xl" v-else :icon="['fas', 'times']"></fa>
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  props: ["active"],
  data() {
    return {
      showNavContent: false
    };
  },
  methods: {
    // navigateTo(where) {
    //   this.showNavContent = false;
    //   this.$emit("scroll", where);
    // }
  }
};
</script>

<style lang="scss" src="~/assets/css/components/navbar.scss"></style>