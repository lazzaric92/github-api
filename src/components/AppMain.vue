<script>
import { store } from '../store.js';
import SingleCard from './SingleCard.vue';
import CardsList from './CardsList.vue';

export default{
    data(){
        return {
            store
        }
    },
    components: {
        SingleCard,
        CardsList
    },
    created(){
        this.store.isSearchOn = false;
    }
}
</script>

<template>
    <main class="container py-3">
        <CardsList />
    </main>
</template>

<style scoped lang="scss">

</style>