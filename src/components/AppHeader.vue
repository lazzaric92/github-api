<script>
import AppSearch from './AppSearch.vue';
export default{
    data(){
        return {
            
        }
    },
    components: {
        AppSearch
    }
}
</script>

<template>
    <header class="text-center p-3 mb-4 d-flex">
        <font-awesome-icon icon="fa-brands fa-github" class="text-white icon"/>
        <AppSearch class="flex-grow-1"/>
    </header>
</template>

<style scoped lang="scss">
.icon{
    font-size: 2.5rem;
}
</style>