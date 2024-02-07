const express = require("express")
const app =  express()

/* Alternative of first two lines
  const app = require('express')()
*/

app.get("/",(req,res)=>{
  //console.log(req)
  res.send("Hello World")
})

app.listen(3000,()=>{
  console.log("Nodejs server has been started at port 3000")
})