//mutations
import filter from '.././util/filter'
import compare from '.././util/compare'
import _ from 'lodash'

export default {
  INCREMENT(state, n) {
    state.counter += n;
  },
  DECREMENT(state, n){
    state.counter -= n;
  },
  GET_ITEM(state, payLoad){
    state.newcart = payLoad;
  },
  ADD_CART(state, payLoad){
    const newCartData = Object.assign({}, payLoad);
    state.cart.push(newCartData);
  },
  QUICK_ADD_QUANTITY(state, data) {
    state.cart[data.targetIndex].quantity += data.quantity;
  },

  CLEAR_CART(state){
    state.cart = [];
  },
  GET_INIT_DATA(state, payLoad){
    state.initialData = payLoad;
  },
}
