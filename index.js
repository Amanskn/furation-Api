require('dotenv').config();
const express = require('express');
const app=express();
const DB=require("./config/mongoose")
const port=process.env.PORT||3000;

app.use(express.json());




app.use('/api',require('./routes/items.js'));
app.all('*',(req,res)=>{
    return res.status(404).json({
        message:'Wrong url is being hit'
    })
});
app.listen(port,(err)=>{
    if(err){
        console.log("Error in running the server and the error is :-",err);
        return;
    }
    console.log("Server is running on port:-",port);
})