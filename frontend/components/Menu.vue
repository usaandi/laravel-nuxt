<template>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" v-for="(link,index) in links" :key="index" :href="link.link" :class="{'is-active':routeActive(link.link)}">
            {{link.title}}
          </a>
        </div>
      </div>
    </nav>
</template>

<script>
  export default {
    name: "Menu",
    data() {
      return {
        links: [{title: 'Posts', link: '/posts'}, {title: 'Index', link: '/'},]
      }
    },
    computed: {},
    methods: {
      routeActive(link) {
        return link === this.$route.fullPath;
      }
    }
  }
</script>

<style scoped>
  section {
    width: 20%;
  }
</style>
