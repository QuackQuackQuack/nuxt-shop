<template>
  <div class="cart">
    <h3>Your Cart</h3>
    <p v-show="!products.length"><i>Please add some products to cart.</i></p>
    <ul>
      <li v-for="(product,index) in products" v-bind:key="index">
        <div>
          <div>id: {{ product.id }}</div>
          <div>size: {{ product.size}}</div>
          <div>quantity: {{ product.quantity}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      products: 'cartProducts',
      // checkoutStatus: 'checkoutStatus',
      // total: 'cartTotalPrice'
    })
  },
  methods: {
    // checkout (products) {
    //   this.$store.dispatch('checkout', products)
    // }
  }
}
</script>