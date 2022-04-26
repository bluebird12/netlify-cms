<template>
  <div>
    <div id="keyFigures">
      {{ key.ships }}<br>
      {{ key.years }}<br>
      {{ key.tons }}<br>
      {{ key.voyages }}<br>
      {{ key.portcalls }}
    </div>
    <ul>
      <li v-for="(post, index) of posts" :key="index">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: post.slug } }">{{ post.title }}</NuxtLink>
        <p>{{ post.date }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

   async asyncData({ $content, params }) {
    const posts = await $content('blog').sortBy('sortorder', 'asc').fetch();
    const keys = await $content('keyfigures').fetch();

    return {
      posts, keys
    };
  },
};
</script>
