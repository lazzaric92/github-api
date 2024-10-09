<script>
import axios from 'axios';
import { store } from '../store.js';
export default{
    data(){
        return {
            store,
            search: '',
        }
    },
    methods: {
        getSearchedItems: function(searchString){
            if(this.search.trim() != ''){
                axios.get('https://api.github.com/search/repositories', {
                    params: {
                        q: searchString
                    }
                })
                .then((response) => {
                    console.log(response.data.items);
                    this.store.resultsArray = response.data.items;
                    console.log(this.store.resultsArray);
                })
                .catch((error) => {
                console.log(error);
                });
            }
        }
    }
}
</script>

<template>
    <nav class="d-flex justify-content-center">
        <input type="search" v-model="search" class="mx-2 ps-2" placeholder="Search">
        <button class="btn btn-success" @click="getSearchedItems(search)">Search</button>
    </nav>
</template>

<style scoped lang="scss">

</style>