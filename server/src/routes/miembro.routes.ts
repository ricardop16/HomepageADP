import {Router} from "express";
import  * as miembroctrl from "../controllers/Miembro.controller";

const router = Router()

router.get('/miembro', miembroctrl.getMiembros)
router.get('/miembro/:id', miembroctrl.getMiembro)


router.post('/miembro', miembroctrl.createMiembro)

router.delete('/miembro/:id', miembroctrl.deleteMiembro)

router.patch('/miembro/:id', miembroctrl.updateMiembro)

export default router 