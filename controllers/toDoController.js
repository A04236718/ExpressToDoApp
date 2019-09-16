const taskService = require('../models/toDoModel.js');


// Function tied with the .GET Request to Display
// a task based off using query Params
exports.index = (req,res,next) => {
    const tasks = taskService.getTasks(req.query);
    res.status(200).json({ta})
};

exports.create = (req,res,next) => {
    const task =
}