
const mongoose = require("mongoose")
const collectionSehema = new mongoose.Schema({
    msg: {
      type: String,
      required: true,
    },
  });

const collectionModel = mongoose.model("collection", collectionSehema);
module.exports = collectionModel;