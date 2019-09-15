const express = require('express');
const router = express.Router();

// Get the HomePage Endpoint
// Not dealing with any of the tasks endpoints

router.get("/", function(res,req,next){
    res.send("Welcome to the ToDo App! You have not Selected any Endpoint Yet");
})

module.exports = {router};