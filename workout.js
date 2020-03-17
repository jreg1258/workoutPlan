const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  type : {
    type: String,
    trim: true,
    required: true
  },
  exerciseName: {
    type: String,
    trim: true,
    required: true
  },
  weight : {
    type: String,
    trim: true,
    required: true
  },
  sets : {
      type: Number,
      trim: true,
      required: true
  },
  reps : {
        type: Number,
        trim: true,
        required: true
  },
  duration : {
        type: Number,
        trim: true,
        required: true
  },
  userCreated : {
    type: Date,
    default: Date.now()
  }


});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;