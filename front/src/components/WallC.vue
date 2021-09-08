<template >
  <div id="app" class="wall">
    <li v-for="(message,index) in messages" :key="message.id">
      <v-app id="inspire" class="card">
        <v-card>
          <v-card-title>
            {{ message.title }}
          </v-card-title>

          <v-img
            :src="message.attachment"
            contain
            max-height="400"
            max-width="400"
          ></v-img>

          <v-card-text>
            <v-row align="center" class="mx-0"> </v-row>
          </v-card-text>

          <v-card-text>
            <div>
              {{ message.content }}
            </div>
          </v-card-text>
          <v-card-text>
            <div class="color">
              {{ message.createdAt }}- {{ message.User.pseudo }}
            </div>
          </v-card-text>

          <v-card-actions>
            <router-link
              :to="{ name: 'Comments', params: { messageId: message.id } }"
              ><v-btn color="pink lighten-2" text>
                Commentaires
              </v-btn></router-link
            >
            <v-btn color="pink lighten-2"
             v-if="getUser.id == message.UserId || getUser.isAdmin == 1"
             text
            >
              <v-icon @click.prevent="deleteMessage(message.id, index)">
                mdi-trash-can-outline
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-app>
    </li>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  name: "WallC",
  data() {
    return {
      messages: [],
    };
  },
  computed: {
    ...mapGetters(["getUser"]),
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
    deleteMessage(messageId, index) {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + this.$store.getters.getToken,
      },
    };
  
    fetch("http://localhost:3000/api/messages/" + messageId, requestOptions)
      .then(() => {
        this.messages.splice(index,1)
      })
      .catch((error) => console.log("cannot delete msg " + error));
  },

  },
};
</script>


<style lang="scss" scoped>
.wall {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  .card {
    margin: 2vw;
  }
  .color {
    color: pink;
  }
}
// v-if="userId == message.UserId || user.isAdmin == 1"
</style>