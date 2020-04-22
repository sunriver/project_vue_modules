import request from "../utils/request";

const state = {
    title: "hello a",
    list: null
};

const actions = {
    async getList({ commit }, { payload }) {
        console.log("action getList");
        if (!payload) {
            return;
        }
        const res = await request({
            url : "/api/getList",
            method : "GET",
            data : payload.type,
        });
        console.log(res);
        commit("updateList", res);
    },

};

const mutations = {
    updateState(state, {title}) {
        state.title = title;
    },

    updateList(state, {data}) {
        state.list = data;
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
