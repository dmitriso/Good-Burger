const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controller.js");

const PORT = process.env.PORT || 3000;

const app = express();

// MIDDLEWARE
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// SET HANDLEBARS
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// IMPORT ROUTES TO GIVE THE SERVER ACCESS TO THEM
app.use(routes);

// SERVER LISTEN
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });