import Vue from "vue";
import VueRouter from "vue-router";
import routesUnitA from "./UnitA/routes";
import routesUnitB from "./UnitB/routes";

Vue.use(VueRouter);

const vueRouter = new VueRouter({
    mode : "history",
    base : process.env.BASE_URL,
    routes : [
        routesUnitA, 
        routesUnitB
    ]
});

vueRouter.beforeEach((to, from, next) => {
    console.log(to);
    console.log(from);
    console.log(next);
    next();
})

export default vueRouter;