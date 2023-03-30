<script>
    import { computed } from 'vue'
    import { store } from '../store.js'
  
    export default {
      name: 'CardsCounter',
      setup() {
        const cardsCounter = computed(() => store.cardList.length)
  
        return {
          cardsCounter
        }
      }
    }
</script>

<template>
    <div class="counter">
      <h5>Carte trovate {{ cardsCounter }}</h5>
    </div>
</template>

<style>
    .counter {
      background-color: black;
      color: white;
      height: 50px;
      width: 100%;
    }

    h5 {
        margin-left: 10px;
        margin-top: 10px;
    }

</style>
  