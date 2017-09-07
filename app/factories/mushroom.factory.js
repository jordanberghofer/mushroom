"use strict";

//Again, we are registering this factory's name within app
//giving it a name, this must be consistnet with what we inject to the controller
//and passing a function, whose parameters are its dependencies

app.factory("mushroomFactory", function($q, $http){

    //use $http to make and XHR to get the mushrooms.json

    //Because this is asynchronous, we'll use $q to wrap the call in a promise
    //that we can chain on 

    const getMushrooms = function(){
        console.log("you called me?");
        return $q((resolve, reject) => {
            $http.get('data.json')
                .then(data => resolve(data))
                .catch(error => reject (error));
        });

    };




    //return here is like module.exports in browserify
    //if you want to use a method from here in your controller
    //you must return it
    return {getMushrooms};
    
});