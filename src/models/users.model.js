import { DataTypes } from "sequelize";
import db from "../utils/dataBase.js";

const users = db.define('users', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: 'users', 
    timestamps: false, 
});
export default users;