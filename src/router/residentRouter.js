const Router = require('@koa/router')

const { createInfo, getInfo, getInfoBy, updateInfo, deleteInfo, exportInfo } = require('../controller/residentController')
const { auth } = require('../middlewares/userAuthMiddleware')
const { residentValidator, verifyResident } = require('../middlewares/residentMiddleware')

const residentRouter = new Router({ prefix: '/resident' })

// 添加居民信息
residentRouter.post('/createInfo', auth, residentValidator, verifyResident, createInfo)
// 获取居民信息
residentRouter.post('/getInfo', auth, getInfo)
// 条件查询
residentRouter.post('/getInfoBy', auth, getInfoBy)
// 更新居民信息
residentRouter.post('/updateInfo', auth, updateInfo)
// 删除居民信息
residentRouter.post('/deleteInfo', auth, deleteInfo)
// 导出数据
residentRouter.post('/export', auth, exportInfo)
module.exports = residentRouter
