const state = {
    title: "hello a"
};

const actions = {

};

const mutations = {
    updateState(state, {value}) {
        state.title = value;
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
