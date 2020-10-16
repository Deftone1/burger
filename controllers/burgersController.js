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
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create([req.body.name], function(result) {
        res.json({ id: result.insertId });
    });
});
module.exports = router;