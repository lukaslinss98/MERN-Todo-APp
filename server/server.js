const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.contentType('application/json')
    res.json({"items": ["go shopping", "homework", "test out the MERN stack", "Fix this App"] })
})

app.listen(5000, () => {console.log('Server is running on port 5000')})