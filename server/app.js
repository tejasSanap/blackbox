const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
const app = express();
require("dotenv").config();

const PORT = process.env.port
const MONGOURL = process.env.mongourl

//connect to mongodb
async function connectToMongoDB(){
    try{
      await mongoose.connect(MONGOURL);
      console.log("connected to db")
    }
    catch(err){
      console.log("error connect to db",err);
    }
  }
connectToMongoDB();

app.use(cors());
app.use(express.json());

app.use(authRoute);

app.get('/',(req,res)=>{
    return res.json("hi there")
})
app.listen(PORT,()=>{
    console.log(`hi ${PORT} open for backend development`)
}) 