<template>
  <div class="container text-white mt-5">
    <h2>Contact us!</h2>
    <Loader v-if="isLoading" />
    <div v-else>
      <Alert v-if="alertMessage" type="success" :message="alertMessage" />
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
        <button class="btn btn-danger" @click="sendForm">SEND</button>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from "../Alert.vue";
import Loader from "../Loader.vue";
export default {
  name: "ContactPage",
  components: { Alert, Loader },
  data() {
    return {
      form: {
        email: "",
        message: "",
      },
      isLoading: false,
      alertMessage: "",
    };
  },
  methods: {
    sendForm() {
      this.isLoading = true;
      axios
        .post("http://127.0.0.1:8000/api/messages", this.form)
        .then((res) => {
          this.form.email = "";
          this.form.message = "";
          this.alertMessage = "Messaggio mandato con successo";
        })
        .catch((err) => {})
        .then(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>

<style>
</style>