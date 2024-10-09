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
    <main class="p-3">
        <ul class="list-unstyled">
            <li v-for="item in this.store.resultsArray" :key="item.id">
                {{ item.full_name }}
            </li>
        </ul>
    </main>
</template>

<style scoped lang="scss">

</style>