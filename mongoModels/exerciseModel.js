const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    exercise_name: String
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;