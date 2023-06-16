//controller là xử lý chức năng
// import Food from "../models/food.js"; khong dung nữa
import initModels from "../models/init-models.js";
import sequelize from "../models/index.js";
import Op from "sequelize";
import { errorCode, successCode } from "../configs/respone.js";
const models = initModels(sequelize)
// environment -> biến môi trường 
const getNguoiDung = async (req, res) => {
  try {
    // sử dụng các hàm truy vấn data của sequelize
    // sequelize.query("SELECT * FROM food");
    let data = await models.food.findAll({
      //kết bảng
      include:["user_id_user_orders"]
    }); //tương ứng với câu lệnh select * from food
    // localhost:8080/api/user/get-nguoi-dung
    // res.send(data);
    successCode(res,data,"Lấy dữ liệu thành công")
  } catch {
    errorCode(res,"Lỗi BE")
  }
};
const createNguoiDung = async (req, res) => {
  try {
    let { full_name, email, pass_word } = req.body;
    let newData = {
      full_name,
      email,
      pass_word,
    };
    await models.user.create(newData);
    successCode(res,data,"Thêm mới thành công");
  } catch {
    errorCode(res,"Lỗi BE");
  }
};
// Update
const updateNguoiDung = async (req, res) => {
  try {
    let { user_id } = req.params;
    await models.user.update(
      {
        full_name,
      email,
      pass_word
      },
      { where: { user_id } }
    );
  } catch {
    res.send("lỗi BE");
  }
};
//delete
const deleteNguoiDung = async (req, res) => {
  try {
    let { user_id } = req.params;
    await models.user.destroy({ where: { user_id } });
    successCode(res,data,"Xoá thành công");
  } catch {
    errorCode(res,"lỗi BE");
  }
};
const getNguoiDungById = async (req, res) => {
  try {
    let { user_id } = req.params;
    let data = await models.user.findOne({ where: { user_id } });
    res.send(data);
  } catch {
    res.status(500).send("lỗi BE");
  }
};
const getUserPage = async (req,res)=>{
  let {page,pageSize} = req.params;
  let index = (page-1)*pageSize;

  //SELECT * FROM user LIMIT index,'pageSize'
  // cho FE biết bao nhiêu trang => tổng sl (9) / tổng sl trên trang (6) = 1.5 làm tròn lên 2
  let data = await models.user.findAll({
    offset:index,
    limit:Number(pageSize)
  })
  successCode(res,data,"Thành công")
}

export {
  getNguoiDung,
  createNguoiDung,
  updateNguoiDung,
  deleteNguoiDung,
  getNguoiDungById,
  getUserPage
};
