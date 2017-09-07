"use strict";

// Register the controller
//first parameter is the name of the controller
//we'll use this name in app.js to bind this controller to a particular view

//second parameter is an anonymous function whose arguments are this modules dependencies
//this is called 'injection' and it's what we were doing with 'require' in browserify

//Here we're injecting the factory by the name we giv it when we register is. Not the file name.

app.controller("mushroomCtrl", function($scope, mushroomFactory){

    //using mushroomFacotry, gets the mushroom data and binds it to $scope
    const showMushrooms = function(){
        mushroomFactory.getMushrooms()
            .then(data => {
                // bind the data to $scope as the property 'shrooms' 
                // we can now refer to 'shrooms' in our template and angular knows it's this array of objects
                // so we can ng-repeat over it
                console.log("got the data:", data);
                $scope.shrooms = data;
            })
            .catch(error => console.log(error));
    };
    showMushrooms();





});