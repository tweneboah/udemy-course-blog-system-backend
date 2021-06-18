const express = require("express");
const {
  createTask,
  fetchTasks,
  deleteTask,
  updateTask,
  fetchTask,
} = require("../controllers/taskCtrl");

const taskRoute = express.Router();

taskRoute.post("/", createTask);
taskRoute.get("/", fetchTasks);
taskRoute.delete("/:id", deleteTask);
taskRoute.get("/:taskId", fetchTask);
taskRoute.put("/:taskId", updateTask);
module.exports = taskRoute;
