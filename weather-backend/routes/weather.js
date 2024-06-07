const express = require('express');
const Weather = require('../models/Weather');
const router = express.Router();

// Endpoint to save weather data
router.post('/save', async (req, res) => {
  const { city, country, temp, condition, icon, conditionText } = req.body;

  const newWeather = new Weather({
    city,
    country,
    temp,
    condition,
    icon,
    conditionText,
  });

  try {
    const savedWeather = await newWeather.save();
    res.status(201).json(savedWeather);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;