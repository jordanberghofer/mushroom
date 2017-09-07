"use strict";

//Again, we are registering this factory's name within app
//giving it a name, this must be consistnet with what we inject to the controller
//and passing a function, whose parameters are its dependencies

app.factory("mushroomFactory", function($q, $http, FBCreds){

    //put URL into a variable
    const url = FBCreds.databaseURL;
    console.log(FBCreds.databaseURL);


    //helper function to process the data fron getMushrooms into and array of objects
    //that we can pass back to the controller
    const makeMushArray = function(data){
        console.log("obj in makeMushArray", makeMushArray);
        console.log("data.data.mushrooms", data.data.mushrooms);


        //if I just kept the next line as Object.keys(data.data.mushrooms), it would just be "mushroom0, mushroom1, ..."
        //It litereally reads as Object.keys(data.data.mushrooms as an array

        //alltogether it functions as "push the value of each key into a new array"
        return Object.keys(data.data).map(key => data.data[key]);
        //this can be typed out the old way as ...
        // let array = [];
        // Object.keys(data.data.mushrooms).forEach(key => {
        //     array.push(data.data.mushrooms[key])
        // });
    };

    //use $http to make and XHR to get the mushrooms.json

    //Because this is asynchronous, we'll use $q to wrap the call in a promise
    //that we can chain on 

    const getMushrooms = function(){
        console.log("you called me?");
        return $q((resolve, reject) => {
            $http.get(`${url}/mushrooms.json`)
                .then(data => resolve(makeMushArray(data)))
                .catch(error => reject (error));
        });

    };




    //return here is like module.exports in browserify
    //if you want to use a method from here in your controller
    //you must return it
    return {getMushrooms};
    
});