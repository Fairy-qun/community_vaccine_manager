const Koa = require('koa')
const { koaBody } = require('koa-body')

const router = require('./router')
router.prefix('/api')

// const middlewares = require('./middlewares/userMiddleware')

const app = new Koa()

/**注册解析表单体 */
app.use(koaBody())

/**
 * 自动注册中间件
 */
// middlewares.forEach(item => {
//   app.use(item)
// })

/**
 * 注册路由
 */
app.use(router.routes()).use(router.allowedMethods())

module.exports = { server: app }
