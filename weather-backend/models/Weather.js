const mongoose = require('mongoose');

const WeatherSchema = new mongoose.Schema({
  city: String,
  country: String,
  temp: Number,
  condition: String,
  icon: String,
  conditionText: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Weather', WeatherSchema);