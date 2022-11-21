import { Router } from 'express'
import UserController from './controllers/UserController'
import AuthController from './controllers/AuthController'
import authMiddleware from './middlewares/authMiddleware'

const router = Router()

router.post('/signin', UserController.createAccount)
router.get('/protected', authMiddleware, UserController.secretData)
router.post('/login', AuthController.authenticate)

export default router
