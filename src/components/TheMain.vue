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
        <div class="inner-container d-flex">
            
            <div class="card-wrapper" v-for="(card, index) in store.cardList" :key="index">
                <Cards       
                    :image="card.card_images[0].image_url"
                    :name="card.name"
                    :type="card.archetype"
                />
            </div>
            

        </div> 
    </div>
</template>

<style lang="scss" scoped>

.outer-container {
    width: 100%;
    height: 100%;
    padding: 100px 0;
    background-color: rgb(1, 1, 108);
}

.inner-container {

    margin: auto;
    width: 80%;
    background-color: white;
    flex-direction: row;
    gap: 1px;
    flex-wrap: wrap;

}

.card-wrapper {
    margin: 2rem;
    width: calc((100% / 5) - 5rem);
    height: 300px;
}



</style>