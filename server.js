// -- BRING IN OUR PROJECT REQUIREMENTS -- //
const express = require("express")
const path = require("path")
const mongoose = require("mongoose");

// -- Requiring our Routes -- //
const api_routes = require("./routes/api_routes");
const about_routes = require("./routes/html_routes");

// -- CREATE AN `EXPRESS` INSTANCE -- //
const app = express();
// -- DEFINE A PORT -- //
const PORT = process.env.PORT || 5000;

// Connect to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// -- PARSE FORM (CLIENT-SIDE) INPUTS -- //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// -- TELL EXPRESS WHERE OUR STATIC FILES ARE LOCATED -- //
app.use(express.static("public"));

// ================================== // 
// -- Activity Syntax -> Passing App INSTANCE to Route -- //
require("./routes/html_routes")(app);

// -- Example ROUTES using EXPRESS ROUTER (https://expressjs.com/en/guide/routing.html) -- //

// -- Use express router to register routes as middleware -- //
app.use('/api', api_routes);

// ======= ALTERNATE SYNTAX FOR /about ROUTE USING EXPRESS ROUTER ==== //
// app.use('/about', about_routes);  // <-- uncomment to use, update 

// Syncing our sequelize models and then starting our Express app
// =============================================================

app.listen(PORT, function () {
  console.log(`App running on port ${PORT}!`);
});


