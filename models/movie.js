const { Schema, model } = require("mongoose");
const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      enum: ["en", "hin"],
      required: true,
    },
  },
  { timestamps: true }
);

const movie = model("movie", movieSchema);
module.exports = movie;
