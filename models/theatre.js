const { Schema, model } = require("mongoose");
const theatreSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    isActive: {
      type: boolean,
      default: true,
    },
    location: {
      lat: { type: String, required: true },
      long: { type: String, required: true },
      address: { type: String, required: true },
    },
  },
  { timestamps: true }
);

const theatre = model("theatre", movieSchema);
module.exports = theatre;
