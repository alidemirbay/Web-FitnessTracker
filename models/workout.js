const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: { type: Date, default: Date.now },
    exercises: [{
        type: { type: String, trim: true, required: true },
        name: { type: String, trim: true, required: true },
        distance: { type: Number, trim: true },
        duration: { type: Number, trim: true },
        weight: { type: Number, trim: true },
        reps: { type: Number, trim: true },
        sets: { type: Number, trim: true }
    }]
}, { toJSON: { virtuals: true } }
);

WorkoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((acc, exercise) => {
        return acc + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;