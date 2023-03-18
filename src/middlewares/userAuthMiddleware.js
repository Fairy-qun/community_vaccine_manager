const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/config.default')
const { fail } = require('../content')
const auth = async (ctx, next) => {
  const { authorization } = ctx.request.header
  const token = authorization.replace('Bearer ', '')

  try {
    // user中包含了payload的信息(id, user_name, is_admin)
    const user = jwt.verify(token, JWT_SECRET)
    ctx.state.user = user
  } catch (err) {
    switch (err.name) {
      case 'TokenExpiredError':
        return (ctx.body = fail({ msg: 'token已过期' }))
      case 'JsonWebTokenError':
        return (ctx.body = fail({ msg: '无效的token' }))
    }
  }
  await next()
}

module.exports = {
  auth
}
