<template>
  <div>
    <Header />
    <main>
      <router-view></router-view>
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
