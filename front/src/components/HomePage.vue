<template >
  <div>
 
      <v-app-bar class="d-flex justify-center flex-row align-center he">
        <router-link to="/signup" class="routerLink">S'inscrire</router-link> |
        <router-link to="/login" class="routerLink">Se connecter</router-link> |
        <router-link to="/" class="routerLink"> Acceuil</router-link>
      </v-app-bar>

    <div class="d-flex justify-center flex-column align-center">
      <img alt="Vue logo" src="../assets/logo.png" />
      <h1>Bienvenue sur Meme+</h1>
      <p><em>La plateforme communautaire de Groupomania</em></p>
      <p>
        <em>Où le partage de memes centrés autour du code sont maîtres!</em>
      </p>
      <p>Connectez vous pour communiquer !</p>
    </div>
  </div>
</template>


<script>
export default {
  name: "HomePage",
};
</script>


<style lang="scss" scoped>
.routerLink {
  font-size: 1.5vw;
  color: pink;
  text-decoration: none;
  padding: 1vw;
  &:hover {
    color: rgb(37, 37, 37);
  }
}
h1 {
  font-size: 3vw;
}
p {
  font-size: 1.5vw;
}
img {
  height: 25vw;
  width: 25vw;
}
@media (min-width: 320px) and (max-width: 426px) {
  .routerLink {
    font-size: 4vw !important;
    color: pink;
    text-decoration: none;
    padding: 2vw;

    &:hover {
      color: rgb(37, 37, 37);
    }
  }
  h1 {
    font-size: 6vw;
  }
  p {
    font-size: 5vw;
    text-align: center;
  }
  img {
    height: 40vw;
    width: 40vw;
  }
}
</style>