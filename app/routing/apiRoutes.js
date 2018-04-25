// JS File to handle possible api routes
// Developed by Fernando Zacarias

//DEPENDENCIES
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

//SETUP express
const app = express();
const PORT = process.env.PORT || 3000;
//SETUP body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//GET route for friends
const friendsData = require('./../data/friends.js');
function apiRoutes(app) {
app.get("/api/friends", function (req, res) {
    return res.json(friendsData);
});

//Friends POST - takes in JSON input
app.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newFriend = req.body;

    //Replace method to remove all spaces, concatenate string sections, set all to lowercase values
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

    console.log(newFriend);

    friendsData.push(newFriend);

    res.json(newFriend);
});
};

//Export api route for friendsData
module.exports = apiRoutes