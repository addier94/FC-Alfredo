<template>
  <div>
    <ul v-if="comments.length" id="comments">
      <comment-blog
        v-for="comment in comments"
        :key="comment.id_code"
        :comment="comment"
        :level="0"
      />
    </ul>
    <a
      :href="addCommentLink"
      target="_blank"
      rel="nofollow noopener noreferer"
      class="add-comment"
    >
      Add comment
    </a>
  </div>
</template>

<script>
import CommentBlog from "@/components/shared/CommentBlog";
export default {
  components: {
    CommentBlog,
  },
  props: [],
  async fetch() {
    this.comments = await fetch(
      `https://dev.to/api/comments?a_id=${this.$route.params.article}`
    ).then((res) => res.json());
  },
  fetchOnServer: false,
  data() {
    return {
      comments: [],
    };
  },
  computed: {
    addCommentLink() {
      const { slug } = this.$store.state.currentArticle || {};
      return `https://dev.to/${this.$route.params.username}/${slug}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.add-comment {
  @apply block w-full p-2 rounded-lg uppercase text-center font-semibold mb-4;
  box-shadow: $small-shadow;
  letter-spacing: 2 * -0.0125rem;
  &:hover {
    background: $hovered-surface-color;
  }
  &:active {
    background: transparent;
    box-shadow: $small-inner-shadow;
  }
}
</style>
