<template>
  <section class="section">
    <aside class="menu">
      <p class="menu-label">
        General
      </p>
      <ul class="menu-list">
        <li v-for="(link,index) in links" :key="index" >
          <a :href="link.link" :class="{'is-active':routeActive(link.link)}">{{link.title}}</a>
        </li>
      </ul>
    </aside>
  </section>
</template>

<script>
  export default {
    name: "Menu",
    data() {
      return {
        links: [{title: 'Posts', link: '/posts'},{title: 'Index', link: '/'},]
      }
    },
    computed: {


    },
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
