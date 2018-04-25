//Server to process Friend Finder application 
//Developed by Fernando Zacarias

//DEPENDENCIES
// =============================================================
const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
//INCLUDE THE ROUTING JS FILES
const apiRoutes = require('./app/routing/apiRoutes.js');
const htmlRoutes = require('./app/routing/htmlRoutes.js');

//SET-UP EXPRESS APP
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Server routing
apiRoutes(app); 
htmlRoutes(app); 

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});