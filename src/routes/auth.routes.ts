import { Router } from 'express'
import authController from '../controller/auth.controller'
import authMiddleware from '../middlewares/auth.mid'

const route = Router()

route.post('/register', authMiddleware.register, authController.register)
route.post('/login', authMiddleware.login, authController.login)
route.get('/verify', authMiddleware.verify, authController.verify)

export default route