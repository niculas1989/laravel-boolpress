<template>
  <div class="container text-white mt-5">
    <h2>Contact us!</h2>
    <div class="form-group w-50">
      <label for="email">Email</label>
      <input
        type="email"
        class="form-control"
        id="email"
        v-model="form.email"
      />
      <small id="emailHelp" class="form-text text-white"
        >La mail alla quale sarai ricontattato.</small
      >
    </div>
    <div class="form-group">
      <label for="message">Testo messaggio</label>
      <textarea
        class="form-control"
        id="message"
        rows="12"
        v-model="form.message"
      ></textarea>
      <small id="textAreaHelp" class="form-text text-white"
        >Il testo del messaggio da inviare.</small
      >
    </div>
    <div class="d-flex justify-content-end">
      <button class="btn btn-danger">SEND</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      form: {
        email: "",
        message: "",
      },
    };
  },
};
</script>

<style>
</style>