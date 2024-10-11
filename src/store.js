import { reactive } from "vue";

export const store = reactive({
    searchText: '',
    loading: true,
    searchSelect: 'repositories',
    reposArray: [],
    usersArray: [],
    resultsArray: [],
    isSearchOn: false,
});