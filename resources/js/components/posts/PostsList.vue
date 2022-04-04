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
  methods: {
    getPosts() {
      axios
        .get("http://127.0.0.1:8000/api/posts")
        .then((res) => {
          this.posts = res.data;
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {
          console.log("Tutto sotto controllo.");
        });
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>

<style>
</style>