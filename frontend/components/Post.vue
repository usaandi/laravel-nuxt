<template>
  <article class="media">
    <div class="media-left">
      <img :src="'https://picsum.photos/100?blur&random&id='+post.id" width="100" height="100">
    </div>
    <div class="media-content">
      <div class="content">
        <div>
          <strong class="card-title">{{post.title}}</strong>
        </div>
          <p class="card-body">
            {{post.content}}
          </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item">
            <span class="icon is-small"><i class="fas fa-reply"></i></span>
          </a>
          <a class="level-item">
            <span class="icon is-small"><i class="fas fa-retweet"></i></span>
          </a>
          <a class="level-item">
            <span class="icon is-small"><i class="fas fa-heart"></i></span>
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
    name: "Post"
  }
</script>

<style scoped>

</style>
