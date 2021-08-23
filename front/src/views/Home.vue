<template>
<div>
<HomePage />
<Footer />
</div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import HomePage from '@/components/HomePage'

  export default {
    name: 'Home',

    components: {
      HomePage, Footer
    }
  }
</script>
