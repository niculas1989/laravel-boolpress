<template>
  <div class="container text-white">
    <ul v-if="posts.length">
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
    <p v-else>Nessun post.</p>
  </div>
</template>

<script>
export default {
  name: "PostsList",
  data() {
    return {
      posts: [],
    };
  },
};
</script>

<style>
</style>