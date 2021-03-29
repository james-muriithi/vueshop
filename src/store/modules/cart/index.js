const cartModule = {
  state() {
    return {
      items: [], total: 0, qty: 0
    };
  },
  mutations: {
    addProductToCart(state, payload) {
      const productData = payload.product;
      const productInCartIndex = state.items.findIndex(
        ci => ci.productId === productData.id
      );

      if (productInCartIndex >= 0) {
        state.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1
        };
        state.items.push(newItem);
      }
      state.qty++;
      state.total += productData.price;
    },

    removeProductFromCart(state, payload) {
      const prodId = payload.id;
      const productInCartIndex = state.items.findIndex(
        cartItem => cartItem.productId === prodId
      );
      const prodData = state.items[productInCartIndex];
      state.items.splice(productInCartIndex, 1);
      state.qty -= prodData.qty;
      state.total -= prodData.price * prodData.qty;
    }
  },
  actions: {
    addProductToCart(context, payload) {
      const products = context.rootGetters.products;
      const product = products.find(prod => prod.id == payload.id)
      context.commit('addProductToCart', {product});
    },
    removeProductFromCart(context, payload) {
      context.commit('removeProductFromCart', payload);
    }
  },
  getters: {
    cart: state => state
  }
};

export default cartModule;
