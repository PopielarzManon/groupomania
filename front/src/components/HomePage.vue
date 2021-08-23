<template >
	<div>
	<v-app-bar class="d-flex justify-center flex-row align-center">
	<router-link to="/signup" class="routerLink">S'inscrire</router-link> |
    <router-link to="/login" class="routerLink">Se connecter</router-link> |
    <router-link to="/" class="routerLink"> Acceuil</router-link> 
	</v-app-bar>
	<div class="d-flex justify-center flex-column align-center">
		<img alt="Vue logo" src="../assets/logo.png">
    <h1>Bienvenue sur Group+</h1>
    <p><em>La plateforme communautaire de Groupomania</em></p>
	<p>Connectez vous pour communiquer !</p>
	</div>	
    </div>

</template>


<script>
export default {
	name: 'HomePage',
}
</script>


<style lang="scss" scoped>
.routerLink{

		font-size: 1.5vw;
		color: pink;
		text-decoration: none;
		padding: 1vw;
	&:hover{
			color: rgb(37, 37, 37);
		}

}
h1{
	font-size: 3vw;
}
p{
	font-size: 1.5vw;
}
	img{
		height: 25vw;
		width: 25vw;
		}

</style>