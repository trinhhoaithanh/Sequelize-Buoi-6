//yarn init => tạo ra được package.json

// yarn add express 

import express from 'express';
// import mysql from 'mysql2';
import cors from 'cors';
import { getNguoiDung } from './controller/userController.js';
import rootRouter from './routers/rootRouter.js';
const app = express();

//middle ware => những lệnh và hàm chính giữa để xử lý một vấn đề gì đó
app.use(express.json()); //middleware giúp front end đọc được cấu trúc json
app.use(cors()); //middle giúp BE đọc được cấu trúc JSON 
app.listen(8080); //tạo server backend với port = 8080 

// node index.js => khởi chạy server bằng môi trường node

//yarn add nodemon => auto reset server khi save => dùng yarn start

// tạo api => endpoint,method
// GET: /demo
// app.post("/demo/:id2",(req,res)=>{

    //request 
        //params: lấy data thông qua url
        
        // query params
            // + /demo/1/abc
            // let {id2,hoTen2} = req.params;
            // data trả từ BE về FE
            // res.send(id2+ "-" + hoTen2); //trả về string, object, list object,... trừ number
        //query string
            // + /demo?id=1&hoTen=abc
            // let {id, hoTen} = req.query;
            // data trả từ BE về FE
            // res.send(hoTen+ "-" + id); //trả về string, object, list object,... trừ number do có thể nhầm với status code

        //body: lấy data thông qua cấu trúc json => POST, PUT, DELETE
//         let {userId,userName, email, phone}  = req.body;
//         res.send({userId,userName, email, phone}); //object literal có thể rút ngắn
        
        
// });
// kết nối cơ sở dữ liệu
//yarn add mysql2
// const connect = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"1410",
//     port:"3306",
//     database:"db_node32"
// })
//quy tắc đặt tên endpoint: viết thường cách nhau bởi dấu gạch ngang
// localhost:8080/api       /user(tach endpoint theo huong doi tuong)=> rootRouter      /get-nguoi-dung (tach endpoint theo chuc nang)(userRouter)
// (req,res)=>{} =>userController
// app.get("/user/get-nguoi-dung",getNguoiDung)


app.use("/api",rootRouter);
