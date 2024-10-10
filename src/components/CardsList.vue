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
        <SingleCard v-for="item in this.store.resultsArray" :key="item.id" :item="item"/>
    </div>
</template>

<style scoped lang="scss">

</style>