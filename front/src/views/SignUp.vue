<template>
  <div class="signup">

  
<div id="app">
  <Sign/>

</div>

  <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Sign from '@/components/Sign.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'SignUp',
  components: {
    Sign, Footer
  }
}

</script>

