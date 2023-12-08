import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('users',{
    nama: DataTypes.STRING,
    kelas: DataTypes.STRING,
    npm: DataTypes.INTEGER,
    umur: DataTypes.INTEGER
},{
    freezeTableName:true
});

export default User;

(async()=>{
    await db.sync();
})();