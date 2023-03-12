import mongoose from "mongoose";
//Model for each product
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please enter product name'],
        maxLength:[100,"Product name cannot exceed 100 characters"]
    },
    price:{
        type:Number,
        required:[true,'Please enter product name'],
        maxLength:[5,"Product price cannot exceed 5 characters"]
    
    },
    description:{
        type:String,
        required:[true,"Please enter product description"]
    },
    ratings:{
        type:Number,
        default:0
    },
    category:{
        type:String,
        required:[true,'Please select the category'],
        enum:{
            values:[
                "Electronics",
                "Clothing",
                "Beauty",
                "Sports",
                "Stationary",
                "Food",
                "Headphones",
                "Cameras",
                "Kitchen Acessories",
                "Laptops"
            ],
            message:"Please select category from the list",
        }
    },
    seller:{
        type:String,
        required:[true,'Please enter product seller name.']
    },
    stock:{
        type:Number,
        required:[true,"Please enter product stock."],
        maxLength:[5,"Product stock cannot exceed 4"]
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                //required:true
            },
            rating:{
                type:Number,
                //required:true
            },
            comment:{
                Type:String,
                //required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
})

export default mongoose.model("Product",productSchema);