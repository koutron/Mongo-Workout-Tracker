const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
    duration: String,
    weight: String,
    reps: String,
    sets: String,
    distance: String,
    exerciseId: {type: Schema.Types.ObjectId, ref: "Exercise"}  
});

const Activity = mongoose.model("Activity", ActivitySchema);

module.exports = Activity;