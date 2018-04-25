// JS File to handle possible routes for Friend Finder App
// Developed by Fernando Zacarias


// DEPENDENCIES
// =============================================================
const path = require('path');

// Routes
// =============================================================
function htmlRoutes(app) {
// Basic route that sends the user first to the AJAX Page
app.use(function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
});

// Route to survey page 
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
});
};

//Export for server.js file
module.exports = htmlRoutes




// **************************************************************************************************
// console.log('HTML Route Connected Successfully');


// // Node Dependencies
// var path = require('path');


// // Includes Two Routes
// function htmlRoutes(app) {

//   // A GET Route to /survey which should display the survey page.
//   app.get('/survey', function (req, res) {
//     res.sendFile(path.join(__dirname + '/../public/survey.html'));
//   });

//   // A default USE route that leads to home.html which displays the home page.
//   app.use(function (req, res) {
//     res.sendFile(path.join(__dirname + '/../public/home.html'));
//   });

// }


// // Export for use in main server.js file
// module.exports = htmlRoutes;