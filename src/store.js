import { reactive } from "vue";

export const store = reactive (
    {
        cardList: [],
        archetypes: [],
        filter: '',
        loading: true
    }
);