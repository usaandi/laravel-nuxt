<template>
  <div>
    <slot></slot>
    <nav class="pagination is-centered" role="navigation" aria-label="pagination">
      <button class="pagination-previous" :disabled="isStartOfPage" @click="loadPreviousPage">Previous</button>
      <button class="pagination-next" :disabled="isEndOfPage" @click="loadNextPage">Next page</button>
      <ul class="pagination-list">
        <pagination-link
          v-for="page in pageArray" :page="page"
          :current="pagination.current_page === page"
          @clicked="$emit('paging',page)"
        >
        </pagination-link>

      </ul>
    </nav>
  </div>
</template>

<script>
  import PaginationLink from "./PaginationLink";

  export default {
    name: "Pagination",
    components: {PaginationLink},
    props: {
      pagination: {},
      delta: {
        default: 2,
      }
    },
    methods: {
      loadNextPage() {
        if (this.pagination.current_page !== this.pagination.last_page) {
          this.$emit('paging', this.pagination.current_page + 1);
        }
      },
      loadPreviousPage() {
        if(this.pagination.current_page > 1){
          this.$emit('paging', this.pagination.current_page - 1);
        }
      }
    },
    computed: {
      pageArray() {
        let current = this.pagination.current_page,
          last = this.pagination.last_page,
          delta = this.delta,
          left = current - delta,
          right = current + delta + 1,
          range = [],
          rangeWithDots = [],
          l;

        for (let i = 1; i <= last; i++) {
          if (i === 1 || i === last || i >= left && i < right) {
            range.push(i);
          }
        }
        for (let i of range) {
          if (l) {
            if (i - l === 2) {
              rangeWithDots.push(l + 1);
            } else if (i - l !== 1) {
              rangeWithDots.push('...');
            }
          }
          rangeWithDots.push(i);
          l = i;
        }
        return rangeWithDots;
      },
      isStartOfPage() {
        return this.pagination.prev_page_url === null;
      },
      isEndOfPage() {
        return this.pagination.next_page_url === null;
      }
    }

  }
</script>

<style scoped>
 nav > button{
   background-color: whitesmoke;
 }
 nav > button:hover{
   background-color: white;
 }
</style>
