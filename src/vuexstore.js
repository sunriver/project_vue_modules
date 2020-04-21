import Vue from "vue";
import Vuex from "vuex";
import storeUnitA from "./UnitA/store";
import storeUnitB from "./UnitB/store";


Vue.use(Vuex);

const store = new Vuex.Store({
    state : {},
    modules : {
        a: storeUnitA,
        b: storeUnitB
    }
});

export default store;