const express = require("express")
const app =  express()

const connectToDatabase = require("./Database")

/* Alternative of first two lines
  const app = require('express')()
*/

connectToDatabase()

app.get("/",(req,res)=>{
  res.status(200).json({
    "message" : "success"
  })
})

app.listen(3000,()=>{
  console.log("Nodejs server has been started at port 3000")
})