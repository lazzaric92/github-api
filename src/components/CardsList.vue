<script>
import { store } from '../store.js';
import SingleCard from './SingleCard.vue';

export default{
    data(){
        return {
            store
        }
    },
    components: {
        SingleCard
    }
}
</script>

<template>
    <div class="row justify-content-between">

        <template v-if="this.store.isSearchOn === true & this.store.resultsArray.length > 0">
            <SingleCard v-for="item in this.store.resultsArray" :key="item.id" :item="item"/>
        </template>
        <p v-if="this.store.isSearchOn === true && this.store.isLoading === false && this.store.resultsArray.length === 0" class="col-12 fs-5 text-center">La ricerca non ha prodotto risultati</p>
    </div>
</template>

<style scoped lang="scss">

</style>