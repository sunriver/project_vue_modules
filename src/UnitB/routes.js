const routes = {
    path: "/unitb",
    name: "unitb",
    component: () => import(/* webpackChunkName: "unitb" */ "./views/ViewB")
};

export default routes;