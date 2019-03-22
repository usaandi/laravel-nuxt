<template>
  <li>
    <a
      v-if="page!=='...'"
      class="pagination-link"
      :aria-label="'Goto page ' + page"
      :class="{'is-current': current,'has-text-white':current}"
      @click="$emit('clicked')"
    >{{page}}</a>
    <span
      v-if="page === '...'"
      class="pagination-ellipsis"
    >&hellip;</span>
  </li>
</template>

<script>
  export default {
    name: "PaginationLink",
    props: ['page', 'current']
  }
</script>

<style scoped>
</style>
