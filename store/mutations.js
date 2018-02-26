//mutations

export default {
  INCREMENT(state, targetIndex) {
    console.log(targetIndex);
    state.cart[targetIndex].quantity += 1;
  },
  DECREMENT(state, targetIndex){
    if (state.cart[targetIndex].quantity > 1) {
      state.cart[targetIndex].quantity -= 1;
    }
  },
  GET_ITEM(state, payLoad){
    state.newcart = payLoad;
  },
  ADD_CART(state, payLoad){
    const newCartData = Object.assign({}, payLoad);
    state.cart.push(newCartData);
  },

  REMOVE_CART(state, payLoad){
    var carts = state.cart
    carts.splice(carts.indexOf(payLoad), 1);
  },

  ADD_QUANTITY(state, data) {
    state.cart[data.targetIndex].quantity += data.quantity;
  },

  CLEAR_NEW_CART(state){
    state.newcart = [];
  },
  CLEAR_CART(state){
    state.cart = [];
  },
  GET_INIT_DATA(state, payLoad){
    state.initialData = payLoad;
  },
}
