const express = require("express")
const mongooConnection = require("./Config/mongo.js")
const collectionRouter = require("./Router/form.js")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

// app.post("/" , async(req , res)=>{
//     const {msg} = req.body
//     console.log(msg);
//     const data={
//         msg:msg
//     }
//     await collection.insertMany([data])
//     res.send("data saved")
// })

app.use("/" , collectionRouter)
mongooConnection() // connect to mongodb
app.listen(8000 , ()=>{
    console.log("port connected to 8000") //connected to server
})