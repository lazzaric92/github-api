<script>
import { store } from '../store.js';

export default{
    data(){
        return {
            store,
            wordsCount: 15,
        }
    },
    props: {
        item : {
            typeof: Object,
            required: true,
        }
    },
    methods: {
        descriptionPreview(text){
            if(text.length > 0){
                const words = text.split(' ');
                let preview = '';
                for(let i = 0; i < this.wordsCount; i++){
                    if(i === this.wordsCount - 1){
                        preview += words[i] + '...';
                    } else if(i === words.length - 1){
                        preview += words[i];
                        // console.log(preview);
                        return preview;
                    } else {
                        preview += words[i] + ' ';
                    }
                }
            } else {
                preview = '-';
            }
            console.log(preview);
            return preview;
        }
    }
}
</script>

<template>
    <article class="card mb-2 p-0">
        <div class="card-img d-flex justify-content-center align-items-center">
            <img v-if="this.store.reposArray.length > 0" :src="item.owner.avatar_url" class="card-img-top" :alt="item.owner.login">
            <img v-if="this.store.usersArray.length > 0" :src="item.avatar_url" class="card-img-top" :alt="item.login">
        </div>
        <div class="card-body py-1 px-3">
            <h5 v-if="this.store.reposArray.length > 0" class="card-title fw-bold">{{ item.full_name }}</h5>
            <h5 v-if="this.store.usersArray.length > 0" class="card-title fw-bold">{{ item.login }}</h5>
            <p v-if="this.store.reposArray.length > 0" class="card-text" @click="[console.log(item.description.split(' ')), descriptionPreview(item.description)]">{{descriptionPreview(item.description)}}</p>
            <p v-if="this.store.reposArray.length > 0">Language: {{ item.language }}</p>
        </div>
        <ul class="list-unstyled px-3" v-if="this.store.reposArray.length > 0">
            <li><font-awesome-icon icon="fa-regular fa-eye" class="text-white me-1"/> {{ item.watchers }}</li>
        </ul>
        <hr>
        <div class="card-body mt-auto card-link">
            <p class="mb-0">
                <span v-if="this.store.reposArray.length > 0">Vai alla repo</span>
                <span v-if="this.store.usersArray.length > 0">Visita il profilo</span>
                <a :href="item.html_url" class="card-link text-decoration-none text-white">
                    <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" class="text-white ms-2"/>
                </a>
            </p>
        </div>
    </article>
    <!-- name, full_name, owner.login, owner.avatar_url, html_url, description, language, watchers, score -->
</template>

<style scoped lang="scss">
    article{
        width: calc(100% / 6 - 12px);
        background-color: #1d1d1d;
        color: white;

        .card-img {
            width: 100%;
            padding: 3rem 0;
            background: linear-gradient(165deg, rgb(29, 29, 29) 0%, rgba(33, 66, 33, 0.75) 40%, rgba(33, 63, 33, 0.915639498) 44%, rgb(45, 183, 45) 48%, rgb(74, 203, 34) 49%, rgb(74, 203, 34) 50%, rgb(45, 183, 45) 51%, rgba(33, 63, 33, 0.8988327753) 54%,rgba(33, 63, 33, 0.65) 58%, rgb(29, 29, 29) 75%, rgb(29, 29, 29) 100%);

            img {
                width: 50%;
                aspect-ratio: 1;
                border-radius: 50%;
            }
        }

        .card-text{
            color: #989e98;
            margin: 1.5rem 0;
        }

        hr {
            border-color: #00ff00;
            border-width: 2px;
            border-style: outset;
            margin-bottom: 0;
        }

        .card-link{
            max-height: 56px;
        }
    }
</style>