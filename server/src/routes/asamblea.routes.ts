import {Router} from "express";
import  * as Asambleactrl from "../controllers/Asamblea.controller";

const router = Router()

router.get('/asamblea', Asambleactrl.getAsambleas)
router.get('/asamblea/:id', Asambleactrl.getAsamblea)


router.post('/asamblea', Asambleactrl.createAsamblea)

router.delete('/asamblea/:id', Asambleactrl.deleteAsamblea)

router.patch('/asamblea/:id', Asambleactrl.updateAsamblea)

export default router 