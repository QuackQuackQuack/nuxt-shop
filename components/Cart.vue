<template>
  <div class="cart" v-bind:class="openCart">
    <div class="remove-all-wrap">
      <button @click="clearCart">Delte All</button>
    </div>
    <ul>
      <li v-for="(product,index) in products" v-bind:key="index">
        <div class="cart-item" :data-id="product.id">
          <div class="thumb"><img :src="product.image"></div>
          <div class="detail">
            <div class="title">{{ product.title }}</div>
            <div class="color">{{ product.color }}</div>
            <div class="size">Size: {{ product.size}}</div>
            <div class="select">
              <span>QTY</span>
              <button @click="decrement(product)"><i class="fas fa-minus"></i></button>
              <span class="quantity">{{ product.quantity}}</span>
              <button @click="increment(product)"><i class="fas fa-plus"></i></button>
              <span class="price">{{product.price}} {{product.unit}}</span>
              <button class="remove" @click="removeCart(product)">Remove</button>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="total">
      <dl>
        <dt>Total:</dt>
        <dd><Cartquantity/></dd>
        <dt>TotalPirce:</dt>
        <dd>{{totalprice}} WON</dd>
      </dl>
      <div class="check-wrap">
        <button>Check Out</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Cartquantity from '.././components/Cartquantity'

export default {
  components: {
    Cartquantity,
  },
  computed: {
    ...mapGetters({
      products: 'cartProducts',
      totalprice: 'totalPirce',
    }),
    openCart: function () {
      return {
        fixed: this.products.length ? true : false,
      }
    },
  },
  methods: {
    decrement (product) {
      this.$store.dispatch('decrement', product)
    },
    increment (product) {
      this.$store.dispatch('increment', product)
    },
    removeCart(removeItem) {
      this.$store.dispatch('removeCart', removeItem);
    },
    clearCart () {
      this.$store.dispatch('clearCart')
    }
  }
}
</script>