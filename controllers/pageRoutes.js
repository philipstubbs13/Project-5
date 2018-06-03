// Require express
var express = require("express");

// Page routes
module.exports = function(app) {
    //HTML route for home page
    app.get("/home", function(req, res) {
        res.render("index");
    });
}