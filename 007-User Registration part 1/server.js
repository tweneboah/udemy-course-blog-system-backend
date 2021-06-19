const express = require("express");
const dbConnect = require("./config/dbConnect");
const { registerUserCtrl } = require("./controller/userCtrl");

const app = express();
//DB
dbConnect();

//middleware
app.use(express.json());
//Register
app.post("/users/register", registerUserCtrl);
//Server
app.listen(5000, console.log(`Server is running`));
