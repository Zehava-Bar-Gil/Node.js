const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true,
        unique: true,

    },
    category: {
        type: String,
        required: true,    
    },
    isActive: {
        type: Boolean,
        required: false,
        unique: false,
        default : true
    },
    details: {
        description:{
            type: String,
            required: false,
            minLength: 10,
        },
        price:{
            type: Number,
            required: true,
            min: 0,
        },
        discount:{
            type: Number,
            required: false,
            default : 0,
        },
        images:{
            type: Array,
            required: true,
            validate(value){
                if(value.length < 2 ){
                    throw new Error('Must include at least two images');
                }

            }
        },
        phone:{
            type: String,
            required: true,
            minLength: 10,
        },
        date: {
            type: Date,
            required: false,
            default : Date.now()
        }

    }
    
})

const productsSchema  = mongoose.model('products',productSchema);
module.exports= productsSchema;

