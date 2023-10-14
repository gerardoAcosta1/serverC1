import { DataTypes } from "sequelize";
import db from "../utils/dataBase.js";

const cows = db.define('cows', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    peso: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    musculo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    marmoleo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    temp: {
        type: DataTypes.INTEGER,
    },
    fc: {
        type: DataTypes.INTEGER,
    },
    fr: {
        type: DataTypes.INTEGER,
    },
    fs: {
        type: DataTypes.INTEGER,
    },
}, {
    tableName: 'cows', // Nombre de la tabla en la base de datos
    timestamps: false, // Si no deseas tener campos createdAt y updatedAt
});
export default cows;