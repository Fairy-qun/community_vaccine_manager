const Router = require('@koa/router')

const { createInfo, deleteInfo, getInfo, getInfoBy } = require('../controller/vaccineTypeController')
const { auth } = require('../middlewares/userAuthMiddleware')

const vaccineTypeRouter = new Router({ prefix: '/vaccineType' })

// 添加疫苗类型信息
vaccineTypeRouter.post('/createInfo', auth, createInfo)

// 删除疫苗类型信息
vaccineTypeRouter.post('/deleteInfo', auth, deleteInfo)

// 查询疫苗类型信息
vaccineTypeRouter.post('/getInfo', auth, getInfo)

// 条件查询
vaccineTypeRouter.post('/getInfoBy', auth, getInfoBy)

module.exports = vaccineTypeRouter
