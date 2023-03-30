<script>

  import axios from 'axios';

  import { store } from './store.js';
 
  import TheHeader from './components/TheHeader.vue';
  import TheMain from './components/TheMain.vue';
  import Loading from './components/Loading.vue';

  export default {
  components: {TheHeader, TheMain, Loading},

  data() {
    return {
      store,
      
  }
},
methods: {
  getCards() {

    console.log(store.filter)

    let urlApi = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=100&offset=0';  

    if (store.filter.length > 0) {
      urlApi = `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${store.filter}&num=100&offset=0`
    }

    axios.get(urlApi)
    .then(response => {
      this.store.cardList = response.data.data;
      this.store.loading = false;
    })
  }
},
created() {
    this.getCards();
  }
}
</script>

<template>

  <Loading />

  <header> <TheHeader /> </header>

  <main> <TheMain @doFilter="getCards" /> </main>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
