// import express from "express";
// import { urlencoded, json } from "body-parser";
// import { resolve } from "path";
const express = require("express");
const config = require("./middleware/config.js");
const { multerUploads, dataUri } = require("./middleware/multer.js");
const {
  cloudinaryConfig,
  uploader
} = require("./middleware/cloudinaryConfig.js");

const server = express();
config(server);
cloudinaryConfig(server);

// const app = express();
// const Port = process.env.PORT || 3000;

// app.use(express.static(resolve(__dirname, "src/public")));
// app.use(urlencoded({ extended: false }));
// app.use(json());

// app.get("/*", (req, res) =>
//   res.sendFile(resolve(__dirname, "../public/index.html"))
// );
cloudinaryConfig(server);

server.get("/", (req, res) => {
  res.send("Sanity check good!");
});

server.post("/upload", multerUploads, (req, res) => {
  if (req.file) {
    const file = dataUri(req).content;
    return uploader.upload(file).then(result => {
      const image = result.url;
      return res
        .status(200)
        .json({
          message: "Your image has been uploaded successfully to cloudinary",
          image: image
        })
        .catch(err =>
          res.status(400).json({
            message: "Something went wrong while processing your request",
            err: err
          })
        );
    });
  }
});

module.exports = server;
