<template>
  <table class="table is-bordered is-hoverable is-striped">
    <thead>
    <td v-for="key in keys">{{key.title}}</td>
    <td v-if="actions">actions</td>
    </thead>
    <tbody>
    <tr v-for="item in objects">
      <td v-for="key in keys">{{item[key.key]}}</td>
      <td><div class="columns"><div v-for="action in actions" class="column">
        <button @click="$emit(action.title.toLowerCase(), item.id)" class="button" :class="action.color">{{action.title}}</button></div></div></td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: "listTable",
    props: ['objects', 'keys','actions'],

    computed: {
      header() {
        return (this.objects.length) ? this.objects[0].keys : [];
      }
    }
  }
</script>

<style scoped>

</style>
