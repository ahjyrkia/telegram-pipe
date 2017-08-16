const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");

var app = express();

app.use(bodyParser.json({}));

app.use(bodyParser.urlencoded({
    limit: "10mb",
    extended: true,
    parameterLimit: 50000
}));


app.use("", require("./api.js"));

var server = app.listen(config.server.port, "0.0.0.0", function(err) {
    console.log("listening to " + config.server.host + ":" + server.address().port);
    if (err) {
        return;
    }
});


exports.app = app;
exports.server = server;
