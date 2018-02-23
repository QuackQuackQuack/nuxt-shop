<template>
  <div class="app">
    <Header></Header>
    <nuxt></nuxt>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
export default {
  components: {
    Header,
    Footer
  },
  mounted(){
  }
}
</script>