<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.date }}</p>
    <nuxt-content :document="post" />
  <a :href="post.manual_pdf">nnn</a>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("blog", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" });
    }

    return {
      post,
    };
  },
};
</script>