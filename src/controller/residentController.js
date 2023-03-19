const { success } = require('../content')
const { createResident } = require('../service/residentService')

class ResidentController {
  // 添加居民信息
  async createInfo(ctx, next) {
    // 1.获取数据
    const data = ctx.request.body
    // 2.操作数据库
    const { updatedAt, createdAt, ...res } = await createResident(data)
    // 3.返回数据
    if (res) {
      ctx.body = success({
        data: res,
        msg: '添加居民信息成功'
      })
    }
  }
}

module.exports = new ResidentController()
