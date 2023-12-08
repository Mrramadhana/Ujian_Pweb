import {Sequelize} from "sequelize";

const db = new Sequelize('ujian_pweb','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;