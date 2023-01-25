const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.json({"items": [] })
})

app.listen(8080, () => console.log("server is running on port 8080"))