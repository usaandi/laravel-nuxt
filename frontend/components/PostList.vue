<template>
  <div class="container">
    <Post v-for="(post,index) in posts" :post="post"></Post>
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
        console.log(response);
        this.posts=response.data;
      })
    }
  }
</script>

<style scoped>

</style>
