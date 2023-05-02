const express = require("express");

const router = require("./cars/cars-router");

const server = express();

server.use(express.json());

server.use("/api/cars", router);

server.use("*", (req, res, next) => {
  next({ status: 404, message: "not found" });
});

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

// server.get("/", (req, res) => {
//   res.status(200).json({
//     api: "up",
//   });
// });
module.exports = server;
