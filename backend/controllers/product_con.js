import Product from "../models/product.js";
import product from "../data/productData.json" assert{type:"json"};
import Features from "../utils/features.js";


//This api adds a new product
const newProduct=async(req,res,next)=>{

    const product=await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}

//This api diplays all the products
const getProducts=async(req,res,next)=>{

    const itemsPerPage=5;

    const search=new Features(Product.find(),req.query).search().pagination(itemsPerPage)
    const display=await search.query;

    res.json({message:"This routes controller handles product based actions",

    display})
    console.log("SHit happens")
    
}

//This api finds a particular product by id
const findProduct=async(req,res,next)=>{
    const found=await Product.findById(req.params.id)

    if(!found){
        return res.status(404).json({
            success:false,
            message:"Product not found"
        })
    }

    res.status(201).json({
        success:true,
        found
    })
}

//This api updates a particular data by id
const updateProduct=async(req,res,next)=>{

    
    //why let instead of const? we modify it below
    let found=await Product.findById(req.params.id)

    if(!found){
        return res.status(404).json({
            success:false,
            message:"Product is not found"
        })
    }

    found=await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(201).json({
        success:true,
        found
    });
}

//This api deletes a product from the database
const deleteProduct=async(req,res,next)=>{

    const found=await Product.findById(req.params.id)

    if(!found){
        return res.status(404).json({
            success:false,
            message:"Product not found"
        })
    }

    await found.deleteOne()//deletes the particular data from database
    //instead of remove

    res.status(201).json({
        success:true,
        message:"Product has been removed successfully"
    })

}

export {getProducts,newProduct,findProduct,updateProduct,deleteProduct};
