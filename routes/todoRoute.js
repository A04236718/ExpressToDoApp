const express = require('express');
const toDoController = require('../controllers/toDoController.js')
const router = express.Router();

// Create the HTTP methods to reference to the implementation in the controller file


// These are all endpoints that consist of /tasks already
// you need an addition / after the tasks 

// These are all functions contained in the toDoController.js

// We want this to display the entire array
// of both completed and incompleted tasks
router.get("/", toDoController.index);

// show a single task given by the ID
router.get("/:id", toDoController.show);

// Create a single object
router.post("/", toDoController.create);

// Update a single existing task object
router.put("/", toDoController.update);

// delete an existing task object
router.delete("/:id", toDoController.delete);

module.exports = {router}
