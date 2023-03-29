<script>

export default {
    name: 'Cards',
    props: {
        image: String,
        name: String,
        type: String,
    }
}

</script>

<template> 
    <div class="yugioh-card d-flex">
        <img :src="image" :alt="name"/>
        <div class="card-text">
            <h5> {{ name }} </h5>
            <h6> {{ type }} </h6> 
        </div>
        
    </div>
</template>

<style scoped lang="scss">
    .yugioh-card {
        width: 80%;
        height: 100%;
        font-family: 'Merriweather', serif;
        flex-direction: column;
        align-items: center;
        
        
        background: #9b59b6;
        
        background: 
            radial-gradient(
            at center, #3498db, #30087b
            );
        

        img {
            height: 200px;
        }
    }

    .card-text {
        text-align: center;
        margin-top: 1rem;
        

        h6 {
            margin-top: 1.2rem;
        }
    }
</style>