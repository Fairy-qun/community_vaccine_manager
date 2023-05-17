const { success, fail } = require('../content')
const { createInfo, getInfo } = require('../service/roleService')
class RoleController {
  // 增加数据
  async createInfo(ctx, next) {
    const data = ctx.request.body
    console.log(data)
    const res = await createInfo(data)
    console.log(res)
    if (res) {
      ctx.body = success({ msg: '添加角色信息成功' })
    } else {
      ctx.body = fail({ msg: '增加角色数据失败' })
    }
  }

  // 获取数据
  async getInfo(ctx, next) {
    const res = await getInfo()
    if (res) {
      ctx.body = success({ data: res, msg: '获取数据成功' })
    } else {
      ctx.body = fail({ msg: '获取数据失败' })
    }
  }
}

module.exports = new RoleController()
