const express=require("express");
const app=express();
const bodyParser=require("body-parser");  // This is used to access the request body when we are sending the data to request body
const cors=require("cors");  // using cors we can make the request to your server from different domain
const mongoose=require("mongoose");



require("dotenv").config();  // this is used for load environment variable from a file name .env and make them accessible through process.env




const routes=require("./route");


// This  is cors middleware
var corsOptions={
origin: "http://localhost:8081",
};
app.use(cors(corsOptions));

//  This is body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


// mongodb connection middleware
let DB=process.env.DB;
mongoose
    .connect(DB,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>console.log("mongoDB connected Successfully"))
    .catch((err)=> console.log(err));



// Routes middleware
app.use("/api/userpost",routes);

const PORT=process.env.PORT || 8084;

app.listen(PORT, ()=>
{
    console.log(`Server is running on port ${PORT}`);
});


