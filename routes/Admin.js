const express = require("express");
const router = express.Router();
const admin = require("../modules/admin");
const { body, validationResult } = require("express-validator");
const multer = require("multer");

const upload = multer({ dest: "./uploads" });
// route 1: upload to the database /api/admin/upload-data
router.post(
  "/upload-data",
  upload.single("img"),
  [
    body("name", "must be 5 character").isLength({ min: 3 }),
    body("type", "must be 5 character").isLength({ min: 3 }),
    body("brand", "must be 3 character").isLength({ min: 3 }),
    body("desc", "must be 5 character").isLength({ min: 3 }),
    body("price", "must be 2 character").isLength({ min: 2 }),
  ],
  async (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      try {
        console.log(req.body);
        console.log("uploadinggggg");
        console.log(req.file);

        // if (req.file) {
        //   return res.redirect("/");
        // } else {
        //   console.error("Error uploading image");
        //   return res.status(500).json({ error: "Error uploading image" });
        // }
      } catch (error) {
        console.error("Error in /upload-img route:", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
    }
  }
);

module.exports = router;
