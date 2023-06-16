// nơi lưu cấu trúc kết nối cơ sở dữ liệu
import {Sequelize} from "sequelize";
import config from "../configs/config.js";

let sequelize = new Sequelize(config.database,config.user,config.pass,{
    host:config.host,
    dialect:config.dialect,
    port:config.port
});
//cach test
//node src/models/index.js
// try{
//     await sequelize.authenticate();
//     console.log("thành công")
// }catch{
//     console.log("thất bại")
// }
export default sequelize;
// yarn add sequelize-auto
// yarn sequelize-auto -h localhost -d db_food -u root -x 1410 -p 3306 --dialect mysql -o src/model -l esm