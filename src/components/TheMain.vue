<script>

import { store } from '../store.js';

import Cards from './Cards.vue';

export default {
    name: 'TheMain',

    data() {
        return {
            store,
            
        }
    },
    components: {
        Cards    
    }
}

</script>

<template>
    <div class="outer-container">

        <div class="d-flex">
            <h4>Filtra per Archetipo</h4>
            <select id="filter" @change="$emit ('doFilter')" v-model="store.filter">
                <option value="Alien">Alien</option>
                <option value="Noble-Knight">Noble Knight</option>
                <option value="Abyss-Actor">Abyss Actor</option>
                <option value="Mermailr">Mermail</option>
            </select>
        </div>

        <div class="inner-container d-flex">
            <div class="counter">
                <h5>Carte trovate {{  }} </h5>
            </div>
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
    background: #9b59b6;
    background: 
    radial-gradient(
    at center, #3498db, #30087b
    );

        select {
            padding: 5px 10px;
            margin-left: 15px;
            margin-bottom: 20px;
        }

        h4 {
            color: white;
            margin-left: 160px;
        }

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

.counter {
    background-color: black;
    color: white;
    height: 50px;
    width: 100%;

    h5 {
        margin-top: 10px;
        margin-left: 10px;
    }
}

</style>