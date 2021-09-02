<template>
  <div id="app">
    <v-app id="inspire">
           <p class="d-flex justify-center txt">
      <b> Postez un message ! !</b>
    </p>
      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="message.title"
                :rules="titleRules"
                :counter="30"
                label="Titre"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="message.content"
                :rules="contentRules"
                :counter="140"
                label="Contenu"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4"
              ><div id="app">
                <v-file-input
                  show-size
                  v-model="message.attachment"
                  counter
                  multiple
                  label="File input"
                  required
                ></v-file-input>
              </div>
 
            </v-col>
          </v-row>
        </v-container>
      </v-form>
           <div class="d-flex justify-center">
          <v-btn class="btn" elevation="2" large @click="postMsg"> Poster </v-btn>
        </div>
    </v-app>
  </div>
</template>
<script>
export default {
  name: "NewmsgC",

  data() {
    return {
      valid: false,
      message: {
        title: '',
        content: '',
        attachment: ''
      },
      titleRules: [
        (v) => !!v || "Champs Obligatoire",
        (v) =>
          v.length <= 20 || "Votre titre doit comporter moins de 30 caractères",
      ],
      contentRules: [
        (v) => !!v || "Champs Obligatoire",
        (v) =>
          v.length <= 20 ||
          "Votre contenu doit comporter moins de 140 caractères",
        //v => checkEmail puis fetch vers db OU popup erreur
      ],
    };
  },
  methods:{
       validate() {
      this.$refs.form.validate();
    }, 
    postMsg() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json",
        // authorization: "Bearer " + this.$store.getters.getToken, 
        },
        body: JSON.stringify(this.message),
      };
      fetch("http://localhost:3000/api/messages", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.message.title) {
            this.$router.push('Wall');
          }
        });
    },
  },

  }
</script>
