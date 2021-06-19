const express = require("express");
const chalk = require("chalk");
const dbConnect = require("./config/dbConnect");
const userRoute = require("./routes/usersRoute");

const app = express();
//DB
dbConnect();

//custom middleware
//1. creating
const logger = (req, res, next) => {
  console.log(chalk.blue("Middleware logger is working"));
  //DBnext();
};

//middleware
app.use(express.json());

//2. Usage
app.use(logger);
//Routes
app.use("/users", userRoute);

//Server
app.listen(5000, console.log(`Server is running`));
