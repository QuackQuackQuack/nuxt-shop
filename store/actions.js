// actions
import axios from 'axios'
import _ from 'lodash'

export default {
  increment({commit}, n){
    commit('INCREMENT', n)
  },
  decrement({commit}, n){
    commit('DECREMENT')
  },
  getItem({commit}, payLoad) {
    commit('GET_ITEM', payLoad)
  },
  addCart({commit}, payLoad) {
    const newCartData = Object.assign({}, payLoad);
    delete newCartData['quantity'];
    const targetIndex = _.findIndex(this.state.cart, newCartData);

    //
    if (targetIndex === -1) {
      commit('ADD_CART', payLoad)
    } else {
      const data = {
        targetIndex,
        quantity: payLoad.quantity,
      }
      commit('QUICK_ADD_QUANTITY', data)
    }
  },

  removeCart({commit}, payLoad) {

  },  
  clearCart({commit}){
    commit('CLEAR_CART')
  },

  async getIntData({commit}, options){
    const url = `${options.req.protocol}://localhost:3000${options.url}`;
    let { data } = await axios.get(url);
    commit('GET_INIT_DATA', data)
  },
}
