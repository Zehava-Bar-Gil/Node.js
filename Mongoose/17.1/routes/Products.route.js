const express = require('express');
const router = express.Router();
const productController = require('../controllers/Products.contorller');


router.get('/',(req,res)=>{
   productController.getAll(req,res);
}).post('/',(req,res)=>{
   productController.create(req,res);  
}).get('/:id',(req,res)=>{
   productController.getById(req,res);
})

module.exports = router;
