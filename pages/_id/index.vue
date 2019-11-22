<template>
  <section class="index-page">
    <div class="container-fluid">
      <div class="row">
        <div class=" col-lg-3 col-md-4 col-sm-6 col-xl-20" v-for="(show,index) in shows" :key="index">
          <v-card>
            <v-img
              height="200px"
              :src="show.image.original"
            >
            </v-img>
            <v-card-title>
              {{ show.name }}
            </v-card-title>

            <v-card-text class="text--primary">
              <v-row
                align="center"
                class="mx-0"
              >
                <v-rating
                  class="rating-stars"
                  :value="show.rating.average"
                  length="10"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>
                <div class="grey--text ml-4">{{ show.rating.average }}</div>
              </v-row>
            </v-card-text>
          </v-card>
        </div>
        <div class="col-12">
          <v-pagination
            v-model="page"
            class="my-4"
            :length="15"
          ></v-pagination>
        </div>
      </div>
    </div>
  </section>
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
        page: 1
      }
    },
    watch: {
      page: async function(val) {
        const shows = await this.$axios.get('http://api.tvmaze.com/shows?page=' + val);
        this.shows = shows.data.slice(0, 20);
      }
    },
    async asyncData({ $axios, route, redirect }) {
      try {
        const data = await $axios.get('http://api.tvmaze.com/shows?page=' + route.params.id);
        return { shows: data.data.slice(0, 20), page: parseInt(route.params.id)}
      } catch (e) {
        return redirect('/');
      }
    }
  }
</script>
