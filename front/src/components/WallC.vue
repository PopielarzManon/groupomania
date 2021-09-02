<template >
  <div id="app" class="wall">
    <li v-for="message in messages" :key="message.id">
      <v-app id="inspire">
        <v-card class="mx-auto my-12">
          <v-card-title
            >{{ message.title }} - {{ message.User.pseudo }}</v-card-title
          >
          <v-img :src="message.attachment"></v-img>

          <v-card-text>
            <v-row align="center" class="mx-0"> </v-row>
          </v-card-text>

          <v-card-text>
            <div>
              {{ message.content }}
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="pink lighten-2" text> Commentez ! </v-btn>
            <v-btn color="pink lighten-2" text> Voir les commentaires </v-btn>
          </v-card-actions>
        </v-card>
      </v-app>
    </li>
  </div>
</template>


<script>
export default {
  name: "WallC",
  data() {
    return {
      messages: [],
    };
  },
  mounted() {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + this.$store.getters.getToken,
      },
    };
    fetch("http://localhost:3000/api/messages", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        this.messages = data;
      });
  },
  methods: {
    //ajout this.unshifted
  },
};
</script>


<style lang="scss" scoped>
</style>