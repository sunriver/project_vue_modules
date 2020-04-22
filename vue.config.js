const path = require("path");
//mock数据 https://www.npmjs.com/package/umi-mock-middleware
const { createMockMiddleware } = require("umi-mock-middleware");
 
module.exports = {
  devServer: {
    before: app => {
      if (process.env.MOCK !== "none" && process.env.HTTP_MOCK !== "none") {
        app.use(createMockMiddleware());
      }
    }
  }
};