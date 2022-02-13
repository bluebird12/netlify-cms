<template>
  <div>
    <li v-for="post of posts" :key="post.slug">
      <NuxtLink :to="{ name: 'post-slug', params: { slug: post.title } }">mm</NuxtLink>
    </li>
  </div>
</template>

<script>
export default {
   async asyncData({ $content }) {
    const posts = await $content("blog").fetch();

    return {
      posts,
    };
  },
};
</script>
