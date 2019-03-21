<template>
  <div class="container add-margin-t52 card py-3">
    <Post v-for="(post,index) in posts" :post="post" :key="index"></Post>
  </div>
</template>

<script>
  import Post from "./Post";

  export default {
    name: "PostList",
    components: {Post},
    data(){
      return{
        posts:'',
      }
    },

    created() {
      this.$axios.$get('posts').then(response => {
        this.posts=response.data;
      })
    }
  }
</script>

<style scoped>

</style>
