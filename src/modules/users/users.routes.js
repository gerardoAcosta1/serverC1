import { Router } from "express";
import { getAnUser } from "./users.controllers.js";
import { createUser } from "./users.controllers.js";
const router = Router();

//crear conversaciones
//crear conversaciones grupales 
//obtener todas las conversaciones
//obtener una conversacion con todos los mensajes

router.get('/:username', getAnUser)
router.post('/', createUser)



export default router