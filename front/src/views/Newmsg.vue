<template>
  <div class="add_msg">
  <Header />
  
<div id="app">
  
  <NewmsgC />

</div>

  <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import NewmsgC from'../components/NewmsgC.vue'

export default {
  name: 'SignUp',
  components: {
    Header, Footer, NewmsgC
  }
}

</script>