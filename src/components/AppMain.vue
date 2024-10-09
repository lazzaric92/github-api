<script>
import { store } from '../store.js';

export default{
    data(){
        return {
            store
        }
    }
}
</script>

<template>
    <main class="container py-3">
        <div class="row justify-content-between">
            <article class="card mb-2" v-for="item in this.store.resultsArray" :key="item.id">
                <img :src="item.owner.avatar_url" class="card-img-top" :alt="item.owner.login">
                <div class="card-body">
                    <h6 class="card-title fw-bold">{{ item.full_name }}</h6>
                    <p class="card-text">{{ item.description }}</p>
                </div>
                <ul class="list-unstyled">
                    <li>{{ item.language }}</li>
                    <li>Watchers: {{ item.watchers }}</li>
                    <li>Score: {{ item.score }}</li>
                </ul>
                <hr>
                <div class="card-body">
                    <a :href="item.html_url" class="card-link text-decoration-none text-black">Vai alla repo</a>
                </div>
            </article>
        </div>
    </main>
    <!-- name, full_name, owner.login, owner.avatar_url, html_url, description, language, watchers, score -->
</template>

<style scoped lang="scss">
    article{
        width: calc(100% / 6 - 12px);
    }
</style>