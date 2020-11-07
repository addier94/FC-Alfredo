<template>
  <article class="p-2 rounded-2xl">
    <template v-if="$fetchState.pending">
      <posts-single-blog />
    </template>
    <template v-else-if="$fetchState.error">
      <inline-error-block :error="$fetchState.error" />
    </template>
    <template v-else>
      <header class="mb-4">
        <h1 class="text-4xl mb-4" style="letter-spacing: 2 * 0.0125rem">
          {{ article.title }}
        </h1>
        <div class="tags flex flex-wrap mb-6">
          <nuxt-link
            v-for="tag in article.tags"
            :key="tag"
            :to="{ name: 't-tag', params: { tag } }"
            class="tag font-medium leading-4 p-2 mt-0 mr-2 mb-2 ml-0 rounded"
          >
            #{{ tag }}
          </nuxt-link>
        </div>
        <div
          v-if="article.cover_image"
          class="image-wrapper relative mb-6 rounded-lg overflow-hidden md:mb-6 bg-secondary"
        >
          <img
            class="absolute top-0 left-0 w-full h-full object-cover"
            :src="article.cover_image"
            :alt="article.title"
          />
        </div>
        <div
          class="meta leading-4 text-sm uppercase font-medium flex items-center justify-between"
        >
          <div class="flex">
            <span class="flex items-center mr-4">
              <font-awesome-icon
                class="text-primary mr-1"
                :icon="['fas', 'heart']"
              />
              {{ article.positive_reactions_count }}
            </span>
            <span class="cursor-pointer" @click="scrollToComments">
              <font-awesome-icon
                class="text-secondary"
                :icon="['fas', 'comment']"
              />
              {{ article.comments_count }}
            </span>
          </div>
          <div>
            <font-awesome-icon class="text-primary" :icon="['fas', 'clock']" />
            <time>{{ article.readable_publish_date }}</time>
          </div>
        </div>
      </header>
      <!-- eslint-disable-next-line -->
      <div class="content" v-html="article.body_html" />
    </template>
  </article>
</template>

<script>
import PostsSingleBlog from "@/components/placeholders/PostsSingleBlog";
import InlineErrorBlock from "@/components/shared/InlineErrorBlock";
export default {
  components: {
    InlineErrorBlock,
    PostsSingleBlog,
  },
  props: [],
  async fetch() {
    const article = await fetch(
      `https://dev.to/api/articles/${this.$route.params.article}`
    ).then((res) => res.json());
    if (article.id && article.user.username === this.$route.params.username) {
      this.article = article;
      this.$store.commit("SET_CURRENT_ARTICLE", this.article);
    } else {
      // set status code on server
      if (process.server) {
        this.$nuxt.context.res.statusCode = 404;
      }
      throw new Error("Article not found");
    }
  },
  data() {
    return {
      article: {},
    };
  },
  activated() {
    // Call fetch again if last fetch more than 60 sec ago
    if (this.$fetchState.timestamp <= Date.now() - 60000) {
      this.$fetch();
    }
  },
  methods: {
    scrollToComments() {
      const el = document.querySelector("#comments");
      if (el) {
        const scrollTo = el.getBoundingClientRect().top;
        window.scrollBy({ top: scrollTo - 20, left: 0, behavior: "smooth" });
      }
    },
  },
  head() {
    return {
      title: this.article.title,
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  .tags {
    .tag {
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
  .image-wrapper {
    padding-bottom: 56.25%;
  }
  .meta {
    letter-spacing: 2 * 0.0125rem;
  }
}
::v-deep .content {
  .ltag__user {
    display: none;
  }
  iframe {
    max-width: 100%;
  }
  h1 {
    @apply text-3xl mt-8 mb-4;
    letter-spacing: 2 * 0.0125rem;
  }
  h2 {
    @apply text-2xl mt-8 mb-4;
    letter-spacing: 2 * 0.0125rem;
  }
  h3 {
    @apply text-xl mt-8 mb-4;
    letter-spacing: 2 * 0.0125rem;
  }
  h4 {
    @apply text-base mt-8 mb-4;
    letter-spacing: 2 * 0.0125rem;
  }
  a {
    color: $secondary;
  }
  p {
    @apply mb-4 leading-5;
    code {
      background-color: #fbe5e1;
      color: #c0341d;
      @apply rounded py-0 px-2 font-semibold text-sm;
    }
  }
  img {
    @apply w-screen rounded-lg;
  }
  .highlight {
    @apply mb-4 rounded-lg;
  }
  ul {
    list-style: numeral;
    margin-bottom: 1rem;
    li p {
      margin-bottom: 0;
    }
  }
  ol {
    margin-bottom: 1rem;
  }
}
</style>
