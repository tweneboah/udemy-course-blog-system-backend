const express = require("express");
const dbConnect = require("./config/dbConnect");
const userRoute = require("./routes/usersRoute");

const app = express();
//DB
dbConnect();

//middleware
app.use(express.json());

//Routes
app.use("/users", userRoute);

//Server
app.listen(5000, console.log(`Server is running`));
