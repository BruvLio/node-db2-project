// DO YOUR MAGIC
const express = require("express");
const Cars = require("./cars-model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const cars = await Cars.getAll(req.body);
    res.json(cars);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
