// Require express
var express = require("express");

// LOAD DATA
// We are linking our routes to a "data" source.
// This data source holds an array of information on portfolio projects.
var projectData = require("../data/projects.js");


// ROUTING
module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  app.get("/api/projects", function(req, res) {
    res.json(projectData);
    console.log(projectData);
  });
}