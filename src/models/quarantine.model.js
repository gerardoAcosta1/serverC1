import { DataTypes } from "sequelize";
import db from "../utils/dataBase.js";

const quarantineCows = db.define('quarantine-cows', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        
    },
    peso: {
        type: DataTypes.INTEGER,
       
    },
    musculo: {
        type: DataTypes.INTEGER,
        
    },
    marmoleo: {
        type: DataTypes.INTEGER,
        
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
    tableName: 'quarantine-cows', 
    timestamps: false,
});

export {quarantineCows};