import {Router} from 'express'
import { register, login, logout, profile} from '../controllers/auth.controller'
import { AuthRequired } from '../middleware/Auth.middleware'
import { schemaValition } from '../middleware/validator.middleware'
import { loginSchema } from '../schema/Auth.schema'




const router  = Router()

router.get('/profile' , AuthRequired, profile)

router.post('/register', register)
router.post('/login',schemaValition(loginSchema), login)
router.post('/logout', logout)




export default router