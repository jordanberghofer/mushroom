"use strict";

//Registering the app 
//first paramater is the name of the app (line7 of index.html)
//second parameter array for project dependancies
const app = angular.module("mushrooms", ["ngRoute"]);

app.config($routeProvider => {


    //.when is a method on $routeProvider that takes current URL(in the browser) as a string
    //and a second parameter, which is an object specifying which template to display and which controller to instantiate


    // the controller below needs to be the same name as the controller that named in mushroom.ctrl.js
    $routeProvider
        .when('/', {
        templateUrl: '/partials/mushrooms.html',
        controller: 'mushroomCtrl'
        })
        //whenever the url does not correspond to any of these preconfigured paths,
        //default to the home page
        .otherwise('/');
});
