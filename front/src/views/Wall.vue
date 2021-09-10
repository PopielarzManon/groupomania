<template>
  <div class="wall">
 <Header />
  <h1>A la une sur le mur...</h1>
<div id="app">
  
  <WallC />

</div>

  <Footer />
          <v-btn icon class="float">
        <router-link to="/messages" class="routerLink">
        <v-icon class="my-float">mdi-message-text</v-icon>
        </router-link>
      </v-btn>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import WallC from '../components/WallC.vue'

export default {
  name: 'Wall',
  components: {
    Header,  WallC,
    Footer
   
  }
}

</script>
<style lang="scss" scoped>
.wall{
  background-image: url("../assets/back.png")

}
.float{
	position:fixed;
	width:5vw !important;
	height:5vw !important;
	bottom: 3vw;
	right:3vw;
	background-color:pink;
	color:#FFF;
	border-radius:50px;
	text-align:center;
	box-shadow: 2px 2px 3px #999;
  .my-float{
    font-size: 2.5vw !important;
      color: rgb(255, 255, 255) !important;
      &:hover{
        color: rgb(145, 145, 145)  !important;;
      }
  }
}
h1{
  text-align: center;
  color: pink;
  padding: 2vw;
}
a{
  text-decoration: none !important;
}
@media (min-width: 320px) and (max-width: 426px) {
  h1{
    padding-top: 15vw;
    font-size: 6vw;
  }
  .float{
	position:fixed;
	width:10vw !important;
	height:10vw !important;
	bottom: 7vw;
	right:7vw;
	background-color:pink;
	color:#FFF;
	border-radius:50px;
	text-align:center;
	box-shadow: 2px 2px 3px #999;
  .my-float{
    font-size: 6vw !important;
    
      color: rgb(255, 255, 255) !important;
      &:hover{
        color: rgb(145, 145, 145)  !important;;
      }
  }
}
a{
  text-decoration: none !important;
}
}
</style>
