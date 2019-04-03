<template>
  <article class="media">
    <div class="media-left">
      <figure v-if="post.images">
        <img :src="post.images[0].src" width="100" height="100">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <div>
          <strong class="card-title">{{post.title}}</strong>
        </div>
        <p class="card-body">
          {{post.content}}
        </p>
        <time :datetime="$moment(post.created_at).format()">last updated: {{$moment(post.updated_at).fromNow()}}
        </time>

      </div>
      <nav class="level is-mobile ">
        <div class="level-left">
          <a class="level-item">
            <span class="icon is-small" @click="hasLiked"><i class="fas fa-heart" :class="{'has-text-danger':liked}"></i></span>
          </a>
          <a class="level-item">
            <span class="icon is-small" @click="hasDisliked"><i class="fas fa-heart-broken " :class="{'has-text-danger':disliked}"></i></span>
          </a>
          <a class="level-item">
            <span class="icon is-small"><i class="fas fa-comment"></i></span>
          </a>
        </div>
      </nav>
    </div>
    <div class="media-right">
      <button class="delete"></button>
    </div>
  </article>
</template>

<script>
  export default {
    props: ['post'],
    name: "Post",
    data() {
      return {
        liked: false,
        disliked: false,

      }
    },
    methods: {
      hasLiked() {
        this.liked = !this.liked;
        this.disliked = false;
      },
      hasDisliked() {
        this.disliked = !this.disliked;
        this.liked = false;

      }
    }
  }
</script>

<style scoped>
  .media {
    border: 1px solid rgba(219, 219, 219, 0.5);
    /* margin-top: 1rem; */
    margin: 1rem;
    padding: 1rem;
  }
</style>
