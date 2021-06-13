const mongoose = require("mongoose");

const BusSchema = new mongoose.Schema({
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  busNumber: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  busModel: {
    type: String,
    required: true,
  },
  seats: {
    type: Number,
    required: true,
    max: 40,
  },
  departureTime: {
    type: String,
    required: true,
  },
  arrivalTime: {
    type: String,
    required: true,
  },
  fare: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Bus = mongoose.model("bus", BusSchema);
