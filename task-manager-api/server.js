const express = require("express");
const {
  fetchTasks,
  createTask,
  deleteTask,
  updateTask,
  fetchTask,
} = require("./controllers/taskCtrl");
const dbConnect = require("./config/db");
const taskRoute = require("./routes/taskRoute");

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

//Fetch Single task
app.get("/task/:taskId", fetchTask);
//Create - Post
app.use("/tasks", taskRoute);

//Creating server
app.listen(5000, console.log(`Server is running`));

//
