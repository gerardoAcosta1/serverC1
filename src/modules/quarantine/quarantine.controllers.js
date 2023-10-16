import { quarantineCows } from "../../models/quarantine.model.js";
import { cows } from "../../models/cows.model.js";
import { where } from "sequelize";

const addCowQuarantine = async (req, res) => {
    try {
        const cowTo = req.body;
      
        const foundCow = await cows.findByPk(cowTo.id);
        const cowToMove = {
            id: foundCow.id,
            peso: foundCow.peso,
            musculo: foundCow.musculo,
            marmoleo: foundCow.marmoleo,
            temp: foundCow.temp,
            fc: foundCow.fc,
            fr: foundCow.fr,
            fs: foundCow.fs
          };
        if (!foundCow) {
            return res.status(404).json({ message: 'No se encontró el registro' });
        }
        console.log(foundCow)
        const addedCow = await quarantineCows.create(cowToMove);
        await cows.destroy({
            where: { id: foundCow.id }
        });

        

        res.json(addedCow);
    } catch (error) {
        res.status(500).json({ error: 'Error al hacer el cambio' });
        console.log(error);
    }
}

const deleteCowQuarantine = async (req, res) => {
    try {
        const cowTo = req.body
        const foundCow = await quarantineCows.findByPk(cowTo.id);
        if(!foundCow){
            res.status(404).json({message: 'no se encontró el registro'})
        }
        const cowToMove = {
            id: foundCow.id,
            peso: foundCow.peso,
            musculo: foundCow.musculo,
            marmoleo: foundCow.marmoleo,
            temp: foundCow.temp,
            fc: foundCow.fc,
            fr: foundCow.fr,
            fs: foundCow.fs
          };
        await quarantineCows.destroy({where: {id: foundCow.id}});

        await cows.create(cowToMove);

        res.json(foundCow);

    } catch (error) {
        res.status(500).json({ error: 'Error en cambio de tabla' });
        console.log(error)
    }
}

const getAllQuarantineCows = async (req, res) => {
    try {
    
        const allCows = await quarantineCows.findAll();
        if(!allCows){
            res.json('no hay registros')
        }
        res.json(allCows);

    } catch (error) {
        res.status(500).json({ error: 'error al obtener registros' });
        console.log(error)
    }
}
export {deleteCowQuarantine, addCowQuarantine, getAllQuarantineCows}