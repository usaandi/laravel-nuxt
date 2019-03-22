<template>
  <div>
    <nuxt-child></nuxt-child>
    <post-list></post-list>
  </div>
</template>

<script>
  import PostList from "../../components/PostList";

  export default {
    name: "posts",
    components: {PostList}
  }
</script>

<style scoped>
</style>
