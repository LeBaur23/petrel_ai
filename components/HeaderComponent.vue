<template>
  <v-app-bar
    color="deep-purple accent-4"
    dark
    dense
    fixed
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <nuxt-link to="/">
    <v-toolbar-title>Main page</v-toolbar-title>
    </nuxt-link>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <nuxt-link to="/search">
      <v-btn icon>
        <v-icon >mdi-magnify

        </v-icon>
      </v-btn>
    </nuxt-link>

    <v-menu
      left
      bottom
    >
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
    </v-menu>
  </v-app-bar>
</template>
