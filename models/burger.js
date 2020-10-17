const orm = require("../config/orm.js");

const burger = {
    all: (cb) => {
      orm.selectAll("burgers", (res) => {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: (newBurger, cb) => {
      orm.insertOne("burgers", newBurger, (res) => {
        cb(res);
      });
    },
    update: (updateBurger, criteria, cb) => {
      orm.updateOne("burgers", updateBurger, criteria, (res) => {
        cb(res);
      });
    },
    delete: (condition, cb) => {
      orm.deleteOne("burgers", condition, (res) => {
        cb(res);
      });
    },
  };

module.exports = burger;