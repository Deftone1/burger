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
    burger.create(req.body, function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/burgers/:id", function(req, res) {
    burger.update(req.params.id, function(result) {
        if (result.affectedRows === 0) {
            // If no rows were affected, then the ID must not exist, so 404
            return res.status(404).end();
          }
          res.status(200).end();
    });
});




module.exports = router;

