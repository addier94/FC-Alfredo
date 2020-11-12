<template>
  <header>
    <figure>
      <nuxt-link to="/">
        <img src="@/assets/images/logo.png" alt="Logo" />
      </nuxt-link>
      <figcaption>
        <span>FC</span>
        <span>Alfredo</span>
      </figcaption>
    </figure>
    <nav :class="{ 'show-nav': showNavContent }">
      <section class="nav-content">
        <nuxt-link to="/" class="nav-content__button" tag="button">
          <span>Home</span>
        </nuxt-link>
        <nuxt-link to="/courses" class="nav-content__button" tag="button">
          <span>Cursos</span>
        </nuxt-link>
        <nuxt-link
          :to="{ name: 'blogs' }"
          class="nav-content__button"
          tag="button"
        >
          <span>Blogs</span>
        </nuxt-link>
        <nuxt-link to="/about" class="nav-content__button" tag="button">
          <span>Sobre Mi</span>
        </nuxt-link>
        <nuxt-link to="/register" class="nav-content__button" tag="button">
          <span>Registro</span>
        </nuxt-link>
        <nuxt-link to="/login" class="nav-content__button" tag="button">
          <span>login</span>
        </nuxt-link>
      </section>
      <button
        class="burger focus:outline-none"
        @click="showNavContent = !showNavContent"
      >
        <font-awesome-icon
          v-if="!showNavContent"
          size="lg"
          :icon="['fas', 'bars']"
        />
        <font-awesome-icon v-else size="lg" :icon="['fas', 'times']" />
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showNavContent: false,
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  @apply h-16 grid grid-cols-5 fixed w-full top-0 z-50;
  background: $gray;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  figure {
    @apply col-span-3 flex items-center;
    img {
      @apply inline-block max-w-none;
      max-height: 4rem;
    }
    figcaption {
      @apply inline-block leading-7;

      span {
        @apply block text-2xl font-medium;
        font-family: $body-font-family;
      }
    }
  }

  nav {
    @apply col-start-5 bg-black text-white relative flex items-center justify-center;
    &::before {
      content: "";
      @apply w-0 h-0 absolute top-0;
      border-bottom: 4rem solid black;
      border-left: 2.5rem solid transparent;
      left: -2.5rem;
    }
    .burger {
      @apply w-full h-full text-2xl;
    }
    &:focus {
      @apply outline-none;
    }
    &:nuxt-link-exact-active {
      color: $primary;
    }
    .nav-content {
      button {
        @apply text-white text-lg font-normal;
        font-family: $body-font-family;
        &:focus {
          @apply outline-none;
        }
      }
    }

    @media screen and (max-width: 767px) {
      &:not(.show-nav) {
        .nav-content {
          @apply hidden;
        }
      }
      .nav-content {
        @apply fixed grid grid-flow-row gap-1 bg-white z-40 w-full left-0;
        box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
        top: 5rem;
        button {
          @apply h-20 bg-black;
          &.nuxt-link-exact-active {
            background: $primary;
          }
        }
      }
      &.show-nav {
        .burger {
          background: $primary;
        }
        &::before {
          content: "";
          @apply w-0 h-0 absolute top-0;
          border-bottom: 5rem solid $primary;
          border-left: 2.5rem solid transparent;
          left: -2.5rem;
        }
      }
    }
  }
  @media screen and (min-width: 768px) {
    figure {
      @apply col-span-2;
    }
    nav {
      @apply col-start-3 col-span-3;
      .nav-content {
        @apply w-full h-full flex items-center justify-evenly;
        button {
          @apply relative;
          &.nuxt-link-exact-active {
            color: $primary;
            span::after {
              content: "";
              @apply absolute w-full block;
              border-radius: 3px 3px 0 0;
              background: $primary;
              height: 2px;
              bottom: -21px;
            }
          }
          &:hover {
            color: $primary;
          }
        }
      }
    }
    .nav-button {
      @apply text-lg block;
      font-family: $body-font-family;
      span {
        @apply border-b-4 border-white;
      }
      &.nuxt-link-exact-active {
        color: $primary;
        span {
          border-color: $primary;
        }
      }
    }
    .burger {
      @apply hidden;
    }
  }
}
</style>
