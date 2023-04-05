const Router = require('@koa/router')

const { createInfo, deleteInfo, getInfo, getInfoBy, updateInfo } = require('../controller/inoculateController')
const { auth } = require('../middlewares/userAuthMiddleware')

const inoculateRouter = new Router({ prefix: '/inoculate' })

// 添加信息
inoculateRouter.post('/createInfo', auth, createInfo)
// 删除信息
inoculateRouter.post('/deleteInfo', auth, deleteInfo)

// 查询数据
inoculateRouter.post('/getInfo', auth, getInfo)
// 条件查询
inoculateRouter.post('/getInfoBy', auth, getInfoBy)

// 修改疫苗信息
inoculateRouter.post('/updateInfo', auth, updateInfo)

module.exports = inoculateRouter
