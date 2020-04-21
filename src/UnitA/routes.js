
const routes = {
    path: "/unita",
    name: "unita",
    component: () => 
        import(/* webpackChunkName: "unita" */ "./views/ViewA")
};

export default routes;