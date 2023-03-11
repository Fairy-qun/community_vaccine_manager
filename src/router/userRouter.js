const Router = require('@koa/router')
const userRouter = new Router({ prefix: '/users' })

userRouter.get('/', async (ctx, next) => {
  ctx.body = '我是一个用户'
})

module.exports = userRouter
