// JS File to handle possible routes for Friend Finder App
// Developed by Fernando Zacarias

// DEPENDENCIES
// =============================================================
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Routes
// =============================================================
function htmlRoutes(app) {

// Route to survey page 
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
});
// Basic route that sends the user first to the AJAX Page
app.use(function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
});

};

//Export for server.js file
module.exports = htmlRoutes
