<template>
  <div class="card my-4">
    <div class="card-header">{{ post.title }}</div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <p>
          {{ post.content }}
        </p>
        <footer class="blockquote-footer">
          Created at: <cite title="Source Title">{{ getDate }}</cite>
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