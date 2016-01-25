var express = require("express");
var app = express();

var port = process.env.PORT || 3000;

var middleware = require("./mymodules/middleware.js");

app.use(middleware.logger);

// app.use(middleware.requireAuthentication);

app.get("/about", middleware.requireAuthentication, function(req, res) {
    res.send("About us...!");
})

app.use(express.static(__dirname + "/public"));

app.listen(port, function() {
    console.log("Express server started on port " + port);
});