const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  filename: (req, res, cb) => {
    const unique = Date.now() + "-" + Math.random() * 1e9;
    cb(null, unique + ".jpg");
  },
});

const upload = multer({ storage });

module.exports = upload;
