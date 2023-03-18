const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { JWT_SECRET } = require('../config/config.default')
const { createUser, getUserInfo, updateById } = require('../service/userService')
const { fail, success } = require('../content')

class UserController {
  // 注册
  async register(ctx, next) {
    // 1.获取数据
    const { user_name, user_password, user_gender, user_mobile, user_numberId, user_role } = ctx.request.body

    // 2.操作数据库
    const res = await createUser(user_name, user_password, user_gender, user_mobile, user_numberId, user_role)
    // 3.返回结果
    if (res) {
      ctx.body = {
        code: 0,
        data: {
          id: res.id,
          user_name: res.user_name
        },
        msg: '注册用户成功'
      }
    }
  }

  // 登录
  async login(ctx, next) {
    const { user_name } = ctx.request.body
    // 查询数据
    const { password, ...res } = await getUserInfo({ user_name })
    ctx.body = {
      code: 0,
      data: {
        token: jwt.sign(res, JWT_SECRET, { expiresIn: '1d' })
      },
      msg: '用户登录成功'
    }
  }

  // 修改密码
  async reset(ctx, next) {
    const { user_password } = ctx.request.body
    const { id, user_name } = ctx.state.user
    const res = await updateById({ id, user_password })
    if (res) {
      ctx.body = success({ data: { user_name: user_name }, msg: '修改密码成功' })
    } else {
      ctx.body = fail({ msg: '修改密码失败' })
    }
  }
}

// 导出
module.exports = new UserController()
