const Items = require('../models/items')


// ---------This is the action for getting all the items from the database
module.exports.allItems = async function(req,res){
    
    try {
        const allItems = await Items.find({});
        return res.status(200).json({
            success:true,
            List_of_all_Items:allItems
        })
        
    } catch (error) {
        console.log("Error in fetching the items from the database and the error is :-", error);
        return res.status(500).json({
            success:true,
            message:'Internal server error'
        })
        
    }

}




// ---------This is the action for getting a specific item from the database
module.exports.specificItem=function(req,res){
    return res.status(200).json({
        success:true,
        data:'Specific Item'
    })
}



// ---------This is the action for creating an item and saving it into the database
module.exports.createItem=function(req,res){
   return res.status(200).json({
        success:true,
        data:"create Item"
   })
}



// ------------This is the action for updating a specific item into the database
module.exports.updateItem=function(req,res){
    return res.status(200).json({
        success:true,
        data:"Update items"
   })
}




// ------------------This is the action for deleting a specific item from the database
module.exports.deleteItem=function(req,res){
   return res.status(200).json({
        success:true,
        data:"Delete Items"
   })
}