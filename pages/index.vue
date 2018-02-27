<template>
  <div class="container">
    <div class="main-banner">
      <Slider v-bind:slider="$store.state.initialData.banner" />
    </div>
    <div class="content-wrap">
      <div class="product">
        <h2>Product List</h2>
        <ul class="product-list">
          <li v-for="product in $store.state.initialData.product" :key="product.title">
            <Item v-bind:product="product"/>
          </li>
        </ul>
      </div>
    </div>
    <Cart/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Slider from '.././components/slider.vue'
import Item from '.././components/Item.vue'
import Cart from '.././components/Cart.vue'
export default {
  head() {
    return {
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/css/swiper.min.css' },
      ],
    }
  },
  components: {
    Slider,
    Item,
    Cart,
  },
  async asyncData ({ store, params, error, req }) {
    const options = {
      req,
      url : '/api/index/',
    }
    await store.dispatch('getIntData', options);
  }
}
</script>

<!-- <template>
  <div class="container">
    <h2>Users</h2>
    <ul class="users">
      <li v-for="user in users" :key="user.id">
        <nuxt-link :to="'/users/'+user.id">{{ user.name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData() {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    return { users: data }
  }
}
</script> -->









