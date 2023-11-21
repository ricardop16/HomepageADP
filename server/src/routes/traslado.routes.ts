import {Router} from "express";
import  * as trasladoctrl from "../controllers/Traslado.controller";

const router = Router()

router.get('/traslado', trasladoctrl.getTraslados)
router.get('/traslado/:id', trasladoctrl.getTraslado)


router.post('/traslado', trasladoctrl.createTraslado)

router.delete('/traslado/:id', trasladoctrl.deleteTraslado)

router.patch('/traslado/:id', trasladoctrl.updateTraslado)

export default router 