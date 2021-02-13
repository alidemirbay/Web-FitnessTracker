const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: { type: Date, dafault: Date.now },
    exercises: [{
        type: { type: String, required: true },
        name: { type: String, required: true },
        duration: { type: Number, },
        weight: { type: Number },
        reps: { type: Number },
        sets: { type: Number },
        distance: { type: Number }
    }]
},
    { toJSON: { virtuals: true } }
);

WorkoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((acc, exercise) => {
        return acc + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;