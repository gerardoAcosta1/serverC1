import express from "express";
import cors from 'cors'
import db from "./utils/dataBase.js";
import apiv1Routes from './routes/apiv1.routes.js'
import "dotenv/config";


const PORT = process.env.PORT || 8000;

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

apiv1Routes(app);
app.listen(PORT, () => {

    console.log(`listen on port ${PORT}`)
})
