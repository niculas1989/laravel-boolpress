<template>
  <div class="card my-4">
    <div class="card-header">{{ post.title }}</div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <p>
          {{ post.content }}
        </p>
        <footer class="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>
    </div>
  </div>
</template>

<script>
export default {
  name: "SinglePostCard",
  props: ["post"],
};
</script>

<style scoped lang="scss">
.card {
  color: black;
}
</style>