const express = require("express");
const router = express.Router({ mergeParams: true });
const Booking = require("../models/booking");
const Listing = require("../models/listing");
const { isLoggedIn } = require("../middleware");
const wrapAsync = require("../utils/wrapAsync");

// CREATE Booking
router.post("/", isLoggedIn, wrapAsync(async (req, res) => {
  const { id } = req.params;
  const { checkIn, checkOut } = req.body;

  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing not found");
    return res.redirect("/listings");
  }

  // Calculate number of days
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  const totalPrice = listing.price * days;

  const booking = new Booking({
    listing: id,
    user: req.user._id,
    checkIn,
    checkOut,
    totalPrice
  });

  await booking.save();

  req.flash("success", "Booking confirmed!");
  res.redirect(`/bookings/${booking._id}`);
}));

// SHOW Booking details
router.get("/:bookingId", isLoggedIn, wrapAsync(async (req, res) => {
  const booking = await Booking.findById(req.params.bookingId)
    .populate("listing")
    .populate("user");

  if (!booking) {
    req.flash("error", "Booking not found");
    return res.redirect("/listings");
  }

  res.render("bookings/show.ejs", { booking });
}));

// USER’s bookings
router.get("/", isLoggedIn, wrapAsync(async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id }).populate("listing");
  res.render("bookings/index.ejs", { bookings });
}));

module.exports = router;
