
<template>
  <div class="sign">
    <v-app-bar class="d-flex justify-center flex-row align-center">
      <router-link to="/signup" class="routerLink">S'inscrire</router-link> |
      <router-link to="/login" class="routerLink">Se connecter</router-link> |
      <router-link to="/" class="routerLink"> Acceuil</router-link>
    </v-app-bar>
    <p class="d-flex justify-center txt">
      <b> Inscrivez vous des maintenant !</b>
    </p>
    <div class="d-flex justify-center">
      <v-app id="inspire">
        <v-form v-model="valid">
          <v-container>
            <v-row>
              <!-- <v-col cols="12" md="4">
                <v-text-field
                  v-model="user.firstName"
                  :rules="nameRules"
                  :counter="20"
                  label="Prénom"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model="user.lastName"
                  :rules="nameRules"
                  :counter="10"
                  label="Nom"
                  required
                ></v-text-field>
              </v-col> -->

                            <v-col cols="12" md="4">
                <v-text-field
                  v-model="user.pseudo"
                  :rules="nameRules"
                  :counter="10"
                  label="Pseudo"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model="user.email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                type="password"
                  v-model="user.password"
                  :rules="passwordRules"
                  :counter="20"
                  label="Mot de passe"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  :rules="passwordConfirmationRules"
                  label="Confirmation du Mot de passe"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
        <div class="d-flex justify-center">
          <v-btn class="btn" elevation="2" large @click="signUp"> S'inscrire </v-btn>
        </div>
      </v-app>
    </div>
  </div>
</template>
<script>
export default {
  name: "Sign",

  data() {
    return {
      valid: false,
      user: {
        password:'',
        email:'',
        pseudo:''
      },
      nameRules: [
        v => !!v || "Champs Obligatoire",
        v => v.length <= 20 || "Votre nom doit comporter moins de 20 caractères",
      ],
      emailRules: [
        v => !!v || "Champs Obligatoire",
        v => /.+@.+/.test(v) || "Utilisez un email valide",
        //v => checkEmail puis fetch vers db OU popup erreur
      ],
      passwordConfirmationRules: [
        v => !!v || "Champs Obligatoire",
        v => this.user.password === v || "Le mot de passe ne correspond pas",
      ],
      passwordRules:[
        v => !!v || "Champs Obligatoire",
        v => v.length >= 8 || "Mot de passe faible"
      ],
    };



  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    signUp() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.user),
      };
      fetch("http://localhost:3000/api/auth/signup/", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.userId) {
            this.$store.commit('LOGIN',data)
            this.$router.push('Wall');
          }
        });
    },
  },

}
</script>

<style lang="scss" scoped>
.routerLink {
  font-size: 1.5vw;
  color: pink !important;
  text-decoration: none;
  padding: 1vw;
  &:hover {
    color: rgb(0, 0, 0);
  }
}
.sign {
  background-color: white;
  font-size: 1.5vw;
  p {
    padding: 2vw;
  }

  label {
    padding: 2vw;
    color: pink;
  }
}
.btn {
  width: 50%;
  color: pink !important;
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