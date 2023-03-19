const express = require("express");
const bodyParser = require("body-parser");
const config = require("config");
const app = express();

//Config express
// app.use(express.urlencoded({ extended: true }));
// // app.use(express.json());

// Config body-parser
// create application/json parser-Documents
// app.use(bodyParser.json());
// create application/x-www-form-urlencoded parser-Documents
app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", config.app.views_folder);
app.set("view engine", config.app.view_engine);
app.use("/static", express.static(config.app.static_folder));
app.use(require("../routers/web"));

module.exports = app;