import {Sequelize} from "sequelize";

const db = new Sequelize('movera','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;