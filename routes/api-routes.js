const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(data => { res.json(data); })
        .catch(err => { res.json(err); });
});

router.post("/api/workouts", (req, res) => {
    // const newWorkout = { day: Date.now(), exercises: [req.body] }
    db.Workout.create(req.body)
        .then(data => { res.json(data); })
        .catch(err => { res.json(err); });
});

router.put('/api/workouts/:id', (req, res) => {
    const newExercise = req.body;
    db.Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: newExercise } })
        .then(data => { res.json(data); })
        .catch(err => { res.json(err); });
})

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).limit(7)
        .then(data => { res.json(data); })
        .catch(err => { res.json(err); });
});

module.exports = router; 