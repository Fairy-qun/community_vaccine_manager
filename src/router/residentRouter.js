const Router = require('@koa/router')

const { createInfo, getInfo } = require('../controller/residentController')
const { auth } = require('../middlewares/userAuthMiddleware')
const { residentValidator, verifyResident } = require('../middlewares/residentMiddleware')

const residentRouter = new Router({ prefix: '/resident' })

// 添加居民信息
residentRouter.post('/createInfo', auth, residentValidator, verifyResident, createInfo)
// 获取居民信息
residentRouter.get('/getInfo', getInfo)

module.exports = residentRouter
