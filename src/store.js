import { createStore } from 'vuex';
import globalState from './state';
import authModule from './store/modules/auth';
import cartModule from './store/modules/cart';

const store = createStore({
  modules: {
    cart: cartModule,
    auth: authModule
  },
  state() {
    return globalState;
  },
  getters: {
      products: state => state.products
  }
});

export default store;
