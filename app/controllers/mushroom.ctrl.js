"use strict";

// Register the controller
//first parameter is the name of the controller
//we'll use this name in app.js to bind this controller to a particular view
//
//second parameter is an anonymous function whose arguments are this modules dependencies
//this is called 'injection' and it's what we were doing with 'require' in browserify
//
//Here we're injecting the factory by the name we giv it when we register is. Not the file name.

app.controller("mushroomCtrl", function($scope, mushroomFactory){

});