const { Schema, model } = require("mongoose");
const movieScheduleSchema = new Schema(
  {
    movieID: {
      type: Schema.Types.ObjectID,
      ref: "movie",
    },
    ThreatreID: {
      type: {
        type: Schema.Types.ObjectID,
        ref: "threatre",
      },
      startTime: {
        type: Date,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  },
  { timestamps: true }
);

movieScheduleSchema.index({ movieID: 1, ThreatreID: 1 }, { unique: true });

const movieSchedule = model("theatre", movieScheduleSchema);
module.exports = movieSchedule;
