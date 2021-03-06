// Require express
var express = require("express");

// Page routes
module.exports = function(app) {
    //HTML route for home page
    app.get("/login", function(req, res) {
        res.render("login");
    });

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

    //HTML route for writing portfolio page
    app.get("/writing", function(req, res) {
        res.render("writing");
    });

    //HTML route for web development portfolio page
    app.get("/code", function(req, res) {
        res.render("portfolio");
    });

    //HTML route for landing page
    app.get("/", function(req, res) {
        res.render('landing', {layout: 'landing-layout'});
    });

    //HTML route for split toggle page
    app.get("/toggle", function(req, res) {
        res.render('split', {layout: 'split-toggle'});
    });

    //HTML route for 404 not found page
    app.get("*", function(req, res) {
        res.render('nomatch', {layout: 'landing-layout'});
    });
}