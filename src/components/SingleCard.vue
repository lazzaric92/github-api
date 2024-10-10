<script>
import { store } from '../store.js';

export default{
    data(){
        return {
            store
        }
    },
    props: {
        item : {
            typeof: Object,
            required: true,
        }
    }
}
</script>

<template>
    <article class="card mb-2">
        <img v-if="this.store.reposArray.length > 0" :src="item.owner.avatar_url" class="card-img-top" :alt="item.owner.login">
        <img v-if="this.store.usersArray.length > 0" :src="item.avatar_url" class="card-img-top" :alt="item.login">
        <div class="card-body">
            <h6 v-if="this.store.reposArray.length > 0" class="card-title fw-bold">{{ item.full_name }}</h6>
            <h6 v-if="this.store.usersArray.length > 0" class="card-title fw-bold">{{ item.login }}</h6>
            <p v-if="this.store.reposArray.length > 0" class="card-text">{{ item.description }}</p>
            <p v-if="this.store.reposArray.length > 0">{{ item.language }}</p>
        </div>
        <ul class="list-unstyled" v-if="this.store.reposArray.length > 0">
            <li>Watchers: {{ item.watchers }}</li>
        </ul>
        <hr>
        <div class="card-body">
            <p>
                <span v-if="this.store.reposArray.length > 0">Vai alla repo</span>
                <span v-if="this.store.usersArray.length > 0">Visita il profilo</span>
                <a :href="item.html_url" class="card-link text-decoration-none text-black">&rarr;</a>
            </p>
        </div>
    </article>
    <!-- name, full_name, owner.login, owner.avatar_url, html_url, description, language, watchers, score -->
</template>

<style scoped lang="scss">
    article{
        width: calc(100% / 6 - 12px);
    }
</style>