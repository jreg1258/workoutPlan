// Your assignment is to define the routes below. Good luck!

const express = require("express");
const mongojs = require("mongojs");
const mongoose = require("mongoose")
const path = require("path")
const logger = require("morgan");
const Workout = require("./workout")
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutPlan", { useNewUrlParser: true });

// Routes
// ======

// TODO: Fill in each route so that the server performs
// the proper mongojs functions for the site to function
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

// Find all books marked as read
app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "exercise.html"))
});
app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "stats.html"))
});

// Mark a book as having been read
app.post("/submit", ({body}, res) => {

    Workout.create()
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
app.get("/api/workouts", (req,res)=>{
    Workout.find({}, function(err,docs){
        if(!err){
            console.log(docs)
        }else {throw err}
    })
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            res.json(err)
        })
})

app.get("/api/workouts/range", (req,res)=>{
    Workout.find({})
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            res.json(err)
        })
})
// Mark a book as having been not read
app.put("/api/workouts/:id", (req, res) => {
  // Remember: when searching by an id, the id needs to be passed in
  // as (mongojs.ObjectId(IdYouWantToFind))
});

// Listen on port 3000
app.listen(3000, () => {
  console.log("App running on port 3000!");
});
