const Router = require('@koa/router')
const { userValidator, verifyUser, bcryPassword, verifyLogin } = require('../middlewares/userMiddleware')
const { auth } = require('../middlewares/userAuthMiddleware')
const { register, login, reset,getUserInfoAll,setRole,getUserInfo } = require('../controller/userController')

const userRouter = new Router({ prefix: '/users' })

userRouter.post('/register', userValidator, verifyUser, bcryPassword, register)
userRouter.post('/login', userValidator, verifyLogin, login)
userRouter.post('/reset', auth, bcryPassword, reset)

// 获取用户信息
userRouter.post('/getInfoAll',getUserInfoAll)

// 获取用户信息单个
userRouter.post('/getUserInfo',getUserInfo)

// 给用户分配角色
userRouter.post('/setRole',setRole)

module.exports = userRouter
