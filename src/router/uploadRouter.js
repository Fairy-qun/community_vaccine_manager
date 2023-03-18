const Router = require('@koa/router')

const { auth, isHasAdminPermission } = require('../middlewares/userAuthMiddleware')
const { upload } = require('../controller/uploadController')

const uploadRouter = new Router({ prefix: '/upload' })

uploadRouter.post('/', auth, isHasAdminPermission, upload)

module.exports = uploadRouter
