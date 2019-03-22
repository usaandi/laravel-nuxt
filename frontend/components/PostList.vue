<template>
  <div class="container add-margin-t52 card py-3">
    <infinite-scroll @limit="loadPosts" :loading="this.$store.state.isLoading">
      <Post v-for="(post,index) in $store.state.list" :post="post" :key="index"></Post>
    </infinite-scroll>
  </div>
</template>

<script>
  import Post from "./Post";
  import InfiniteScroll from "./infiniteScroll";

  export default {
    name: "PostList",
    components: {InfiniteScroll, Post},
    data() {
      return {
        posts: '',
      }
    },

    created() {
     /* this.$axios.$get('posts').then(response => {
        this.posts = response.data;
      });*/
      this.$store.dispatch('loadNextPosts');
    },
    methods: {
      loadPosts() {
        this.$store.dispatch('loadNextPosts');
      }
    }
  }
</script>

<style scoped>

</style>
