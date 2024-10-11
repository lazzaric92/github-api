<script>
import axios from 'axios';
import { store } from '../store.js';
export default{
    data(){
        return {
            store,
            search: '',
            currentPage: 1,
            sort: ''
        }
    },
    methods: {
        getSearchedItems: function(searchString, page){
            if(this.search.trim() != '' && this.search.trim().length >= 3){
                this.setQuerySort();
                axios.get(`https://api.github.com/search/${this.store.searchSelect}`, {
                    params: {
                        q: searchString,
                        page: page,
                        order: 'desc',
                        sort: this.sort
                        
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
        },
        setQuerySort(){
            if(this.store.searchSelect === 'repositories'){
                this.sort = 'stars';
            } else if (this.store.searchSelect === 'users'){
                this.sort = 'repositories';
            }
        }
    },

}
</script>

<template>
    <nav class="d-flex justify-content-center">
        <select class="text-center" v-model="this.store.searchSelect">
            <option value="repositories" selected>Repositories</option>
            <option value="users">Users</option>
        </select>
        <input type="search" v-model="search" class="mx-2 ps-2" placeholder="Search">
        <button class="btn green-btn" @click="[this.store.reposArray = [], this.store.usersArray = [], getSearchedItems(search, 1)]">Search</button>
    </nav>
</template>

<style scoped lang="scss">
.green-btn {
    background-color: #2db72d;
    
    &:hover {
        background-color: #5bd65b;
        color: black;
    }

    &:focus,
    &:active {
        background-color: #5bd65b;
        color: black;
    }
}


</style>