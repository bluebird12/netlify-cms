<template>
  <div>
    <li v-for="(post, index) of posts" :key="index">
      <NuxtLink :to="{ name: 'blog-slug', params: { slug: post.slug } }">{{ post.title }}</NuxtLink>
    </li>
  </div>
</template>

<script>
export default {
   async asyncData({ $content, params }) {
    const posts = await $content('blog').sortBy('sortorder', 'asc').fetch();

    return {
      posts,
    };
  },
};
</script>
