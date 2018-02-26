// actions
import axios from 'axios'
import _ from 'lodash'

export default {
  increment({commit}, payLoad){
    const targetIndex = _.findIndex(this.state.cart, payLoad) || 0;
    commit('INCREMENT', targetIndex);
  },
  decrement({commit}, payLoad){
    const targetIndex = _.findIndex(this.state.cart, payLoad) || 0;
    commit('DECREMENT', targetIndex);
  },
  getItem({commit}, payLoad) {
    commit('GET_ITEM', payLoad);
  },
  addCart({commit}, payLoad) {

    const newCartData = Object.assign({}, payLoad);
    const targetIndex = _.findIndex(this.state.cart, newCartData);
    const quantity = payLoad.quantity || 1

    if (!payLoad.id) {
      alert('select Item');
      return false;
    }

    // no match in cart
    if (targetIndex === -1) {
      commit('ADD_CART', Object.assign(newCartData, { quantity } ));
    } else {
      const data = {
        targetIndex,
        quantity,
      }
      commit('ADD_QUANTITY', data);
    }
  },
  removeCart({commit}, payLoad) {
    commit('REMOVE_CART', payLoad);
  },
  clearCart({commit}){
    commit('CLEAR_CART');
  },
  clearNewCart({commit}){
    commit('CLEAR_NEW_CART');
  },
  async getIntData({commit}, options){
    const url = `${options.req.protocol}://localhost:3000${options.url}`;
    let { data } = await axios.get(url);
    commit('GET_INIT_DATA', data);
  },
}
