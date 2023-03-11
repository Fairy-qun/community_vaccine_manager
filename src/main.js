const Koa = require('koa')

const router = require('./router')

const middlewares = require('./middlewares/index')

const app = new Koa()
/**
 * 自动注册中间件
 */
middlewares.forEach(item => {
  app.use(item)
})

/**
 * 注册路由
 */
app.use(router.routes()).use(router.allowedMethods())

module.exports = { server: app }
