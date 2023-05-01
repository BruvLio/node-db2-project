const express = require("express");

const server = express();

server.use(express.json());

server.use("/api/cars");

server.get("/", (req, res) => {
  res.status(200).json({
    api: "Up and running",
  });
});

module.exports = server;
