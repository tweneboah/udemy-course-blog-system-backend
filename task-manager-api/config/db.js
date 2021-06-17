const mongoose = require("mongoose");

//mongodb+srv://taskUser:L62QqqcgOY1MGuNV@task-manager-api.mjzz6.mongodb.net/task-manager?retryWrites=true&w=majority
const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/task-manager", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(`Db connected successfully`);
  } catch (error) {
    console.log(`Error ${error.message}`);
  }
};

module.exports = dbConnect;
