<script>
export default {
	name: 'Log',
     data: () => ({
    valid: false,
    email: '',
    emailRules: [
      v => !!v || 'Champs Obligatoire',
      v => /.+@.+/.test(v) || 'Utilisez un email valide',
    ],
  // }),
})
}
</script>
<template>
    <div class="log">
    <v-app-bar class="d-flex justify-center flex-row align-center">
	<router-link to="/signup" class="routerLink">S'inscrire</router-link> |
    <router-link to="/login" class="routerLink">Se connecter</router-link> |
    <router-link to="/" class="routerLink"> Acceuil</router-link> 
	</v-app-bar>
       <p class="d-flex justify-center txt"><b> Connectez vous !</b></p>
   <div class=" d-flex justify-center cont">
  <v-app id="inspire" >
    <v-form v-model="valid">
      <v-container>
        <v-row>
  
          <v-col
            cols="10"
            md="12"
          >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
          <v-col
            cols="10"
            md="12"
          >
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              :counter="10"
              label="Mot de passe"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <div class=" d-flex justify-center">
      <v-btn class="btn"
  elevation="2"
  large
> S'inscrire
</v-btn>
    </div>
  </v-app>
</div>
    </div>
</template>
<style lang="scss" scoped>

.log{
    background-color: white;
    font-size: 1.5vw;
    p{
        padding: 2vw;
    }

 label{
     padding: 2vw;
     color: pink;
 }
 }
 .btn{
     width: 50%;
      color: pink !important;
 }
  .routerLink{

		font-size: 1.5vw;
		color: pink !important;
		text-decoration: none;
		padding: 1vw;
	&:hover{
			color: rgb(0, 0, 0);
		}

}
</style>