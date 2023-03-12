import productData from "../data/productData.json" assert { type: "json" };
import dotenv from "dotenv";
import connectionDB from "../config/database.js";
import Product from "../models/product.js";

dotenv.config({path:'backend/config/config.env'})

connectionDB();

const seeding=async()=>{
    try{
        //First deleting already present data
        await Product.deleteMany();
        console.log("Already present data has been deleted")

        await Product.insertMany(productData)
        console.log("Data has been successfully added")

        process.exit()

    }catch(err){
        console.log(err)
        process.exit()
    }
}

seeding()