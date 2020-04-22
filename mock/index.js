module.exports = {
    // 以HTTP动词和URL为Key，映射一个处理句柄。
    [`GET /index`](req, res) {
      // 返回你的mock数据。比如：
      res.json({
          success: true
      })
    }
  };