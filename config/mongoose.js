
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL)
  .then((data) => console.log('Successfully Connected! to tha database'))
  .catch((err)=>{
    console.log("Error in connecting to the Database and the error is :-",err);
  });
