var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(result){
            var data = result;
            console.log(data);
            cb(data);
        });
    },
    insertOne: function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, function(result){
            cb(result);
        });
    },
    updateOne: function(objColVals, condition, cb){
        orm.updateOne("burgers", objColVals, condition, function(result){
            console.log(result)
            cb(result);
        });
    }
};

module.exports = burger;