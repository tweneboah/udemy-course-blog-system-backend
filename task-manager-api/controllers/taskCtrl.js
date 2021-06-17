const Task = require("../model/Task");
//Fetch all tasks
const fetchTasks = (req, res) => {
  res.json({ msg: "Welcome to Task Manager API" });
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
const deleteTask = (req, res) => {
  res.json("Task Deleted");
};

//Update task
const updateTask = (req, res) => {
  res.json("Task Updated");
};
module.exports = { fetchTasks, createTask, deleteTask, updateTask };
