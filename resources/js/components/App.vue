<template>
  <div>
    <Header />
    <main>
      <PostsList />
    </main>
  </div>
</template>

<script>
import Header from "./Header";
import PostsList from "./posts/PostsList";
export default {
  name: "App",
  components: {
    Header,
    PostsList,
  },
};
</script>

<style scoped lang="scss">
</style>
