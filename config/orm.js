const connection = require('./connection.js');

// HELPER FUNCTION FOR SQL SYNTAX
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}


  
// EXPORT THE ORM FOR THE MODEL (good_burger.js)
module.exports = orm;