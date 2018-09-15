//Linking to friend data
var friends = require("../data/friends");

//Routes
module.exports = function(app){
    //GET requests
   
    app.get("/api/friends", function(req,res){
        res.json(friends);
    });

    //POST Requests
    app.post("/api/friends", function(req, res){
        var newFriend = req.body;
        var response = newFriend.scores;
        var friendScores=[];
        var friendMatch=0;
    

        for(var i =0; i<friends.length; i++){
            var scores = 0;

        for(var j=0; j<response.length; j++){
            scores +=Math.abs(friends[i].scores[j]-response[j])
        }
        friendScores.push(scores);
        }
        for(var i =0;i<friendScores.length;i++){
            if(friendScores[i]<=friendScores[friendMatch]){
                friendMatch=i;
            }
        }
        var bestFriend=friends[friendMatch];
        res.json(bestFriend);
        friends.push(req.body);
    });
};