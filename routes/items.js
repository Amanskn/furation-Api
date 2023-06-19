const express=require('express');
const router=express.Router();
const itemsController=require('../controllers/items_controller.js');


router.get('/items',itemsController.allItems)
router.get('/items/:id',itemsController.specificItem)
router.post('/items',itemsController.createItem)
router.put('/items/:id',itemsController.updateItem)
router.delete('/items/:id',itemsController.deleteItem)

module.exports=router;