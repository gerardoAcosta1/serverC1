import { Router } from "express";
import {addCowQuarantine, deleteCowQuarantine, getAllQuarantineCows} from './quarantine.controllers.js'
const router = Router();



router.post('/', addCowQuarantine)
router.delete('/', deleteCowQuarantine),
router.get('/', getAllQuarantineCows);



export default router