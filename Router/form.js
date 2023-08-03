const express = require("express")
const collectionModel = require("../Model/Collection.js")
const router = express.Router()  // connect to method

router.post("/" ,async(req, resp)=>{
    const {msg} = req.body;
    const newCollection = new collectionModel({msg});
    await newCollection.save();
    resp.send("Data Saved");
})

module.exports = router;