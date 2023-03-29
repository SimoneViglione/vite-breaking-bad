<script>

  import axios from 'axios';

  import { store } from './store.js';
 
  import TheHeader from './components/TheHeader.vue';
  import TheMain from './components/TheMain.vue';

  export default {
  components: {TheHeader, TheMain},

  data() {
    return {
      store
  }
},
created() {
  axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes')
    .then(response => {
      this.store.cardList = response.data.data;
    })
  }
}
</script>

<template>
  <header> <TheHeader /> </header>

  <main> <TheMain /> </main>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
