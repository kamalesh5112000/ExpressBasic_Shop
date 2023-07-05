const express = require('express');

const ShopController=require('../controllers/shop');
const router= express.Router();

router.get('/',ShopController.getProducts);
router.post('/',ShopController.addProduct);
router.put('/:ID',ShopController.buyProduct);
router.delete('/:ID',ShopController.productdelete);

module.exports=router;
