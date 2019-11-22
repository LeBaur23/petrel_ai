<template>
  <div class="show-page">
    {{ shows }}
  </div>
</template>
<script>

  export default {
    validate ({ params }) {
      // Must be a number
      return /^\d+$/.test(params.id)
    },
    data() {
      return {
        shows: null,
      }
    },
    async asyncData({ $axios, route }) {
      const data = await $axios.get('http://api.tvmaze.com/shows/' + route.params.id);
      return { shows: data.data }
    }
  }
</script>
