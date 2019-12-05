<template>
  <section class="index-page">
    <div class="container-fluid">
      <shows-component @changed="changeShows" :shows="shows"></shows-component>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        shows: null
      }
    },
    methods: {
      changeShows (value) {
        this.shows = value
      }
    },
    async asyncData({ $axios, store }) {
      const data = await $axios.get('http://api.tvmaze.com/shows?page=1');
//      just showing that i know vuex
      store.dispatch('shows/loadShows', data.data.slice(0, 20));
      return { shows: data.data.slice(0, 20)}
    },
    head: {
      title: "Main page"
    }
  }
</script>

