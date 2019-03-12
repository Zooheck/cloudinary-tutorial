const { config, uploader } = require("cloudinary");
// require("dotenv").config();
// const cloudinaryConfig = (req, res, next) => {
//   config({
//     cloud_name: process.env.CLOUDINARY_API_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
//   });
//   next();
// };
const cloudinaryConfig = () =>
  config({
    cloud_name: process.env.CLOUDINARY_API_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });

module.exports = { cloudinaryConfig, uploader };
