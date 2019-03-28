<template>
  <div class="container mt-4">
    <pagination :pagination="$store.state.pagination" @paging="loadPage" :delta="1">
      <list-table @edit="edit" :objects="$store.state.list" :keys="tableKeys" :actions="actions"></list-table>
    </pagination>
    <awesome-modal v-if="modalActive" :modal="editModal"></awesome-modal>
  </div>
</template>

<script>
  import ListTable from "../../components/listTable";
  import Pagination from "../../components/Pagination";
  import AwesomeModal from "../../components/AwesomeModal";

  export default {
    name: "list",
    components: {AwesomeModal, Pagination, ListTable},
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
      },
      edit(id) {
        this.$store.dispatch('toggleModal','edit');
        this.$store.dispatch('setModalData', {id:id, modal:'edit'});

      }
    },
    computed: {
      modalActive() {
       return this.$store.state.modal.edit.active;
      },
      editModal(){
        return this.$store.state.modal.edit;
      }
    }
  }
</script>

<style scoped>

</style>
