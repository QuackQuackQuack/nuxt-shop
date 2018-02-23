<template>
  <div>
    <p>{{ counter }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState(['counter'])
  },
  methods: {
    increment() {
      this.$store.dispatch('increment', 4);
    },
    decrement() {
      this.$store.dispatch('decrement', 2);
    }
    //...mapActions(['increment', 'decrement'])
  }
}
</script>


