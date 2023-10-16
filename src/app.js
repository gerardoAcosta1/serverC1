import express from "express";
import cors from 'cors'
import db from "./utils/dataBase.js";
import cows from "./models/cows.model.js";
import users from "./models/users.model.js"
import "dotenv/config";

const PORT = process.env.PORT || 8000;

cows;
users;
db.authenticate()
    .then(res => console.log(res))
    .catch(err => console.log(err))
db.sync()
    .then(res => console.log('conected to database'))
    .catch(err => console.log(err))

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('¡Servidor en funcionamiento!');
});
app.post('/cows', async (req, res) => {
    try {
        const newCow = req.body;


        const createdCow = await cows.create(newCow);
        res.json(createdCow);
    } catch (error) {
        res.status(500).json({ error: 'Error al registrar la vaca' });
        console.log(error)
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
app.post('/users', async (req, res) => {
    try {
        const user = req.body;

        const foundUser = await users.findOne({
            where: { username: user.username }
        })

        if (foundUser) {
            return res.status(403).json({ message: 'ya existe el usuario' })
        }
        const newUser = await users.create(user)
        res.json(newUser);

    } catch (error) {
        res.status(500).json({ error: 'Error al crear usuario' });
        console.log(error)
    }
});
app.get('/users/:username', async (req, res) => {
    try {
        const username = req.params.username;

        const user = await users.findOne({
            where: { username: username }
        })

        if (!user) {
            return res.status(403).json({ message: 'No se encontró el usuario' })
        }

        res.json(user);

    } catch (error) {
        res.status(500).json({ error: 'Error al obtener usuario' });
        console.log(error)
    }
});

app.listen(PORT, () => {

    console.log(`listen on port ${PORT}`)
})
