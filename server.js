const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname })
})

app.get("/about", (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname })
})


app.get("/*", (req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname })
});

app.listen(3000, (req, res) => {
    console.log("Server is listening on port: 3000...")
})