import {Router} from 'express'
import { register, login, logout, profile, verifyToken} from '../controllers/auth.controller'
import { AuthRequired } from '../middleware/Auth.middleware'




const router  = Router()

router.get('/profile', AuthRequired, profile)
router.get('/verify', verifyToken)

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)




export default router