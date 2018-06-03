// Require express
var express = require("express");

// Page routes
module.exports = function(app) {
    //HTML route for home page
    app.get("/home", function(req, res) {
        res.render("index");
    });

    //HTML route for about me page
    app.get("/about", function(req, res) {
        res.render("about");
    });

    //HTML route for contact page
    app.get("/contact", function(req, res) {
        res.render("contact");
    });
}