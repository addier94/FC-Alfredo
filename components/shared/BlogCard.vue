<template>
  <div>
    <template v-if="$fetchState.pending && !articles.length">
      <posts-blog :items="30" />
    </template>
    <template v-else-if="$fetchState.error">
      <inline-error-block />
    </template>
    <template v-else>
      <div
        v-for="(article, i) in articles"
        :key="i"
        v-observe-visibility="
          i === articles.length - 1 ? lazyLoadArticles : false
        "
        class="container-post-card"
      >
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
              <div>
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
                <font-awesome-icon
                  class="text-primary"
                  :icon="['fas', 'heart']"
                />
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
                  params: {
                    username: article.user.username,
                    article: article.id,
                  },
                }"
                class="title-tags"
              >
                {{ article.title }}
              </nuxt-link>
            </h2>
            <div class="tags mt-1">
              <nuxt-link
                v-for="tag in article.tag_list"
                :key="tag.id"
                :to="{ name: 'blogs-tags-tag', params: { tag } }"
                class="tag"
                ><span>#</span>{{ tag }}</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-if="$fetchState.pending && articles.length">
      <posts-blog :items="30" />
    </template>
  </div>
</template>
<script>
import BlogCard from "@/components/shared/BlogCard";
import BlogAside from "@/components/shared/BlogAside";
import PostsBlog from "@/components/placeholders/PostsBlog";
export default {
  props: [
    "isArticles",
    "isFeatured",
    "isUsernameArticlesBlock",
    "isTagArticle",
  ],
  components: {
    BlogCard,
    BlogAside,
    PostsBlog,
  },
  async fetch() {
    let articles = "";
    if (this.isArticles) {
      articles = await fetch(
        `https://dev.to/api/articles?tag=nuxt&state=rising&pag=${this.currentPage}`
      ).then((res) => res.json());
    } else if (this.isFeatured) {
      articles = await fetch(
        `https://dev.to/api/articles?tag=nuxt&top=365&page=${this.currentPage}`
      ).then((res) => res.json());
    } else if (this.isUsernameArticlesBlock) {
      articles = await fetch(
        // eslint-disable-next-line
        `https://dev.to/api/articles?username=${this.$route.params.username}`
      ).then((res) => res.json());
    } else if (this.isTagArticle) {
      articles = await fetch(
        `https://dev.to/api/articles?tag=${this.$route.params.tag}&top=365&page=${this.currentPage}`
      ).then((res) => res.json());
    }

    this.articles = this.articles.concat(articles);
  },
  data() {
    return {
      currentPage: 1,
      articles: [],
    };
  },
  methods: {
    lazyLoadArticles(isVisible) {
      if (isVisible) {
        if (this.currentPage < 5) {
          this.currentPage++;
          this.$fetch();
        }
      }
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
