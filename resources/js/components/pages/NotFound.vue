<template>
  <section
    id="not-found"
    class="
      d-flex
      justify-content-center
      align-items-center
      h-100
      w-100
      text-danger
      flex-column
    "
  >
    <h2>404 | NOT FOUND</h2>
    <button class="btn btn-danger" @click="$router.back()">
      Torna Indietro
    </button>
  </section>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style>
</style>