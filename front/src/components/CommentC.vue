<template >
  <div id="app" class="comment">
    <h1>Poster votre commentaire !</h1>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="comment.content"
              :rules="commentRules"
              :counter="250"
              label="Votre commentaire !"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <div class="d-flex justify-center">
      <v-btn class="btn" elevation="2" large @click="postComment">
        Poster votre commentaire !
      </v-btn>
    </div>
    <h1>Les autres commentaires...</h1>
    <div class="allComments">
      <li v-for="comment in comments" :key="comment.id">
        <v-app id="inspire" class="card">
          <v-card class="mx-auto" dark>
            <v-card-title>
              <v-icon large left> mdi-twitter </v-icon>
              <span class="text-h6 font-weight-light">{{
                getMessages.title
              }}</span>
            </v-card-title>

            <v-card-text class="text-h5 font-weight-bold">
              {{ comments.content }}
            </v-card-text>

            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3"> </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>{{ getUser.pseudo }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-app>
      </li>
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getToken"], ["getUser"], ["getMessages"]),
  },

  name: "CommentC",
  data() {
    return {
    comment:{
      content: "",
        },
      commentRules: [
      v => v.length <= 250 || 'Name must be less than 10 characters',
    ],
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    
    postComment() {
      const newFormC = new FormData();
      newFormC.append("content",this.comment.content);
      // newForm.append("UserId", this.$store.getters.getUser.pseudo);
      const requestOptions = {
        method: "POST",
        headers: {
          // "Content-Type": "multipart/form-data",
          authorization: "Bearer " + this.$store.getters.getToken,
        },
        body: newFormC,
      };
      fetch("http://localhost:3000/api/:messagesId/comments", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.message.title) {
            alert("Votre commentaire a bien été posté !");
            this.$router.push("/:messagesId/comments");
          }
          
        });
    },
  },

  mounted() {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + this.$store.getters.getToken,
      },
    };
    fetch("http://localhost:3000/api/:messagesId/comments", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        this.comments = data;
      });
      
   },  
}  
</script>


<style lang="scss" scoped>
.comment {
  padding-top: 2vw;
}
h1 {
  text-align: center;
  color: pink;
  padding: 2vw;
  font-size: 2vw;
}

</style>