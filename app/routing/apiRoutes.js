// JS File to handle possible api routes
// Developed by Fernando Zacarias

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

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

    console.log(newFriend);

    friends.push(newFriend);

    res.json(newFriend);
});
};

module.exports = apiRoutes