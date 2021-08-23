<template>
  <div class="LogIn">
  <Log/>
  <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Log from '@/components/Log.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'LogIn',
  components: {
    Log, Footer
  }
}

</script>