<template>
    <div class="foot">
        <v-footer class="d-flex justify-center flex-row align-center vFooter">
            <ul >
                <li><a class="text-secondary" href="#">Mentions légales</a></li>
                <li><a class="text-secondary" href="#">Signaler un bug</a></li>
                <li><a class="text-secondary copyright" href="#">Groupomania © 2021</a></li>
            </ul>
         </v-footer>
    </div>
</template>


<script>
export default {
    name: 'Footer',
}
</script>

<style lang="scss">
.vFooter{
  font-size: 1.5vw;
  background-color: pink !important;

    ul{

        display: flex;
        flex-direction: row;
        justify-content: center;
        
        li{
            padding: 2vw;
            list-style-type: none !important;
            a{
                color: rgb(255, 255, 255);
                
            }
            }

    }
    }
    
</style>