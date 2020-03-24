const Workout = require("../models/workout")

module.exports = function(app) {
  // route to get all of the workouts
  app.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then((results) => {
        res.json(results)
      })
      .catch(err => {
        res.status(400).json(err);
      })
  })

  // route to post a new workout
  app.post("/api/workouts", ({ body }, res) => {
<<<<<<< HEAD
<<<<<<< HEAD
    Workout.create(body,{$push: {exercises: body}})
=======
=======
>>>>>>> parent of 4f42a6b... added updated stat tracking
    Workout.create(body)
>>>>>>> parent of 4f42a6b... added updated stat tracking
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        res.status(400).json(err)
      })
  })

  // route to update a workout
  app.put("/api/workouts/:id", ({ params, body }, res) => {
    // find the id to update the database 
<<<<<<< HEAD
<<<<<<< HEAD
    console.log(body)
    Workout.findByIdAndUpdate({ _id : params.id }, 
      {$push: {exercises: [{
            "type": body.type,
            "name": body.name,
            distance: body.distance,
            weight: body.weight,
            reps: body.reps,
            sets: body.sets,
            duration: body.duration
      }]}})
      .then(()=>{
        Workout.findByIdAndUpdate({ _id : params.id }, {$inc:{tDuration: body.duration}}
        )})
          .then(() => {
        // have to do another .then to return a promise that updates the front-end
            Workout.findOne({ _id: params.id })
              .then(results => {
                res.json(results)
        })  
=======
    Workout.findByIdAndUpdate({ _id : params.id }, body)
      .then(() => {
        // have to do another .then to return a promise that updates the front-end
=======
    Workout.findByIdAndUpdate({ _id : params.id }, body)
      .then(() => {
        // have to do another .then to return a promise that updates the front-end
>>>>>>> parent of 4f42a6b... added updated stat tracking
        Workout.findOne({ _id: params.id })
        .then(results => {
          res.json(results)
        })
<<<<<<< HEAD
>>>>>>> parent of 4f42a6b... added updated stat tracking
=======
>>>>>>> parent of 4f42a6b... added updated stat tracking
      })
      .catch(err => {
        res.status(400).json(err)
      })
  })

  // route to get the stats 
  app.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .then((results) => {
        res.json(results)
      })
      .catch(err => {
        res.status(400).json(err);
      })
  })
}
