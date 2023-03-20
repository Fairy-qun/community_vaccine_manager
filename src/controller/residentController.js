const { success } = require('../content')
const { createResident, getResidentInfo } = require('../service/residentService')

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

  // 获取居民信息
  async getInfo(ctx, next) {
    let pageNo
    let pageSize
    if (ctx.request.body === undefined) {
      pageNo = 1
      pageSize = 10
    } else {
      pageNo = ctx.request.body.pageNo
      pageSize = ctx.request.body.pageSize
    }
    const res = await getResidentInfo({ pageNo, pageSize })
    const count = res[0]
    const result = res.slice(1)
    ctx.body = {
      code: 0,
      data: result,
      total_count: count,
      msg: '获取数据成功'
    }
  }
}

module.exports = new ResidentController()
