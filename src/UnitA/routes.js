
const routes = [
    {
        path: "/unita",
        name: "unita",
        component: () =>
            import(/* webpackChunkName: "unita" */ "./views/ViewA")
    },
    {
        path: "/unita/subview",
        name: "unita_subview",
        component: () => 
            import(/* webpackChunkName: "unita" */ "./views/ViewCreateElement")

    }
];

export default routes;