const express = require("express")
const app =  express()
const mongoose = require('mongoose')

/* Alternative of first two lines
  const app = require('express')()
*/

const ConnectionString = "mongodb+srv://jagadish:passJB@cluster0.t5syfqt.mongodb.net/?retryWrites=true&w=majority"

async function connectToDatabase(){
  await  mongoose.connect(ConnectionString)
  console.log("Connected To DB Successfully")
}
connectToDatabase()



app.get("/",(req,res)=>{
  //console.log(req)
  res.status(200).json({
    "message" : "success"
  })
})

app.listen(3000,()=>{
  console.log("Nodejs server has been started at port 3000")
})