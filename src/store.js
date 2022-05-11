import { createStore } from 'vuex';
import persistedstate from 'vuex-persistedstate'
import axios from 'axios';

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
        increment(context,payload) { // increment({commit, state}, payload) {
         //비동기 처리 로직 수행 가능
         console.log(context);
         console.log(context.state.count);
         
         setTimeout(function() {
           context.commit('increment', payload); //1초 수행
         },1000) ; //1초 수행
         
         context.commit('user', {"id":"park2", "pwd":"1234!"})        
    },
    async getFromServe({ commit }, data) {
        console.log(data);
        let result = [];
        await axios.get("/api/user") //proxy 이용 => 스프링부트 서버 call
          .then(res => {
                  result = res.data;
          })
          .catch(e => {
              console.log(e);
          })
        console.log(result);

        commit('user', {"id":result.id, "pwd":result.pwd})
        // commit('user', {"id":"park", "pwd":"1111"})
    } 
  }
})

export default store;