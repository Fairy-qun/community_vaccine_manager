const { success, fail } = require('../content')
const { createResident, getResidentInfo, getResidentInfoBy, updateInfoById } = require('../service/residentService')

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

  // 条件查询居民信息
  async getInfoBy(ctx, next) {
    const { id, resident_name, resident_gender, resident_age, resident_mobile, resident_numberId, resident_address, resident_isInoculateFirst, resident_isInoculateSecond, resident_isInoculateThird } = ctx.request.body
    const res = await getResidentInfoBy({ id, resident_name, resident_gender, resident_age, resident_mobile, resident_numberId, resident_address, resident_isInoculateFirst, resident_isInoculateSecond, resident_isInoculateThird })
    if (res) {
      ctx.body = success({
        data: res,
        msg: '查询数据成功'
      })
    }
  }

  // 更新居民信息
  async updateInfo(ctx, next) {
    if (ctx.request.body === undefined) {
      return (ctx.body = fail({
        msg: '必须传递id进行查询'
      }))
    }
    const data = ctx.request.body
    const res = await updateInfoById({ data })
    if (res) {
      ctx.body = success({
        msg: '更新数据成功'
      })
    }
  }
}

module.exports = new ResidentController()
