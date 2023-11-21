import {Router} from "express";
import  * as nivelctrl from "../controllers/Nivel.controller";

const router = Router()

router.get('/nivel', nivelctrl.getNiveles)
router.get('/nivel/:id', nivelctrl.getNivel)


router.post('/nivel', nivelctrl.createNivel)

router.delete('/nivel/:id', nivelctrl.deleteNivel)

router.patch('/nivel/:id', nivelctrl.updateNivel)

export default router