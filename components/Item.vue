<template>
  <div class="product-wrap">
    <div class="thumb">
      <img class="" :src="product.image">
      <img class="img-top" :src="product.imageHover">
    </div>
    <div class="info">
      <div class="title">{{product.title}}</div>
      <div class="color">{{product.color}}</div>
      <div class="size-wrap">
        <div class="size-title">Size</div>
        <ul class="size">
          <li v-for="size in product.size" :key="size">
            <button :data-size="size" @click="selectSize(product, size);"> {{ size }}</button>
          </li>
        </ul>
      </div>
      <div class="price">{{product.price}} {{product.unit}}</div>
      <button class="buy" @click="addCart(product.id)">Cart</button>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      selected: undefined,
    }
  },
  props: ['product'],
  methods: {
    selectSize(product, size) {
      const data = Object.assign({}, product);
      delete data['size'];
      const selectData = Object.assign({}, data, { size });
      for (var item of document.querySelectorAll('[data-size]')) {
        item.classList.remove('highlight');
      }
      event.target.classList.add('highlight');
      this.$store.dispatch('getItem', selectData);
    },
    addCart(id) {
      const newCartData = this.$store.state.newcart;
      this.$store.dispatch('addCart', newCartData);
      for (var item of document.querySelectorAll('[data-size]')) {
        item.classList.remove('highlight');
      }
      this.$store.dispatch('clearNewCart');
    },
   }
}
</script>