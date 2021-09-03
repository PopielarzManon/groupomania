<template >
  <div id="app" class="wall">
    <li v-for="message in messages" :key="message.id">
      <v-app id="inspire" class="card">
        <v-card
      >
          <v-card-title>
            {{ message.title }} - {{ message.User.pseudo }}
            </v-card-title>
          
          
            <v-img :src=" message.attachment "
            contain
            max-height="400"
              max-width="400"></v-img>
            


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
.wall{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  .card{
    margin:2vw;
  }
}
</style>