var express = require("express");

//maybe put all of the below code into models/burger.js
var orm = require("./config/orm.js");

orm.selectAll("burgers", function(result){
    var data = result;
    console.log(data);

})