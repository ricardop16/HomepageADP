import {Router} from "express";
import  * as Asistenciactrl from "../controllers/Asistencia.controller";

const router = Router()

router.get('/Asistencia', Asistenciactrl.getAsistencias)
router.get('/Asistencia/:id', Asistenciactrl.getAsistencia)


router.post('/Asistencia', Asistenciactrl.createAsistencia)

router.delete('/Asistencia/:id', Asistenciactrl.deleteAsistencia)

router.patch('/Asistencia/:id', Asistenciactrl.updateusuario)

export default router 