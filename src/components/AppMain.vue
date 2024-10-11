<script>
import { store } from '../store.js';
import SingleCard from './SingleCard.vue';
import CardsList from './CardsList.vue';
import AppLoader from './AppLoader.vue';

export default{
    data(){
        return {
            store
        }
    },
    components: {
        SingleCard,
        CardsList,
        AppLoader
    },
    created(){
        this.store.isSearchOn = false;
    }
}
</script>

<template>
    <main class="container py-3 p-relative">
        <AppLoader v-if="this.store.isLoading === true"/>
        <CardsList v-else/>
    </main>
</template>

<style scoped lang="scss">

</style>