var connection = require("./connection.js");


// this function transforms the SQL syntax into question marks for the 3 values needed
function questionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}
function objToSql(ob) {
  
  var arr = [];
  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
  }
  return arr.toString();
}

// function returns all the database entries
var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  

  // function to create table entry for mysql
  create: function(table, newRowData, cb) {
    // console.log(objToSql());
    const queryString = "INSERT INTO ?? SET ?";
    const values = [table, newRowData];
    // queryString += " (";
    // queryString += "burger_name, devoured";
    // queryString += ") ";
    // queryString += "VALUES (";
    // queryString += `${vals.name}, ${vals.devoured}`;
    // queryString += ") ";
    console.log(queryString);

    connection.query(queryString, values, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  
// function updates mysql table entry
  update: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;
    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;
    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

// exports the orm for the model
module.exports = orm;