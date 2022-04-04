<template>
  <div class="container text-white">
    <div v-if="posts.length" class="mt-5">
      <h2>I miei post:</h2>
      <Loader v-if="isLoading" />
      <SinglePostCard
        v-for="post in posts"
        :key="post.id"
        :post="post"
        v-else
      />
    </div>
  </div>
</template>

<script>
import SinglePostCard from "./SinglePostCard";
import Loader from "../Loader";
export default {
  name: "PostsList",
  components: {
    SinglePostCard,
    Loader,
  },
  data() {
    return {
      posts: [],
      isLoading: false,
    };
  },
  methods: {
    getPosts() {
      this.isLoading = true;
      axios
        .get("http://127.0.0.1:8000/api/posts")
        .then((res) => {
          this.posts = res.data;
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {
          this.isLoading = false;
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