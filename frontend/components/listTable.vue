<template>
  <table class="table is-bordered is-hoverable is-striped">
    <thead>
    <td v-for="(key,index) in keys">{{key}}</td>
    </thead>
    <tbody>
    <tr v-for="item in objects">
      <td v-for="key in keys">{{item[key]}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: "listTable",
    props: ['objects', 'keys'],

    computed: {
      header() {
        return (this.objects.length) ? this.objects[0].keys : [];
      }
    }
  }
</script>

<style scoped>

</style>
