const productsSchema = require('../schema/Products.schema');
const ObjectId = require('mongodb').ObjectID;

const createProduct = (req, res) => {
    
    const {productName, details, category} = req.body;   
    
    const product = new productsSchema ({
        productName: productName,
        category: category,
        details: details,
    });
    product.save((err) => {
        if (err) return res.json({"error": err})
        return res.json({"success": product})
    });
}

const getProduct = (req, res) => {
    productsSchema.find({}).then((product) => {
        return res.send(product)
    });
}

const getById =(req, res) => { 
    const {id} =req.params;
    productsSchema.find({_id:ObjectId(id)
    }).then((product) => {
        return res.send(product)
    });
}

module.exports = {
    create: createProduct,
    getAll: getProduct,
    getById
}
