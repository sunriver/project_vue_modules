module.exports = {
    [`GET /api/getItemList`](req, res) {
        console.log("[mock]" + req.url); 
        let result = null;
        switch(req.method) {
            case "GET":
                result = [
                    {
                        name: "a1",
                        type: 1
                    }, {
                        name: "b1",
                        type: 2
                    },
                    {
                        name: "c1",
                        type: 1
                    }
                ];
                break;
            default:
                result = null;
        }   
        res.json(result);
    }

}