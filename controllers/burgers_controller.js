const express = require('express');
const burger = require('../models/good_burger.js');
const router = express.Router();

// THIS DISPLAYS ALL THE BURGER DATA TO THE MAIN PAGE
router.get("/", function(req, res) {
    burger.all(function(data) {
        res.render("index", { burgers: data });
    });
});

// THIS ROUTE DISPLAYS THE BURGERS READY TO BE DEVOURED
router.post("/api/burgers", function(req, res) {
    burger.create(["burger_name"], [req.body.burger_name],
        function(result) {
            res.json({ id: result.insertId });
        });
});

// THIS ROUTE UPDATES THE BURGER DEVOURED STATUS
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    burger.update({
        devoured: req.body.devoured,
    }, condition, function(result) {
        if (result.chengedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// THIS ROUTE DELETES A DEVOURED BURGER
router.delete("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    burger.delete(condition, function (result) {
            if (result.chengedRows == 0) {
                return res.status(404).end();
            } res.status(200).end();
        });
});

// EXPORTING ROUTER MODULE
module.exports = router;

