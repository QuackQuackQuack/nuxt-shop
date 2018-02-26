<template>
  <div>
    <div>장바구니 갯수 : <Cartquantity/></div>
    <Navigation/>
  </div>
</template>

<script>
import Navigation from '.././components/Navigation.vue'
import Cartquantity from '.././components/Cartquantity'
export default {
  components: {
    Navigation,
    Cartquantity,
  },
}
</script>