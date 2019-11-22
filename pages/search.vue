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
            <div class=" col-lg-3 col-md-4 col-sm-6 col-xl-20">
              <v-card>
                <v-img
                  height="200px"
                  :src="shows.image.original"
                >
                </v-img>
                <v-card-title>
                  {{ shows.name }}
                </v-card-title>

                <v-card-text class="text--primary">
                  <v-row
                    align="center"
                    class="mx-0"
                  >
                    <v-rating
                      class="rating-stars"
                      :value="shows.rating.average"
                      length="10"
                      color="amber"
                      dense
                      half-increments
                      readonly
                      size="14"
                    ></v-rating>
                    <div class="grey--text ml-4">{{ shows.rating.average }}</div>
                  </v-row>
                </v-card-text>
              </v-card>
            </div>
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
          console.log(shows.data);
          this.shows = shows.data
        }
      }
    }
  }
</script>

