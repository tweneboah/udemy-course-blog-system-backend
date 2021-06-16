const fs = require("fs");

//Readfile
// fs.readFile("./message.txt", "utf8", (err, text) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(text);
//   }
// });

//Delete files

// fs.unlink("./message.txt", (err, text) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File has deleted");
//   }
// });

//Copy files
fs.copyFile("./hello.txt", "destination.txt", (err, text) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File has copied");
  }
});
