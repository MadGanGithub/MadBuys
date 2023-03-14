import express from "express";
import register_user from "../controllers/authController.js";
const router=express.Router();

router.route('/register/').post(register_user);

export default router;
