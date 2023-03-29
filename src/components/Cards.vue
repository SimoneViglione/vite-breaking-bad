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
        <h5> {{ name }} </h5>
        <h6> {{ type }} </h6>
    </div>
</template>

<style scoped lang="scss">
    .yugioh-card {
        background-color: orange;
        width: 100%;
        height: 200px;
        font-family: 'Merriweather', serif;
        flex-direction: column;
        align-items: center;

        img {
            height: 100px;
        }

    }
</style>