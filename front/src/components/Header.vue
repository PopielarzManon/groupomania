<template>
  <v-card color="grey lighten-4" flat height="7vw" tile>
    <v-toolbar dense>
      <v-btn icon>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-toolbar-title>Bienvenue {{ getUser.pseudo }} 👋 </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-arrow-up-bold-box-outline</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapGetters(["getUser"]),
  },
};
</script>

<style lang="scss">
</style>