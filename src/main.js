const path = require('path')
const Koa = require('koa')
const KoaStatic = require('koa-static')
const { koaBody } = require('koa-body')

const router = require('./router')
router.prefix('/api')

// const middlewares = require('./middlewares/userMiddleware')

const app = new Koa()

/**注册解析表单体 */
app.use(
  koaBody({
    multipart: true,
    formidable: {
      uploadDir: path.join(__dirname, './upload'),
      keepExtensions: true
    }
  })
)

/**
 * 加载静态资源
 */
app.use(KoaStatic(path.join(__dirname, './upload')))

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
