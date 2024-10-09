<script>
import axios from 'axios';
import { store } from '../store.js';
export default{
    data(){
        return {
            message: 'Search',
            store
        }
    },
    methods: {
        getSearchedItems: function(searchString){
            axios.get('https://api.github.com/search/repositories', {
                params: {
                    q: searchString
                }
            })
            .then((response) => {
                console.log(response.data.items);
                this.store.resultsArray = response.data.items;
                // console.log(this.store.resultsArray);
            })
            .catch((error) => {
            console.log(error);
            });
        }
    }
}
</script>

<template>
    <h1> {{ message }} </h1>
</template>

<style scoped lang="scss">

</style>