const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const index = require("./routes/index");
const todoRoute = require("./routes/todoRoute");

const app = express();
const port = process.env.PORT || 3000;  // declaring port statement

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));  // reads buffer as plain text and exposes string on req.body



// BELOW are all examples of Middleware functions
app.listen(port);
console.log(`server running on port ${port}`);   // port listen statement

// Endpoints
app.use("/", index);  // gets the default homepage

app.use("/tasks", todoRoute); // this will allow us to use the todo Functions

// Error handler statements


// First error handler statement, will be triggered when the
// user enters incorrect endpoint URL (Ex /cars vs /cats)
app.use(function(req,res,next){
    const err = new Error("Resource Not Founc");
    err.status = 404;
    next(err)
})

// The error message from the previos block will be passed down and carried
// This block will output the status from the previous block, or for
// some reason if unable to do so it will send a 500 Error, indication a server error
app.use(function(err,req,res,next){
    res.status(err.status || 500).json({message: err.message});
})
