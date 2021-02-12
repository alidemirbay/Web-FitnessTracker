const router = require("express").Router();
const { Workout } = require("../models");
// let db = require("../models");

router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(data => { res.json(data); })
        .catch(err => { res.json(err); });
});

router.post("/api/workouts", (req, res) => {
    const newWorkout = { day: Date.now(), exercises: [req.body] }
    Workout.create(newWorkout)
        .then(data => { res.json(data); }).
        catch(err => { res.json(err); });
});

