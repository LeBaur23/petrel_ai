<template>
  <div class="row shows-row">
    <card-component v-for="(show, index) in shows" :key="index" :show="show"></card-component>
    <div class="col-12">
      <v-pagination
        v-model="page"
        class="my-4"
        :length="15"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['shows'],
    data() {
      return {
        page: 1
      }
    },
    watch: {
      page: async function(val) {
        const shows = await this.$axios.get('http://api.tvmaze.com/shows?page=' + val);
        this.$emit('changed', shows.data.slice(0, 20))
      }
    }
  }
</script>
