const mongoose=require('mongoose');


const productSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        requirted:true
    },
    price:{
        type:Number,
        min:0
    },
    img: {
        type:String,
        tim:true,
        default:'./images/product.jpg'
    },
    desc:{
        type:String,
        trim:true
    }
});

const Product=mongoose.model('Product',productSchema);
module.exports=Product;