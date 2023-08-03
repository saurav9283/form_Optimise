const mongoose = require("mongoose");



const mongooConnection=()=>{
  mongoose.connect("mongodb+srv://saurav9283:Saurav2002@cluster0.cccveve.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected");
  })
  .catch((error) => {
    console.error("Error connecting:", error);
  });
}

module.exports = mongooConnection