import { createNguoiDung, deleteNguoiDung, getNguoiDung, getNguoiDungById, getUserPage, updateNguoiDung } from "../controller/userController.js";
import express from "express";

const userRouter = express.Router(); //hàm router giúp kết nối endpoint 
userRouter.get("/get-nguoi-dung",getNguoiDung)
userRouter.get("/get-nguoi-dung-by-id/:food_id",getNguoiDungById)
userRouter.post("/create-nguoi-dung",createNguoiDung)
userRouter.put("/sua-nguoi-dung/:food_id",updateNguoiDung)
userRouter.delete("/xoa-nguoi-dung/:food_id",deleteNguoiDung)

// pagination
userRouter.get("/get-user-page/:page/:pageSize",getUserPage)


export default userRouter;