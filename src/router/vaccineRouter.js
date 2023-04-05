const Router = require('@koa/router')

const { createInfo, updateInfo, deleteInfo, getInfo, getInfoBy } = require('../controller/vaccineController')
const { auth } = require('../middlewares/userAuthMiddleware')

const vaccineRouter = new Router({ prefix: '/vaccine' })

// 添加疫苗信息
vaccineRouter.post('/createInfo', auth, createInfo)

// 修改疫苗信息
vaccineRouter.post('/updateInfo', auth, updateInfo)

// 删除疫苗信息
vaccineRouter.post('/deleteInfo', auth, deleteInfo)

// 查询疫苗信息
vaccineRouter.post('/getInfo', auth, getInfo)

// 条件查询
vaccineRouter.post('/getInfoBy', auth, getInfoBy)

module.exports = vaccineRouter
