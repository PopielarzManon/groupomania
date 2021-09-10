<template >
  <div id="app" class="comment">
    <h1>Poster votre commentaire !</h1>
    <v-form>
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
        Poster
      </v-btn>
    </div>
    <h1>Les autres commentaires...</h1>
    <div class="allComments">
      <li v-for="(comment, index) in comments" :key="comment.id">
        <v-app id="inspire" class="card">
          <v-card class="bc">
            <v-card-title>
              <span class="text-h6 font-weight-light">{{ message.title }}</span>
            </v-card-title>

            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3"
                  ><img src="../assets/logoicon.png" class="icn" />
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>{{
                    comment.User.pseudo
                  }}</v-list-item-title>
                </v-list-item-content>
                <v-btn
                  color="pink lighten-2"
                  v-if="getUser.id == comment.userId || getUser.isAdmin == 1"
                  text
                >
                  <v-icon @click.prevent="deleteComment(comment.id, index)">
                    mdi-trash-can-outline
                  </v-icon>
                </v-btn>
              </v-list-item>
            </v-card-actions>

            <v-card-text class="text-h5 font-weight-bold">
              {{ comment.content }}
            </v-card-text>
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
    ...mapGetters(["getToken", "getUser"]),
  },

  name: "CommentC",
  data() {
    return {
      comment: {
        content: "",
      },
      message: {
        title: "",
      },
      commentRules: [
        (v) => v.length <= 250 || "Name must be less than 10 characters",
      ],
      comments: [],
    };
  },
  methods: {
    deleteComment(commentId, index) {
      const requestOptions = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + this.$store.getters.getToken,
        },
      };
      const messageId = this.$route.params.messageId;
      fetch(
        "http://localhost:3000/api/messages/" +  messageId + "/comments/" + commentId,
        requestOptions
      )
        .then(() => {
          this.comments.splice(index, 1);
        })
        .catch((error) => console.log("cannot delete comment " + error));
    },

    postComment() {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + this.$store.getters.getToken,
        },
        body: JSON.stringify(this.comment),
      };
      const messageId = this.$route.params.messageId;
      fetch(
        "http://localhost:3000/api/messages/" + messageId + "/comments",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.comment.content) {
            data.comment.User = {};
            data.comment.User.pseudo = this.getUser.pseudo;
            this.comments.unshift(data.comment);
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
    const messageId = this.$route.params.messageId;
    fetch(
      "http://localhost:3000/api/messages/" + messageId + "/comments",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        this.comments = data;
      });
    fetch(
      "http://localhost:3000/api/messages/" + messageId + "/comments",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        this.message.title = data.title;
      });
  },
};
</script>


<style lang="scss" scoped>
.comment {
  padding: 2vw;
  list-style: none;
}
h1 {
  text-align: center;
  color: pink;
  padding: 2vw;
  font-size: 2vw;
}
.card {
  max-height: 40vh !important;
  padding: 1vw;
}
.bc {
  background-color: rgb(247, 247, 247) !important;
}
@media (min-width: 320px) and (max-width: 426px) {
  .comment {
  margin: 4vw;
  list-style: none;
}
h1 {
  text-align: center;
  color: pink;
  padding: 3vw;
  font-size: 5vw;
}
.card {
  max-height: 47vh !important;
  padding: 1vw;
}
.bc {
  background-color: rgb(247, 247, 247) !important;
}
}
</style>