<template>
  <div class="container mt-4">
    <pagination :pagination="$store.state.pagination" @paging="loadPage" :delta="1">
      <list-table :objects="$store.state.list" :keys="tableKeys" :actions="actions"></list-table>
    </pagination>
  </div>
</template>

<script>
  import ListTable from "../../components/listTable";
  import Pagination from "../../components/Pagination";

  export default {
    name: "list",
    components: {Pagination, ListTable},
    data() {
      return {
        tableKeys: [
          {key: 'id', title: 'Id'},
          {key: 'title', title: 'Title'},
          {key: 'created_at', title: 'Creation date'}
        ],
        actions: [
          {title: 'Edit', color: 'is-primary'},
          {title: 'Delete', color: 'is-danger'}
        ]
      }
    },
    created() {
      this.$store.dispatch('loadPostPage', 1);
    },
    methods: {
      loadPage(page) {
        this.$store.dispatch('loadPostPage', page);
      }
    }
  }
</script>

<style scoped>

</style>
