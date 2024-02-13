const express = require("express");
const router = express.Router();
const admin = require("../modules/admin");

router.get("/filtered-data", async (req, res) => {
  try {
    console.log("this is me")
    // Retrieve filtering criteria from query parameters
    const { type } = req.query;

    // Construct the filter object based on provided criteria
    //   const filter = {};
    //   if (name) filter.name = name;
    //   if (age) filter.age = age;

    // Query the database with the filter object
    const filteredData = await admin.find({ type: type });

    // Return the filtered data as JSON response
    res.json(filteredData);
    console.log(filteredData);
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
