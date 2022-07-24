const mongoose = require("mongoose");

const weatherSchema = {
     lat: String,
     lon: String
}

const Weather = mongoose.model("Weather", weatherSchema)

module.export = Weather;