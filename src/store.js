import { createStore } from 'vuex';
import persistedstate from 'vuex-persistedstate'

const store = createStore({
    state() {
        return {
            count : 0,
            cart: [{
                product_id: 1,
                product_name: "아이폰 거치대",
                category: "A"
              }],
            user : {}
        }
    },
    getters: {
        cartCount: (state) => {
          return state.cart.length;
        }
    },
    mutations : {
        increment(state, payload) {
            state.count++;
            state.count += payload;
        },
        user(state, data) {
            state.user = data;
        }
    },
    plugins : [
        persistedstate({
            paths:['user','count']
        })
    ],
    actions: {
        increment(context,payload) {
          //비동기 처리 로직 수행 가능
          console.log(context);
          context.commit('increment', payload)
        }
    }
})

export default store;