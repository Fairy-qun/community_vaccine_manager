const { createUser } = require('../service/userService')

class UserController {
  // 注册
  async register(ctx, next) {
    // 1.获取数据
    const { user_name, user_password, user_gender, user_mobile, user_numberId, user_role } = ctx.request.body

    // 2.操作数据库
    const res = await createUser(user_name, user_password, user_gender, user_mobile, user_numberId, user_role)
    // 3.返回结果
    ctx.body = {
      code: 0,
      data: {
        id: res.id,
        user_name: res.user_name
      },
      msg: '注册用户成功'
    }
  }

  // 登录
  async login(ctx, next) {
    ctx.body = '用户登录成功'
  }
}

// 导出
module.exports = new UserController()
