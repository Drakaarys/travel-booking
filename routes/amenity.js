const express = require("express");
const router = express.Router();
const Amenity = require("../models/amenity");
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedIn } = require("../middleware");

// List all amenities
router.get("/", wrapAsync(async (req, res) => {
  const amenities = await Amenity.find({});
  res.render("amenities/index.ejs", { amenities });
}));

// New amenity form
router.get("/new", isLoggedIn, (req, res) => {
  res.render("amenities/new.ejs");
});

// Create amenity
router.post("/", isLoggedIn, wrapAsync(async (req, res) => {
  const { name, icon, description } = req.body;
  await Amenity.create({ name, icon, description });
  req.flash("success", "Amenity added successfully!");
  res.redirect("/amenities");
}));

module.exports = router;  // ✅ no extra text, no numbers, no semicolon issues
