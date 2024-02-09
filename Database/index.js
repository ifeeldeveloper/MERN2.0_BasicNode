const mongoose = require('mongoose')
const ConnectionString = "mongodb+srv://jagadish:passJB@cluster0.t5syfqt.mongodb.net/?retryWrites=true&w=majority"
async function connectToDatabase(){
  await  mongoose.connect(ConnectionString)
  console.log("Connected To DB Successfully")
}
module.exports = connectToDatabase