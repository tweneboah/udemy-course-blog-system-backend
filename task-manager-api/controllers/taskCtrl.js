const Task = require("../model/Task");

//Fetch all tasks
const fetchTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.json(tasks);
  } catch (error) {
    res.json(error);
  }
};

//fetch single task
const fetchTask = async (req, res) => {
  console.log(req.params);
  try {
    const task = await Task.findById(req.params.taskId);
    res.json(task);
  } catch (error) {
    res.json(error);
  }
};

//create task
const createTask = async (req, res) => {
  console.log(req.body);
  try {
    const task = await Task.create({
      title: req.body.title,
      description: req.body.description,
      isCompleted: req.body.isCompleted,
    });

    res.json(task);
  } catch (error) {
    res.json(error);
  }
};

//Delete task
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    res.json(task);
  } catch (error) {
    res.json(error);
  }
};

//Update task
const updateTask = async (req, res) => {
  console.log(req.params);
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.taskId,
      {
        title: req.body.title,
        description: req.body.description,
        isCompleted: req.body.isCompleted,
      },
      { new: true, runValidators: true }
    );
    res.json(task);
  } catch (error) {
    res.json(error);
  }
};
module.exports = { fetchTasks, createTask, deleteTask, updateTask, fetchTask };
