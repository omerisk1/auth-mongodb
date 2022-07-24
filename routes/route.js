const express = require('express');
const router = express.Router();
const Weather = require('../models/model')


router.route("/create").post((req,res) => {
    const lat = req.body.lat;
    const lon = req.body.lon;
    const newWeather = new Weather({
        lat,
        lon
    });
    newWeather.Save();
})

module.exports = router;