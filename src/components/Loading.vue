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
    <div class="loading-screen" v-if="store.loading">
        <i class="fa-solid fa-spinner"></i>
        <h1> Sii paziente </h1>
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
        display: flex;
        justify-content: center;
        align-items: center;

            i {
                animation: spin 2s linear infinite;
                font-size: 2rem;
                margin-right: 1rem;
                color: linear-gradient(rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
            }

            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }

    }
</style>