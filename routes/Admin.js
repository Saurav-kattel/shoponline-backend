const express=require("express");
const router=express.Router();
const admin=require("../modules/admin");
const { body, validationResult } = require("express-validator");
const multer  = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage })
// route 1 :upload to database /api/admin/upload-img
router.post("/upload-img", upload.single('img'), (req, res) => {
  try {
    console.log("uploadinggggg");
    console.log(req.file);

    if (req.file) {
      return res.redirect("/");
    } else {
      console.error("Error uploading image");
      return res.status(500).json({ error: "Error uploading image" });
    }
  } catch (error) {
    console.error("Error in /upload-img route:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// route 2: upload to the database /api/admin/upload-data
router.post("/upload-data",[
    body('type',"must be 5 character").isLength({min:5}),
body('brand',"must be 3 character").isLength({min:3}),
body('title',"must be 5 character").isLength({min:5}),
body('desc',"must be 5 character").isLength({min:5}),
body('price',"must be 2 character").isLength({min:2}),

],async(req,res)=>{
    console.log(req.body)
});

module.exports=router;

