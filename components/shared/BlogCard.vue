<template>
  <div class="container-post-card">
    <nuxt-link
      :to="{
        name: 'blogs-username-article',
        params: { username: article.user.username, article: article.id },
      }"
    >
      <img
        v-if="article.cover_image"
        class="rounded-tl-xl rounded-tr-xl"
        :src="article.cover_image"
        :alt="article.title"
      />
      <p
        v-else
        class="h-48 bg-primary text-white flex justify-center items-center text-3xl font-bold rounded-tr-xl rounded-tl-xl"
      >
        Image not found
      </p>
    </nuxt-link>
    <div class="px-3 py-1">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <div class="">
            <img
              :src="article.user.profile_image_90"
              alt=""
              class="w-10 h-10 rounded-full"
            />
          </div>
          <div class="leading-tight ml-2 text-gray-700">
            <p>{{ article.user.name }}</p>
            <p>
              <time
                datetime="2020-10-08T10:56:57Z"
                title="jueves, 8 de octubre de 2020 6:56:57 a.&nbsp;m."
                >{{ article.readable_publish_date }}</time
              ><span class="" data-seconds="1602154617"></span>
            </p>
          </div>
        </div>
        <div>
          <p>
            <font-awesome-icon class="text-primary" :icon="['fas', 'heart']" />
            {{ article.positive_reactions_count }}
          </p>
          <p>
            <font-awesome-icon
              class="text-secondary"
              :icon="['fas', 'comment']"
            />
            {{ article.comments_count }}
          </p>
        </div>
      </div>

      <div class="my-1">
        <h2 class="font-bold text-2xl leading-none">
          <nuxt-link
            :to="{
              name: 'blogs-username-article',
              params: { username: article.user.username, article: article.id },
            }"
            class="title-tags"
          >
            {{ article.title }}
          </nuxt-link>
        </h2>
        <div class="tags mt-1">
          <a
            v-for="tag_list in article.tag_list"
            :key="tag_list.id"
            href="/t/webdev"
            class="tag"
            ><span class="">#</span>{{ tag_list }}</a
          >
          <!-- <a href="/t/javascript" class="tag"
            ><span class="">#</span>javascript</a
          >
          <a href="/t/css" class="tag"><span class="">#</span>css</a>
          <a href="/t/html" class="tag"><span class="">#</span>html</a> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    article: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.title-tags:hover {
  color: $primary;
}
.container-post-card {
  box-shadow: $shadow;
  &:hover {
    box-shadow: $small-shadow;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    .tag {
      @apply text-sm font-semibold leading-none rounded;
      padding: 0.5rem 0.5rem;
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
</style>
