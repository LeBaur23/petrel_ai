<template>
  <div class="search-page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 d-flex">
          <v-text-field
            label="Solo"
            solo
            small
            placeholder="Placeholder"
            v-model="searchText"
          ></v-text-field>
          <v-btn color="primary_brand ml-3" @click="changed">Search</v-btn>
        </div>

        <div class="col-12" v-if="shows !== null">
          <div class="row">
            <card-component :show="shows"></card-component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        shows: null,
        page: 1,
        searchText: ''
      }
    },
    methods: {
      async changed() {
        if (this.searchText !== '') {
          const shows = await this.$axios.get('http://api.tvmaze.com/singlesearch/shows?q=' + this.searchText);
          this.shows = shows.data
        }
      }
    },
    head: {
      title: 'Search shows'
    }
  }
</script>

