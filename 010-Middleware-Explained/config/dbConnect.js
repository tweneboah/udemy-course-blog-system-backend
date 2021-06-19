const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://blog-app:I1A82ByrvFsJfdQ4@blog-app.mu3ew.mongodb.net/blog-app?retryWrites=true&w=majority",
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    );
    console.log("DB has connected Successfully");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = dbConnect;

//I1A82ByrvFsJfdQ4
