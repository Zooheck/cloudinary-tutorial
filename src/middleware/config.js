const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

module.exports = server => {
  server.use(helmet());
  server.use(express.json());
  server.use(morgan("dev"));
  server.use(cors());
};
