<template>
  <div class="comments">
  <Header />
  
<div id="app">
  
  <CommentC />

</div>

  <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import CommentC from'../components/CommentC.vue'

export default {
  name: 'Comments',
  components: {
    Header, Footer, CommentC
  }
}

</script>
<style lang="scss" scoped>

</style>