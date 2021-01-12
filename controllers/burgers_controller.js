const express = require('express');
const burger = require('../models/good_burger.js');
const router = express.Router();

// THIS DISPLAYS ALL THE BURGER DATA TO THE MAIN PAGE
router.get("/", function (req, res) {
    burger.all(function (data) {
        res.render("index", { burgers: data });
    });
});


// EXPORTING ROUTER MODULE
module.exports = router;

