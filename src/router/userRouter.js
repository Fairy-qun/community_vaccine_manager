const Router = require('@koa/router')
const { userValidator, verifyUser, bcryPassword, verifyLogin } = require('../middlewares/userMiddleware')
const { auth } = require('../middlewares/userAuthMiddleware')
const { register, login, reset } = require('../controller/userController')

const userRouter = new Router({ prefix: '/users' })

userRouter.post('/register', userValidator, verifyUser, bcryPassword, register)
userRouter.post('/login', userValidator, verifyLogin, login)
userRouter.post('/reset', auth, bcryPassword, reset)

module.exports = userRouter
