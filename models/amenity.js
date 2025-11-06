const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const amenitySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  icon: {
    type: String, // Optional — can store a FontAwesome or image class name
    default: ""
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model("Amenity", amenitySchema);
3