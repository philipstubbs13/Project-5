//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Define port the server will be listening on.
var PORT = process.env.PORT || 3000;

// App is built using express.
var app = express();

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

//Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//Parse application/json
app.use(bodyParser.json());

//Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/pageRoutes.js")(app);
// require("./controllers/apiRoutes.js")(app);

//App is listening...
app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});