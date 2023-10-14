import express from "express";
import cors from 'cors'
import db from "./utils/dataBase.js";
import cows from "./models/cows.model.js";
import "dotenv/config";

const PORT = process.env.PORT || 8000;

cows;
db.authenticate()
    .then(res => console.log(res))
    .catch(err => console.log(err))
db.sync()
    .then(res => console.log('conected to database'))
    .catch(err => console.log(err))

const app = express();

// Manejo de rutas para servir la aplicación React


app.use(cors());

//utilizar json
app.use(express.json());

app.get('/', (req, res) => {
    res.send('¡Servidor en funcionamiento!');
});
app.post('/cows', async (req, res) => {
    try {
        const newCow = req.body;
        
        
        const createdCow = await cows.create(newCow);
        res.json(createdCow); // Devuelve el objeto de la vaca creada
    } catch (error) {
        res.status(500).json({ error: 'Error al registrar la vaca' });
        console.log(error)
    }
});
app.get('/cows', async (req, res) => {
    try {
        const allCows = await cows.findAll(); // Asegúrate de esperar la consulta
        res.json(allCows);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las vacas' });
        console.log(error)
    }
});

app.listen(PORT, () => {

    console.log(`listen on port ${PORT}`)
})
