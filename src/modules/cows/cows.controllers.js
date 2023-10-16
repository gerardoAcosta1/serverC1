import {cows} from '../../models/cows.model.js'

const getAllCows = async (req, res) => {
    try {
        const allCows = await cows.findAll();
        res.json(allCows);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las vacas' });
        console.log(error)
    }
}

const createCows =  async (req, res) => {
    try {
        const newCow = req.body;
        const createdCow = await cows.create(newCow);
        res.json(createdCow);
        
    } catch (error) {
       // res.status(500).json({ error: 'Error al registrar la vaca' });
        //res.json(error)
    }
}
const deleteCows = async (req, res) => {

    try {

        const id = req.params.id;

        const cow = await cows.findByPk(id);

        if (!cow) {
            return res.status(404).json({ error: 'no se encuentra ese registro' });
        }

        await cow.destroy();
        
        res.json({ message: 'registro eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las vacas' });
      
    }
}
const updateCows = async (req, res) => {

    try {
        const id = req.params.id;
        const updatedData = req.body;

        const cow = await cows.findByPk(id);

        if (!cow) {
            return res.status(404).json({ error: 'La vaca no se encontró' });
        }
        if (updatedData.peso) {
            cow.peso = updatedData.peso;
        }
        if (updatedData.musculo) {
            cow.musculo = updatedData.musculo;
        }
        if (updatedData.marmoleo) {
            cow.marmoleo = updatedData.marmoleo;
        }
        if (updatedData.temp) {
            cow.temp = updatedData.temp;
        }
        if (updatedData.fr) {
            cow.fc = updatedData.fc;
        }
        if (updatedData.fr) {
            cow.fr = updatedData.fr;
        }
        if (updatedData.fs) {
            cow.fs = updatedData.fs;
        }

        await cow.save();

        res.json(cow);
    } catch (error) {

        res.status(500).json({ error: 'Error al actualizar el registro' });
        
    }
}
export {createCows, getAllCows, deleteCows, updateCows}
/*app.post('/cows', async (req, res) => {
    try {
        const newCow = req.body;
        const createdCow = await cows.create(newCow);
        res.json(createdCow);
        
    } catch (error) {
       // res.status(500).json({ error: 'Error al registrar la vaca' });
        res.json(error)
    }
});
app.get('/cows', async (req, res) => {
    try {
        const allCows = await cows.findAll();
        res.json(allCows);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las vacas' });
        console.log(error)
    }
});
app.delete('/cows/:id', async (req, res) => {

    try {

        const id = req.params.id;

        const cow = await cows.findByPk(id);

        if (!cow) {
            return res.status(404).json({ error: 'no se encuentra ese registro' });
        }

        await cow.destroy();
        
        res.json({ message: 'registro eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las vacas' });
      
    }
});
app.put('/cows/:id', async (req, res) => {

    try {
        const id = req.params.id;
        const updatedData = req.body;

        const cow = await cows.findByPk(id);

        if (!cow) {
            return res.status(404).json({ error: 'La vaca no se encontró' });
        }
        if (updatedData.peso) {
            cow.peso = updatedData.peso;
        }
        if (updatedData.musculo) {
            cow.musculo = updatedData.musculo;
        }
        if (updatedData.marmoleo) {
            cow.marmoleo = updatedData.marmoleo;
        }
        if (updatedData.temp) {
            cow.temp = updatedData.temp;
        }
        if (updatedData.fr) {
            cow.fc = updatedData.fc;
        }
        if (updatedData.fr) {
            cow.fr = updatedData.fr;
        }
        if (updatedData.fs) {
            cow.fs = updatedData.fs;
        }

        await cow.save();

        res.json(cow);
    } catch (error) {

        res.status(500).json({ error: 'Error al actualizar el registro' });
        
    }
});*/