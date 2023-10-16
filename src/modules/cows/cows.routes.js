import { Router } from "express";
import {updateCows, createCows, getAllCows, deleteCows} from './cows.controllers.js'
const router = Router();

//crear conversaciones
//crear conversaciones grupales 
//obtener todas las conversaciones
//obtener una conversacion con todos los mensajes

router.get('/', getAllCows)
router.post('/', createCows)
router.delete('/:id', deleteCows)
router.put('/:id', updateCows)


export default router