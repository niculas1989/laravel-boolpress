<template>
  <div class="container text-white">
    <h2>I miei post:</h2>
    <div v-if="posts.length">
      <SinglePostCard />
    </div>
    <p v-else>Nessun post.</p>
  </div>
</template>

<script>
import SinglePostCard from "./SinglePostCard";
export default {
  name: "PostsList",
  components: {
    SinglePostCard,
  },
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