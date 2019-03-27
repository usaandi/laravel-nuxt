<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Modal title</p>
        <button class="delete" aria-label="close" @click="close"></button>
      </header>
      <section class="modal-card-body">
        <Post></Post>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="save">Save changes</button>
        <button class="button" @click="close">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
  import Post from "./Forms/post";

  export default {
    components: {Post},
    props: ['modal'],
    name: "Modal",
    methods: {
      close() {
        this.$store.dispatch(this.modal.closeAction, this.modal.name);
      },
      save() {
        this.$store.dispatch(this.modal.saveAction, this.modal.name);
      }
    }
  }
</script>

<style scoped>

</style>
