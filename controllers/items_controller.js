const Item = require('../models/items');
const mongoose=require('mongoose')


// ---------This is the action for getting all the items from the database
module.exports.allItems = async function(req,res){
    
    try {
        const allItems = await Item.find({});
        
        //----------simple check 
        // console.log(typeof allItems)

        return res.status(200).json({
            success:true,
            total_Items_Count:allItems.length,
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
module.exports.specificItem = async function(req,res){
    try {
        const {id}=req.params;
        // ---------- a simple check
        // console.log("This is the id",id)
        const itemId = new mongoose.Types.ObjectId(id);
        const item = await Item.findOne({_id:itemId});
        if(item){
            return res.status(200).json({
                success:true,
                Items:item
            })
            
        }
        else{
            return res.status(200).json({
                success:true,
                message:`No item exists with the id=${id}`
            })
            
        }
        
    } catch (error) {
        console.log("Error in fetching the single item from the database and the error is :-", error);
        return res.status(500).json({
            success:true,
            message:'Internal server error'
        })
        
    }
    
}



// ---------This is the action for creating an item and saving it into the database
module.exports.createItem = async function(req,res){
   try {

        const nameOfTheItem = req.body.name;
        if(!nameOfTheItem){
            return res.status(200).json({
                success:true,
                message:"Please provide the name of the product in order to create it",
                
            })

        }
        const newItem=await Item.create({
            name:nameOfTheItem
        });
        return res.status(200).json({
            success:true,
            message:"Here is the item that just got created",
            item:newItem
        })
    } catch (error) {
        console.log("Error in creation of a new Item and the error is :-",error);
        return res.status(200).json({
            success:true,
            message:"Internal server error",
            
        })
        
   }
}



// ------------This is the action for updating a specific item into the database
module.exports.updateItem = async function(req,res){
   try {
        const {id}=req.params;
        // ---------- a simple check
        // console.log("This is the id",id)
        const nameToBeUpdated = req.body.name;
        if(!nameToBeUpdated){
            return res.status(200).json({
                success:true,
                message:"Please provide the name of the product in order to update it",
                
            })

        }
        
        const itemId = new mongoose.Types.ObjectId(id);
        const updatedItem= await Item.findByIdAndUpdate(itemId,{name:nameToBeUpdated},{new:true});
        return res.status(200).json({
            message:"Item updated successfully and the updated item is ",
            updated_Item:updatedItem
        })
   } catch (error) {
        console.log("There came and error while updating the item and the error is :-",error);
        return res.status(200).json({
            message:"Internal server error"
        })

   }
}




// ------------------This is the action for deleting a specific item from the database
module.exports.deleteItem = async function(req,res){
   try {
        const {id} = req.params;
        const itemId = new mongoose.Types.ObjectId(id);
        const deletedItem = await Item.findByIdAndDelete(itemId);
        if(!deletedItem){

            return res.status(200).json({
                success:true,
                message:"No item exist with the provided id"
            })
        }
        return res.status(200).json({
            success:true,
            message:"Item deleted successfully and the item was...",
            deleted_item:deletedItem
        })
    } catch (error) {
        console.log("An error came while deleting the items and the error is :-",error);
        return res.status(200).json({
            success:true,
            message:"Internal server error"
        })
    
   }
}