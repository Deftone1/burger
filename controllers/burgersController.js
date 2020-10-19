const express = require("express");

// Import the model (cat.js) to use its database functions.
const burger = require("../models/burger.js");

const router = express.Router();

// this creates all the routes needed 
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        // console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// this creates the post request from user inputted data
router.post("/api/burgers", function(req, res) {
    console.log(req.body)
    burger.create(req.body, function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition =  "id = " + req.params.id;
    burger.update(req.body, condition, function(result) {
        if (result.changedRows === 0) {
            // If no rows were affected, then the ID must not exist, so 404
            return res.status(404).end();
          }
          res.status(200).end();
    });
});

module.exports = router;

