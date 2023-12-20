const express = require("express");

function torselServer() {
    const PORT=3005;
    const app = express();

    app.use("*", (req, res) => {
        // 读取index.html文件，使用vite中间件模板化前端代码
    })
    app.listen(PORT,)
}

torselServer();