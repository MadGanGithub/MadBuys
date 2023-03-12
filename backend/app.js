import express from "express";
import products from "./routes/product.js";
const app=express();
app.use(express.json())
//This file has all the routes listed from routes folder


app.use("/api/first/",products)


export default app;