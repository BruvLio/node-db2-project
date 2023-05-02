// DO YOUR MAGIC
const express = require("express");
const cars = require("./cars-model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  res.status(200).json({
    message: "Test",
  });
  //   console.log("made it to get");
});

module.exports = router;
