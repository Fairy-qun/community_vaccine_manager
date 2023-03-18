const fs = require('fs')
const Router = require('@koa/router')
const router = new Router()

const routerArr = []

// const userRouter = require('./userRouter')
// const uploadRouter = require('./uploadRouter')
// routerArr.push(userRouter)
// routerArr.push(uploadRouter)

/**
 * 读取当前文件夹下的文件，实现路由自动导入
 */
fs.readdirSync(__dirname).forEach(file => {
  // console.log(file)
  if (file !== 'index.js') {
    const path = './' + file
    const filePath = require(path)
    router.use(filePath.routes()).use(filePath.allowedMethods())
  }
})

// router.use(userRouter.routes()).use(userRouter.allowedMethods())

module.exports = router
