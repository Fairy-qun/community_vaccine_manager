const Router = require('@koa/router')
const router = new Router()

const userRouter = require('./userRouter')

router.use(userRouter.routes()).use(userRouter.allowedMethods())

module.exports = router
