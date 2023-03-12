const Router = require('@koa/router')
const { userValidator, verifyUser, bcryPassword } = require('../middlewares/userMiddleware')
const { register, login } = require('../controller/userController')

const userRouter = new Router({ prefix: '/users' })

userRouter.post('/register', userValidator, verifyUser, bcryPassword, register)
userRouter.post('/login', login)

module.exports = userRouter
