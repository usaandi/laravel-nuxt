<template>
  <div v-scroll="handle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "infiniteScroll",
    props:{
      limit: {
        type: Number,
        default: 90,
        validator: value => (value <=100 && value >= 0)
      },
      loading: {
        type: Boolean,
        default: false,
      }
    },
    methods: {
      handle(evt, el){
        let elHeight = el.clientHeight;
        let pageBottom = evt.target.defaultView.innerHeight + evt.target.defaultView.scrollY;
        let percentageScrolled = pageBottom * 100 / elHeight;
        if(percentageScrolled > this.limit && !this.loading){
          this.$emit('limit');
        }
      }
    }
  }
</script>

<style scoped>

</style>
