const bcrypt = require('bcryptjs')

const { success, fail } = require('../content')
const { getUserInfo } = require('../service/userService')

const userValidator = async (ctx, next) => {
  /**
   * 去判断填入字段的是否完整，检验合理性
   */
  const data = ctx.request.body
  for (let key in data) {
    if (!data[key]) {
      ctx.status = 400
      ctx.body = fail({ msg: '所需字段未填写完整' })
      return
    }
  }
  await next()
}

// 判断用户是否存在
const verifyUser = async (ctx, next) => {
  /**
   * 检验用户注册的合理性
   */
  const { user_name } = ctx.request.body
  const isHasValue = await getUserInfo({ user_name })
  if (isHasValue) {
    ctx.status = 409
    ctx.body = fail({ msg: '该用户已存在，请重新注册' })
    return
  }
  await next()
}

/**
 * 加密中间件
 */
const bcryPassword = async (ctx, next) => {
  const { user_password } = ctx.request.body
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(user_password, salt)
  ctx.request.body.user_password = hash
  await next()
}

/**
 * 验证登录
 */
const verifyLogin = async (ctx, next) => {
  // 判断用户是否存在
  const { user_name, user_password } = ctx.request.body
  try {
    const res = await getUserInfo({ user_name })
    if (!res) {
      ctx.body = fail({ msg: '用户名不存在' })
      return
    }
    // 判断用户输入的密码是否正确
    if (!bcrypt.compareSync(user_password, res.user_password)) {
      ctx.body = fail({ msg: '密码错误' })
      return
    }
  } catch (error) {
    console.error(error)
    return
  }
  await next()
}

module.exports = {
  userValidator,
  verifyUser,
  bcryPassword,
  verifyLogin
}
