const express = require('express');
const burger = require('../models/good_burger.js');
const router = express.Router();

// THIS DISPLAYS ALL THE BURGER DATA TO THE MAIN PAGE
router.get("/", function (req, res) {
    burger.all(function (data) {
        res.render("index", { burgers: data });
    });
});

// THIS ROUTE DISPLAYS THE BURGERS READY TO BE DEVOURED
router.post("/api/burgers", function (req, res) {
    burger.create(["burger_name"], [req.body.burger_name],
        function (result) {
            res.json({ id: result.insertId });
        });
});


// EXPORTING ROUTER MODULE
module.exports = router;

