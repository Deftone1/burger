const orm = require("../config/orm.js");

// ORM burger variable 
const burger = {
    all: (cb) => {
      orm.all("burgers", (res) => {
        cb(res);
      });
    },
    
    create: (newBurger, cb) => {
      console.log(newBurger);
      orm.create("burgers", newBurger, (res) => {
        cb(res);
      });
    },
    update: (updateBurger, criteria, cb) => {
      console.log(updateBurger, criteria);
      orm.update("burgers", updateBurger, criteria, (res) => {
        cb(res);
      });
    },
  };

module.exports = burger;