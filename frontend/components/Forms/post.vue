<template>
  <div>
    <div class="field">
      <label class="label">Title</label>
      <div class="control">
        <input class="input" v-model="title"   type="text" placeholder="Title">
      </div>
    </div>
    <div class="field">
      <label class="label">Content</label>
      <div class="control">
        <textarea class="textarea" placeholder="Textarea" v-model="content"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "post",
    computed: {
      title: {
        get() {
          return this.$store.state.modal.edit.data.title
        },
        set(newValue) {
          this.$store.dispatch('setFormData', {key: 'title', value: newValue, modal: 'edit'})
        }
      },
      content: {
        get() {
          return this.$store.state.modal.edit.data.content
        },
        set(val) {
          this.$store.dispatch('setFormData', {key: 'content', value: val, modal: 'edit'})
        }
      }
    }
  }
</script>

<style scoped>

</style>
