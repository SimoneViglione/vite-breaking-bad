<script>
    import { store } from '../store.js';

    export default {
        name: 'loading',
        data () {
            return {
                store
            }
        }
    }
</script>

<template>
    <div class="loading-screen d-flex" v-if="store.loading">
        <div class="gradient d-flex">
            <i class="fa-solid fa-spinner"></i>
            <h1> Sii paziente </h1>
        </div>
        
    </div>
</template>

<style lang="scss">
     .loading-screen {
        background-color: rgb(50, 50, 50);
        color: white;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;

        .gradient {
            align-items: center;

            i {
                animation: spin 2s linear infinite;
                font-size: 2rem;
                margin-right: 1rem;
                color: rgb(100, 2, 213);
                
            }

            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        }
    }
</style>