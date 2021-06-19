const express = require("express");
const dbConnect = require("./config/dbConnect");

const app = express();

//DB
dbConnect();
//Server
app.listen(5000, console.log(`Server is running`));
