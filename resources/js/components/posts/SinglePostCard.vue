<template>
  <div class="card my-4">
    <div class="card-header">
      <div class="d-flex justify-content-between align-items-center">
        {{ post.title }}
        <a href="" role="button" class="btn btn-success">Dettaglio Post</a>
      </div>
    </div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <p>
          {{ post.content }}
        </p>
        <footer class="blockquote-footer">
          Created at: <cite title="Source Title">{{ getDate }}</cite>
        </footer>
        <footer class="blockquote-footer">
          <span>Categorie:</span>
          <span :class="`badge badge-${post.category.color}`">{{
            post.category.label
          }}</span>
        </footer>
        <footer class="blockquote-footer">
          <span>TAGS:</span>
          <span
            v-for="tag in post.tags"
            :key="tag.id"
            class="badge badge-pill mr-2 text-white"
            :style="`background-color: ${tag.color}`"
            >{{ tag.label }}</span
          >
        </footer>
      </blockquote>
    </div>
  </div>
</template>

<script>
export default {
  name: "SinglePostCard",
  props: ["post"],
  computed: {
    getDate() {
      const postDate = new Date(this.post.updated_at);
      let day = postDate.getDate();
      let month = postDate.getMonth() + 1;
      const year = postDate.getFullYear();

      if (day < 10) day = "0" + day;
      if (month < 10) month = "0" + month;

      return `${day}/${month}/${year}`;
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  color: black;
}
</style>