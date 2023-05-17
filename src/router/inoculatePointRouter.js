const Router = require('@koa/router')
const { createInfo, updateInfo, deleteInfo, getInfo, getInfoBy } = require('../controller/inoculatePointController')
const { auth } = require('../middlewares/userAuthMiddleware')
const inoculatePointRouter = new Router({ prefix: '/inoculatePoint' })

// 添加信息
inoculatePointRouter.post('/createInfo', createInfo)
// 修改信息
inoculatePointRouter.post('/updateInfo', updateInfo)
// 删除信息
inoculatePointRouter.post('/deleteInfo', deleteInfo)

// 查询信息
inoculatePointRouter.post('/getInfo', getInfo)
// 条件查询
inoculatePointRouter.post('/getInfoBy', auth, getInfoBy)

module.exports = inoculatePointRouter
