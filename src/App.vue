<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue'

export default{
  data(){
      return {
          
      }
  },
  components: {
    AppHeader,
    AppMain
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@use '../node_modules/bootstrap/scss/bootstrap.scss';
@use './assets/scss/general.scss';
@use './assets/scss/partials/variables';
@use './assets/scss/partials/mixins';
</style>
