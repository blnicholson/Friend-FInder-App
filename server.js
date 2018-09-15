//Npm requires
var express = require("express");
var bodyParser=require("body-parser");



//Telling app that express is being used
var app =express();

//Setting up initial port
var PORT = process.env.PORT || 8080;

//Set up express app for data parsing
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Routes  
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

//Starting the server
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
})