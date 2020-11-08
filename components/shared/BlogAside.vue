<template>
  <aside>
    <div class="profile p-4 rounded-xl bg-orange-600 text-white mb-4">
      <template v-if="$fetchState.pending">
        <aside-placeholders />
      </template>
      <template v-else-if="$fetchState.error">
        <inline-error-block :error="$fetchState.error" />
      </template>
      <template v-else>
        <nuxt-link
          class="username-heading px-10 pt-2"
          :to="{
            name: 'username',
            params: { username: user.username },
          }"
          tag="div"
        >
          <nuxt-link
            :to="{
              name: 'username',
              params: { username: user.username },
            }"
          >
            <img
              :src="user.profile_image"
              :alt="user.name"
              class="rounded-full"
            />
          </nuxt-link>
          <div class="text text-center mt-2 leading-5">
            <nuxt-link
              :to="{
                name: 'username',
                params: { username: user.username },
              }"
            >
              <span class="block font-semibold text-xl">{{ user.name }}</span>
            </nuxt-link>
            <nuxt-link
              :to="{
                name: 'username',
                params: { username: user.username },
              }"
            >
              <span class="text-secondary">@{{ user.username }}</span>
            </nuxt-link>
          </div>
        </nuxt-link>
        <!-- <nuxt-link
          :to="{
            name: 'username',
            params: { username: user.username },
          }"
          class="f-button"
        >
          See profile
        </nuxt-link> -->
        <div class="info leading-5">
          <div v-if="user.summary">
            <div class="title font-semibold text-secondary">about</div>
            <div class="content">{{ user.summary }}</div>
          </div>
          <div v-if="user.location">
            <div class="title font-semibold text-secondary mt-2">location</div>
            <div class="content">{{ user.location }}</div>
          </div>
          <div v-if="user.joined_at">
            <div class="title font-semibold text-secondary mt-2">joined</div>
            <div class="content">{{ user.joined_at }}</div>
          </div>
        </div>
      </template>
    </div>
    <div>
      <h1 class="text-primary uppercase font-semibold border-l-4 pl-4 mb-4">
        posts Featured
      </h1>
      <div>
        <div class="block mb-3">
          <a class="featured-list font-semibold" href="#">Featured</a>
        </div>
        <div class="block mb-3">
          <a class="featured-list font-semibold" href="#">My profile</a>
        </div>
      </div>
      <h1 class="text-primary uppercase font-semibold border-l-4 pl-4 mb-4">
        posts Featured
      </h1>
    </div>
  </aside>
</template>

<script>
import AsidePlaceholders from "@/components/placeholders/AsidePlaceholders";
import InlineErrorBlock from "@/components/shared/InlineErrorBlock";
export default {
  components: {
    InlineErrorBlock,
    AsidePlaceholders,
  },
  props: [],
  async fetch() {
    const res = await fetch(
      `https://dev.to/api/users/by_username?url=${this.$route.params.username}`
    );
    if (!res.ok) {
      throw new Error(`User ${this.$route.params.username} not found`);
    }
    this.user = await res.json();
  },
  fetchOnServer: false,
  data() {
    return {
      user: {},
    };
  },
};
</script>

<style lang="scss" scoped>
.featured-list {
  @apply pl-6 relative;
  &:before {
    content: "";
    @apply w-2 h-2 absolute bg-secondary rounded-full left-0;
    top: 8px;
  }
}
</style>




// .profile {
//   @apply bg-gray-200;
//   .username-heading {
//     &:hover {
//       color: $primary;
//     }
//     img {
//       @apply w-12 h-12 rounded-full mr-4;
//     }
//     .text {
//       @apply flex flex-col justify-center;
//       a {
//         line-height: 1;
//       }
//       a:first-child {
//         @apply text-xl font-medium mb-1;
//         letter-spacing: 2 * 0.0125rem;
//       }
//       a:last-child {
//         color: $secondary;
//         @apply text-sm;
//       }
//     }
//     &.loading {
//       display: block;
//     }
//   }
//   .f-button {
//     @apply block w-full p-2 rounded-lg uppercase text-center font-semibold mb-4;
//     box-shadow: $small-shadow;
//     letter-spacing: 2 * 0.0125rem;
//     &:hover {
//       background: $hovered-surface-color;
//     }
//     &:active {
//       background: transparent;
//       box-shadow: $small-inner-shadow;
//     }
//   }
//   .info {
//     > div {
//       margin-bottom: 0.5rem;
//     }
//     .title {
//       @apply text-xs font-medium  uppercase;
//       letter-spacing: 0.0125rem;
//       color: $secondary;
//       margin-bottom: 0.1rem;
//     }
//     .content {
//       @apply text-sm leading-5;
//     }
//   }
// }
