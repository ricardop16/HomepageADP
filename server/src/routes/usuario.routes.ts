import {Router} from "express";
import  * as usuarioctrl from "../controllers/Usuario.controller";

const router = Router()

router.get('/usuario', usuarioctrl.getusuarios)
router.get('/usuario/:id', usuarioctrl.getusuario)


router.post('/usuario', usuarioctrl.createusuario)

router.delete('/usuario/:id', usuarioctrl.deleteusuario)

router.patch('/usuario/:id', usuarioctrl.updateusuario)

export default router 