import express from "express";
import {deleteProduct, findProduct, getProducts,newProduct,updateProduct} from "../controllers/product_con.js";

const router=express.Router()

router.route('/products').get(getProducts)
router.route('/product/:id').get(findProduct)

//Admin routes
router.route('/admin/product/new').post(newProduct)
router.route('/admin/product/:id').put(updateProduct)
router.route('/admin/product/:id').delete(deleteProduct)
export default router;