const Items = require('../models/items')

module.exports.allItems=function(req,res){
   return res.status(200).json({
        success:true,
        data:['Items']
   })
}




module.exports.specificItem=function(req,res){
   return res.status(200).json({
        success:true,
        data:'Specific Item'
   })
}



module.exports.createItem=function(req,res){
   return res.status(200).json({
        success:true,
        data:"create Item"
   })
}




module.exports.updateItem=function(req,res){
    return res.status(200).json({
        success:true,
        data:"Update items"
   })
}



module.exports.deleteItem=function(req,res){
   return res.status(200).json({
        success:true,
        data:"Delete Items"
   })
}