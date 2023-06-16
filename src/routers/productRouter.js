import { createProduct, getProduct } from "../controller/productController.js";
import { createNguoiDung, getNguoiDung } from "../controller/userController.js";
import express from "express";

const productRouter = express.Router(); //hàm router giúp kết nối endpoint 
productRouter.get("/get-product",getProduct)
productRouter.post("/create-product",createProduct)

export default productRouter;