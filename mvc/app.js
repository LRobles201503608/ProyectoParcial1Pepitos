"use strict";
const express = require("express");

require("dotenv").config();

var logger = require("morgan");

const path = require("path");

var index = require("./src/routes/index");

const app = express();

app.use(logger("dev"));
app.engine("html", require("ejs").renderFile);

app.set("views", path.join(__dirname, "/src/views"));
app.use("/", index);

module.exports = app;
