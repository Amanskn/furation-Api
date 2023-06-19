require('dotenv').config();
const express = require('express');
const app=express();
const port=process.env.PORT||3000;

app.use('/api',require('./routes/items.js'));
app.listen(port,(err)=>{
    if(err){
        console.log("Error in running the server and the error is :-",err);
        return;
    }
    console.log("Server is running on port:-",port);
})