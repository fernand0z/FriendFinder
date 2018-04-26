import { STATUS_CODES } from 'http';

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

        let newFriendData = {
            name: newFriend.name,
            photo: newFriend.photo,
            scores: []
        };
        console.log(newFriendData);

        //Declare a variable to hold the scores in an array
        let scoreArray = [];
        //Loop to add each of the user scores into the array
        for (var i = 0; i < req.body.scores.length; i++) {
            scoreArray.push(parseInt(req.body.scores[i]));
        }

        //Assign array to scores key in newFriendData
        newFriendData.scores = scoreArray;

        //Setup the process to compare scores
        let comparisonArray = [];
        //Loop to compare for each set of scores in the friendData array
        for (var j = 0; j < friendsData.scores.length; j++) {
            //Declare variables to hold the comparison results
            let instanceComparison = 0;
            for (var k = 0; k < newFriendData.scores.length; k++) {

                instanceComparison += Math.abs(newFriendData.scores[j] - friendsData[j].scores[k]);
            }
            //Push difference value to comparisonArray
            comparisonArray.push(instanceComparison);
        }


        res.json(newFriend);
    });
};

//Export api route for friendsData
module.exports = apiRoutes
