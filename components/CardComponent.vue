<template>
  <div class=" col-lg-3 col-md-4 col-sm-6 col-xl-20" @click="toShow(show.id)">
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
</template>
<script>
  export default {
    props: ['show'],
    methods: {
      toShow(id) {
        this.$router.push({
          path: '/show/' + id
        });
      }
    }
  }
</script>
