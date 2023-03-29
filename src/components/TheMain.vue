<script>

import { store } from '../store.js';

import Cards from './Cards.vue';

export default {
    name: 'TheMain',

    data() {
        return {
            store
        }
    },
    components: {
        Cards    
    }
}

</script>

<template>
    <div class="outer-container">
        <div class="inner-container">
            <Cards v-for="(card, index) in store.cardList"  
            
            :image="card.card_images.image_url"
            :name="card.name"
            :type="card.type"
            :key="index"
            />

        </div> 
    </div>
</template>

<style lang="scss" scoped>

.outer-container {
    width: 100%;
    height: 100%;
    background-color: rgb(1, 1, 108);
}

.inner-container {
    margin: 20px;
    background-color: white;
}



</style>