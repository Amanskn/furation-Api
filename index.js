require('dotenv').config();
// ---------------Requiring the express library
const express = require('express');

// ---------------Creating the server
const app=express();

// ----------------Requiring the database configuration
const DB=require("./config/mongoose")

// ---------------The port on which the database will run
const port=process.env.PORT||3000;

// ------------Requiring the middleware for parsing the json payloads coming from frontend
// --------------- so that we can access the data using req.body.key
app.use(express.json());



// -----------This is the middleware which basically instructs the server to go and
// ----------look up into items file inside routes folder whenever there comes a request
// ------------with baseurl + api
app.use('/api',require('./routes/items.js'));

// -------------For any non existing url we simply revert back with a simple message of wrong url
app.all('*',(req,res)=>{
    return res.status(404).json({
        message:'Wrong url is being hit'
    })
});


// ---------Finally starting the server here
app.listen(port,(err)=>{
    if(err){
        console.log("Error in running the server and the error is :-",err);
        return;
    }
    console.log("Server is running on port:-",port);
})