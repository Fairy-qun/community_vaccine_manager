const Router = require('@koa/router')
const { createInfo, updateInfo, deleteInfo, getInfo } = require('../controller/inoculatePointController')
const inoculatePointRouter = new Router({ prefix: '/inoculatePoint' })

// 添加信息
inoculatePointRouter.post('/createInfo', createInfo)
// 修改信息
inoculatePointRouter.post('/updateInfo', updateInfo)
// 删除信息
inoculatePointRouter.post('/deleteInfo', deleteInfo)

// 查询信息
inoculatePointRouter.post('/getInfo', getInfo)

module.exports = inoculatePointRouter
