const express = require("express");
const app = express();
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");
const path = require("path");
const cors = require("cors");

// custom middle ware
app.use(logger);

// Cross Origin Resource Sharing
const whitelist = ['https://www.yoursite.com', 'http://127.0.0.1:5500', 'http://localhost:3000'];
const corsOptions = {
    origin: (origin, callback) => {
        if(whitelist.indexOf(origin) != -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    },
    optionsSucessStatus: 200
}
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded data
// in other words, form data:  
// ‘content-type: application/x-www-form-urlencoded’
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

// server static files
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname })
})

app.get("/about", (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname })
})


app.all("*", (req, res) => {
    res.status(404);
   if(req.accepts('html')) {
    res.sendFile('./views/404.html', { root: __dirname })
   } else if(req.accepts('json')) {
    res.json({erroe: "404 Not Found"});
   } else {
    res.type('txt').send("404 Not Found")
   }
});

app.use(errorHandler)

app.listen(3000, (req, res) => {
    console.log("Server is listening on port: 3000...")
})