<template>
  <li class="comment" :class="level !== 0 && 'reply'">
    <div class="card">
      <div class="profile">
        <nuxt-link
          :to="{
            name: 'username',
            params: { username: comment.user.username },
          }"
          class="inner-link"
        >
          <img :src="comment.user.profile_image_90" :alt="comment.user.name" />
          <span>{{ comment.user.name }}</span>
        </nuxt-link>
        <a
          v-if="comment.user.twitter_username"
          :href="`https://twitter.com/${comment.user.twitter_username}`"
          target="_blank"
        >
          <font-awesome-icon size="lg" :icon="['fab', 'twitter']" />
        </a>
        <a
          v-if="comment.user.github_username"
          :href="`https://github.com/${comment.user.github_username}`"
          target="_blank"
        >
          <font-awesome-icon size="lg" :icon="['fab', 'github']" />
        </a>
        <a
          v-if="comment.user.website_url"
          :href="comment.user.website_url"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <font-awesome-icon size="lg" :icon="['fas', 'globe']" />
        </a>
      </div>
      <!-- eslint-disable-next-line -->
      <div v-html="comment.body_html" class="html-content"></div>
    </div>
    <ul>
      <comment-blog
        v-for="reply in comment.children"
        :key="reply.id_code"
        :comment="reply"
        :level="level + 1"
      />
    </ul>
  </li>
</template>

<script>
import CommentBlog from "@/components/shared/CommentBlog";
export default {
  name: "CommentBlog",
  components: {
    CommentBlog,
  },
  props: {
    comment: {
      type: Object,
      default: null,
    },
    level: {
      type: Number,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.comment {
  .card {
    @apply bg-white rounded-lg my-4 mx-0 p-4;
    .profile {
      @apply flex items-center mb-4;
      a {
        @apply my-0 mx-2;
        letter-spacing: 2 * -0.0125rem;
        &:hover {
          color: $primary;
          svg {
            color: $primary;
          }
        }
      }
      .inner-link {
        @apply flex items-center ml-0 text-lg font-medium;
        line-height: 1;
        img {
          @apply w-10 h-10 rounded-full mr-2;
        }
      }
    }
  }
}
.reply {
  @media (min-width: 768px) {
    padding-left: 2rem;
  }
}
::v-deep .html-content {
  h1 {
    @apply text-3xl mt-8 mb-4;
  }
  h2 {
    @apply text-2xl mt-8 mb-4;
  }
  h3 {
    @apply text-xl mt-8 mb-4;
  }
  h4 {
    @apply text-base mt-8 mb-4;
  }
  a {
    color: $primary;
  }
  p {
    @apply text-sm mb-4 leading-5;
    code {
      @apply rounded p-1;
      background-color: #d2f3e1;
    }
  }
  img {
    @apply w-full rounded-lg;
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
