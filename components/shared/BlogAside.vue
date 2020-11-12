<template>
  <aside>
    <template v-if="$fetchState.pending">
      <aside-placeholders />
    </template>
    <template v-else-if="$fetchState.error">
      <inline-error-block :error="$fetchState.error" />
    </template>
    <template v-else>
      <div class="blogAside">
        <div
          v-if="user.username !== 'undefined'"
          class="profile p-4 rounded-xl bg-orange-600 text-white mb-4"
        >
          <div class="username-heading px-6 pt-0">
            <nuxt-link
              :to="{
                name: 'blogs-username',
                params: { username: user.username },
              }"
            >
              <img
                :src="user.profile_image"
                :alt="user.name"
                class="rounded-full"
              />
            </nuxt-link>
            <div class="text text-center my-2 leading-5">
              <nuxt-link
                :to="{
                  name: 'blogs-username',
                  params: { username: user.username },
                }"
              >
                <span class="block font-semibold text-xl">{{ user.name }}</span>
              </nuxt-link>
              <nuxt-link
                :to="{
                  name: 'blogs-username',
                  params: { username: user.username },
                }"
              >
                <span class="text-secondary">@{{ user.username }}</span>
              </nuxt-link>
            </div>
          </div>
          <div class="info leading-5">
            <div v-if="user.summary">
              <div class="title font-semibold text-secondary">about</div>
              <div class="content">{{ user.summary }}</div>
            </div>
            <div v-if="user.location">
              <div class="title font-semibold text-secondary mt-2">
                location
              </div>
              <div class="content">{{ user.location }}</div>
            </div>
            <div v-if="user.joined_at">
              <div class="title font-semibold text-secondary mt-2">joined</div>
              <div class="content">{{ user.joined_at }}</div>
            </div>
          </div>
        </div>
        <div>
          <h1 class="text-primary uppercase font-semibold border-l-4 pl-4 mb-2">
            posts Featured
          </h1>
          <div>
            <div class="block mb-2 ml-5">
              <nuxt-link
                :to="{ name: 'blogs-destacados' }"
                class="featured-list font-semibold"
                >Featured</nuxt-link
              >
            </div>
            <div class="block mb-2 ml-5">
              <nuxt-link
                class="featured-list font-semibold"
                to="/blogs/afreddier"
                >My profile</nuxt-link
              >
            </div>
          </div>
          <h1 class="text-primary uppercase font-semibold border-l-4 pl-4 mb-4">
            posts Featured
          </h1>
        </div>
      </div>
    </template>
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
.blogAside {
  box-shadow: $shadow;
  &:hover {
    box-shadow: $small-shadow;
  }
}
.featured-list {
  @apply pl-6 relative;
  &:before {
    content: "";
    @apply w-2 h-2 absolute bg-secondary rounded-full left-0;
    top: 8px;
  }
}
.nuxt-link-exact-active {
  @apply text-gray-500;
  &.featured-list {
    @apply pl-6 relative;
    &:before {
      content: "";
      @apply w-3 h-3 absolute bg-gray-500 rounded-full left-0;
      top: 7px;
    }
  }
}
</style>
