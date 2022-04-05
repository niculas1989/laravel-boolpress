<template>
  <section id="detail-post">
    <div class="container">
      <h1>Dettaglio del post.</h1>
      <Loader v-if="isLoading && !post" />
      <SinglePostCard v-else :post="post" hide-link="true" />
      <button class="btn btn-primary" @click="$router.back()">
        Torna indietro
      </button>
    </div>
  </section>
</template>

<script>
import SinglePostCard from "../posts/SinglePostCard.vue";
import Loader from "../Loader.vue";
export default {
  name: "DetailPage",
  components: { SinglePostCard, Loader },
  data() {
    return {
      post: null,
      isLoading: false,
    };
  },
  methods: {
    getSinglePost() {
      this.isLoading = true;
      axios
        .get("http://127.0.0.1:8000/api/posts/" + this.$route.params.slug)
        .then((res) => {
          this.post = res.data;
        })
        .catch((err) => {
          console.error(err);
        })
        .then(() => {
          this.isLoading = false;
        });
    },
  },
  mounted() {
    this.getSinglePost();
  },
};
</script>

<style>
</style>