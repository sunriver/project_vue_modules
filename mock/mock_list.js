module.exports = {
    [`GET /api/getList`](req, res) {
        console.log("[mock]" + req.url); 
        let result = null;
        switch(req.method) {
            case "GET":
                result = ["item1", "item2", "item3"];
                break;
            default:
                result = null;
        }   
        res.json(result);
    }

}