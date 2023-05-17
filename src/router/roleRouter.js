const Router = require('@koa/router')

const {createInfo,getInfo} = require('../controller/roleController')
const roleRouter = new Router({prefix: '/role'})

// 添加信息
roleRouter.post('/createInfo',createInfo)

// 获取数据
roleRouter.post('/getInfo',getInfo)
module.exports = roleRouter