const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.json({"items": ["go shopping", "homework", "test out the MERN stack", "Fix this App"] })
})

app.listen(5000, () => {console.log('Server is running on port 5000')})