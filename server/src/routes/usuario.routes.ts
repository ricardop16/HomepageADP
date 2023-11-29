import {Router} from "express";
import  * as usuarioctrl from "../controllers/Usuario.controller";
import { AuthRequired } from "../middleware/Auth.middleware";

const router = Router()

router.get('/usuario',  AuthRequired, usuarioctrl.getusuarios)
router.get('/usuario/:id', usuarioctrl.getusuario)


router.post('/usuario', usuarioctrl.createusuario)

router.delete('/usuario/:id', usuarioctrl.deleteusuario)

router.patch('/usuario/:id', usuarioctrl.updateusuario)

export default router 