const connection = require("../config/connection.js");

const orm = {
    selectAll: (tableInput, cb) => {
      const queryString = "SELECT * FROM ??";
      connection.query(queryString, [tableInput], (err, result) => {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    insertOne: (table, newRowData, cb) => {
      const queryString = "INSERT INTO ?? SET ?";
      const values = [table, newRowData];
  
      connection.query(queryString, values, (err, result) => {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
  
    // Example of updateValues: { name: "panther", sleepy: true }
    // Example of condition: { id: 1 }
    updateOne: (table, updateValues, condition, cb) => {
      const queryString = "UPDATE ?? SET ? WHERE ? LIMIT 1";
      const values = [table, updateValues, condition];
  
      console.log(queryString);
      connection.query(queryString, values, (err, result) => {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    // Delete row(s) from table with given condition.
    // Example condition: { id: 1 }
    deleteOne: (table, condition, cb) => {
      const queryString = "DELETE FROM ?? WHERE ? LIMIT 1";
      const values = [table, condition];
      connection.query(queryString, values, (err, result) => {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
  };

module.exports = orm;