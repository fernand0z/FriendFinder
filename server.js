//Server to process Friend Finder application 
//Developed by Fernando Zacarias

//DEPENDENCIES
// =============================================================
const express = require('express');
const fs = require('fs');
const path = require('path');

//SET-UP EXPRESS APP
// =============================================================

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// SETTING UP
// =============================================================
