const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/blog-app", {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("DB has connected Successfully");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = dbConnect;

//I1A82ByrvFsJfdQ4
