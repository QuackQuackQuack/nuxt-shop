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
            <button @click="selectSize(size)">{{size}}</button>
          </li>
          <li></li>
        </ul>
      </div>
      <div class="price">{{product.price}} {{product.unit}}</div>
      <button class="buy" @click="addCart">Cart</button>
    </div>
    <button class="test" @click="test">test</button>

  </div>

</template>

<script>
export default {
  props: ['product'],
  methods: {
    selectSize(size) {
      const selectData = {
        id: this._props.product.id,
        size,
        quantity: 1,
      };

      this.$store.dispatch('getItem', selectData);
    },
    addCart() {
      const newCartData = this.$store.state.newcart;
      this.$store.dispatch('addCart', newCartData);
    },
    test() {
      console.log(this.$store.getters.getById(this._props.product.id));
    }
  }
}
</script>