import {Router} from "express";
import  * as Areactrl from "../controllers/Area.controller";

const router = Router()

router.get('/area', Areactrl.getAreas)
router.get('/area/:id', Areactrl.getAreas)


router.post('/area', Areactrl.createArea)

router.delete('/area/:id', Areactrl.deleteArea)

router.patch('/area/:id', Areactrl.updateArea)

export default router 