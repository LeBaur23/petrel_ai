<template>
  <div class="show-page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4">
          <v-responsive aspect-ratio="0.75">
            <v-img v-show="showImage" :lazy-src="shows.image.original" :src="shows.image.original" >
            </v-img>
            <v-skeleton-loader
              v-show="!showImage"
              type="image"
              height="100%"
            ></v-skeleton-loader>
          </v-responsive>

        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-2">
              <div class="show__title">
                Name:
              </div>
            </div>
            <div class="col-10">{{ shows.name }}</div>
            <div class="col-2">
              <div class="show__title">
                Summary:
              </div>
            </div>
            <div class="col-10">
              <div class="show__summary">
                <div v-html="shows.summary"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>Just test text</div>
    </div>
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
        showImage: false
      }
    },
    watch: {
      shows: async function(val) {
        var i = new Image();
        console.log(val)
      }
    },
    beforeMount() {
      if (process.client && this.shows !== null) {
        var i = new Image();
        i.onload = (() => {
          this.showImage = true
        });
        i.src = this.shows.image.original
      }
    },
    async asyncData({ $axios, route }) {
      const data = await $axios.get('http://api.tvmaze.com/shows/' + route.params.id);
      return { shows: data.data }
    },
    head () {
      return {
        title: this.shows.name
      }
    }
  }
</script>
