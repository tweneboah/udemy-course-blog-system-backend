const express = require("express");
const {
  fetchTasks,
  createTask,
  deleteTask,
  updateTask,
  fetchTask,
} = require("./controllers/taskCtrl");
const dbConnect = require("./config/db");
const app = express();

//Db
dbConnect();
//Middleware
app.use(express.json());
//Custom Middleware
const isLogin = (req, res, next) => {
  //check if user is login
  return next();
};

app.use(isLogin);
//Routing
//Get all - get
app.get("/tasks", fetchTasks);

//Fetch Single task
app.get("/task/:taskId", fetchTask);
//Create - Post
app.post("/task", createTask);

//Delete post - delete
app.delete("/task/:id", deleteTask);

//Update post - delete
app.put("/task/:taskId", updateTask);
//Creating server
app.listen(5000, console.log(`Server is running`));

//
