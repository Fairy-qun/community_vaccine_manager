const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { JWT_SECRET } = require('../config/config.default')
const { createUser, getUserInfo, updateById, getUserInfoAll } = require('../service/userService')
const { fail, success } = require('../content')
const { admin_menus, menus } = require('../content/menus')

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
    const { id, user_password } = ctx.request.body
    const res = await updateById({ id, user_password })
    if (res) {
      ctx.body = success({ data: '', msg: '修改密码成功' })
    } else {
      ctx.body = fail({ msg: '修改密码失败' })
    }
  }

  // 获取用户信息
  async getUserInfoAll(ctx, next) {
    const res = await getUserInfoAll()
    if (res) {
      ctx.body = success({ data: res, msg: '获取数据成功' })
    } else {
      ctx.body = fail({ msg: '获取数据失败' })
    }
  }

  // 获取用户信息单个
  async getUserInfo(ctx, next) {
    const { user_name } = ctx.request.body
    const res = await getUserInfo({ user_name })
    // console.log(res.user_role);
    // console.log(admin_menus);
    if (res) {
      if (res.user_role == 0) {
        res.menus = admin_menus
        ctx.body = {
          code: 0,
          data: res,
          msg: '获取用户成功'
        }
      } else {
        res.menus = menus
        ctx.body = {
          code: 0,
          data: res,
          msg: '获取用户成功'
        }
      }
    } else {
      ctx.body = fail({ msg: '未查询到用户' })
    }
  }
  // 给用户分配角色
  async setRole(ctx, next) {
    const { id, user_role } = ctx.request.body
    const res = await getUserInfo({ id })
    if (res) {
      const result = await updateById({ id, user_role })
      if (result) {
        ctx.body = success({ msg: '更新角色成功' })
      } else {
        ctx.body = fail({ msg: '更新角色失败' })
      }
    } else {
      ctx.body = fail({ msg: '未查询到用户' })
    }
  }
}

// 导出
module.exports = new UserController()
