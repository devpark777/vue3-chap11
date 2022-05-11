<template>
  <hr>
  <p>Count : {{count}}</p>
  <p>cartCount : {{cartCount}}</p>
  <button type="button" @click="increment">Increment</button><br>
  <button type="button" @click="increment2">Increment2</button><br>
  <button type="button" @click="getFromS">서버로부터</button><br>
  <hr>
  사용자정보 : {{userInfo}} <br>
     ID : {{userInfo.id}} <br>
     PWD : {{userInfo.pwd}} <br>
 
  <button type="button" @click="userInfoInsert">사용자정보주입</button>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
    cartCount() {
      return this.$store.getters.cartCount;
      // return this.$store.state.cart.length;
    },
    userInfo() {
      return this.$store.state.user;
    }
  },
  methods: {
    increment() {
     this.$store.commit('increment',0);
    },
    increment2() {
     this.$store.dispatch('increment',5);
    },
    userInfoInsert() {
      this.$store.commit('user', {"id":"park", "pwd":"1234"})
    },
    getFromS() {
      this.$store.dispatch('getFromServe','test');
    }
  }
}
</script>