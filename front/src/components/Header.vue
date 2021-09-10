<template>
  <v-card color="grey lighten-4" flat height="4vw" tile>
    <v-toolbar dense>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <router-link to="/wall" class="routerLink"
              ><v-icon class="icn">mdi-home</v-icon></router-link
            >
          </v-btn>
        </template>
        <span>Acceuil</span>
      </v-tooltip>

      <v-toolbar-title>Bienvenue {{ getUser.pseudo }} 👋 </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon @click="logout()">mdi-arrow-up-bold-box-outline</v-icon>
          </v-btn>
        </template>
        <span>Se déconnecter</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon @click="deleteUser()">mdi-trash-can-outline </v-icon>
          </v-btn>
        </template>
        <span>Supprimer votre compte</span>
      </v-tooltip>
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
  methods: {
    logout() {
      this.$store.commit("LOGOUT");
      this.$router.push("/");
    },
    deleteUser() {
      const requestOptions = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + this.$store.getters.getToken,
        },
        body: JSON.stringify(this.getUser),
      };
      fetch("http://localhost:3000/api/auth/" + this.getUser.id, requestOptions)
        .then((res) => {
          console.log(res);
          alert("Votre compte à bien été supprimé !");
          this.$router.push("/");
        })
        .catch((error) => console.log("cannot delete user " + error));
    },
  },
};
</script>

<style lang="scss">
.icn {
  font-size: 2.5vw !important;
  color: rgb(91, 91, 91) !important;
  &:hover {
    color: pink !important;
  }
  a{
    text-decoration: none !important;
  }
}

@media (min-width: 320px) and (max-width: 426px) {
.icn {
  font-size: 5vw !important;
  color: rgb(91, 91, 91) !important;
  text-decoration: none;

  &:hover {
    color: pink !important;
  }
}
  
}
</style>