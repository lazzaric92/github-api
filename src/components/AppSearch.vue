<script>
import axios from 'axios';
import { store } from '../store.js';
export default{
    data(){
        return {
            store,
            search: '',
            currentPage: 1,
        }
    },
    methods: {
        getSearchedItems: function(searchString, page){
            if(this.search.trim() != ''){
                axios.get(`https://api.github.com/search/${this.store.searchSelect}`, {
                    params: {
                        q: searchString,
                        page: page,
                    }
                })
                .then((response) => {
                    console.log(response.data.items);
                    if(this.store.searchSelect === 'repositories'){
                        this.store.reposArray = response.data.items;
                        this.store.resultsArray = response.data.items;
                        console.log(this.store.reposArray);
                    } else if (this.store.searchSelect === 'users'){
                        this.store.usersArray = response.data.items;
                        console.log(this.store.usersArray);
                        this.store.resultsArray = response.data.items;
                    }
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
        <select class="text-center" v-model="this.store.searchSelect">
            <option value="repositories" selected>Repositories</option>
            <option value="users">Users</option>
        </select>
        <input type="search" v-model="search" class="mx-2 ps-2" placeholder="Search">
        <button class="btn btn-success" @click="[this.store.reposArray = [], this.store.usersArray = [], getSearchedItems(search, 1)]">Search</button>
    </nav>
</template>

<style scoped lang="scss">

</style>