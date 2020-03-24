const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now()
  },
<<<<<<< HEAD
<<<<<<< HEAD
  tDuration: {
    type: Number
  },
  exercises: [{
=======
  exercises: [
    {
>>>>>>> parent of 4f42a6b... added updated stat tracking
=======
  exercises: [
    {
>>>>>>> parent of 4f42a6b... added updated stat tracking
      type: {
        type: String,
        trim: true,
        required: "Enter a workout type"
      },
      name: {
        type: String,
        trim: true,
        required: true
      },
      duration: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      }
    }
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;