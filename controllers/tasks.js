const Task = require("../models/task");
const asyncWrapper = require("../middleware/async");

const getAllTasks = asyncWrapper( async(req, res) =>{
        const tasks = await Task.find({});
        console.log("getAllTasks")
        res.status(201).json(tasks);
});

const createTask = async (req, res) =>{
    try {
        const task = await Task.create(req.body);
        console.log(task);
        res.status(201).json({task});
    } catch (err) {
        console.log({msg: err});
        res.status(500).json({msg: err})
    }
}
const getTask = async (req, res) =>{
    const id = req.params.id;
    console.log(id);
    try {
        const tasks = await Task.find({_id:id});
        console.log(tasks);
        res.status(201).json(tasks);
    } catch (err) {
        console.log({msg: err});
        res.status(500).json({msg: err})
    }
}
const updateTask = async (req, res) =>{
    const id = req.params.id;
    const body = req.body;
    try {
        const tasks = await Task.findOneAndUpdate({_id:id},body,{
            new: true, 
            runValidators: true,

        });
        console.log("Update");
        console.log(tasks);
        res.status(201).json(tasks);
    } catch (err) {
        console.log({msg: err});
        res.status(500).json({msg: err})
    }
}
const deleteTask = async (req, res) =>{
    const id = req.params.id;
    console.log("Delete");
    try {
        const task = await Task.findOneAndDelete({_id:id});
        if(!task){
            return res.status(404).json({msg: `No task with id: ${id}`});
        }
        res.status(201).json(task);
    } catch (err) {
        console.log({msg: err});
        res.status(500).json({msg: err})
    }
    
}
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}