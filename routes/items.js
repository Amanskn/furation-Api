const express=require('express');
const router=express.Router();
const itemsController=require('../controllers/items_controller.js');


router.get('/items',itemsController.allItems)
module.exports=router;