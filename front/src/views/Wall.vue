<template>
  <div class="wall">
 <Header />
  
<div id="app">
  <WallC />

</div>

  <Footer />
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
