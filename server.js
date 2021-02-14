const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3000;

// Creating express app and configuring middleware needed for authentication
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


// Requiring our routes
app.use(require("./routes/html-routes"));
app.use(require("./routes/api-routes"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// Syncing our database and logging a message to the user upon success
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});