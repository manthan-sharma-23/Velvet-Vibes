const cloudinary = require("../config/cloudinary");

function imgUpload(req, res, next) {
  cloudinary.uploader.upload(req.file.path, function (err, result) {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Error",
      });
    }
    req.result = result;
    next();
  });
}

module.exports = imgUpload;
