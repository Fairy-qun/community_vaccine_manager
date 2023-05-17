const { createInfo, deleteInfo, getInfo, getInfoBy } = require('../service/vaccineTypeService.js')
const { success, fail } = require('../content/index.js')
class VaccineTypeController {
  // 添加信息
  async createInfo(ctx, next) {
    const data = ctx.request.body
    const res = await createInfo(data)
    if (res) {
      ctx.body = success({ msg: '添加信息成功' })
    } else {
      fail({ msg: '添加信息失败' })
    }
  }

  // 删除信息
  async deleteInfo(ctx, next) {
    if (ctx.request.body === undefined) {
      ctx.body = fail({
        msg: '所需参数id不能为空'
      })
      return
    }
    const idArr = ctx.request.body.id
    const res = await deleteInfo({ idArr })
    if (res) {
      ctx.body = success({ msg: '删除数据成功' })
    } else {
      ctx.body = fail({ msg: '删除数据失败' })
    }
  }

  // 获取信息
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
    const data = ctx.request.body
    const res = await getInfo({ pageNo, pageSize, data })
    const count = res[0]
    const result = res.slice(1)
    ctx.body = {
      code: 0,
      data: result,
      total_count: count,
      msg: '获取数据成功'
    }
  }

  // 条件查询
  async getInfoBy(ctx, next) {
    const data = ctx.request.body
    const res = await getInfoBy({ data })
    if (res.length !== 0) {
      ctx.body = success({
        data: res,
        msg: '查询数据成功'
      })
    } else {
      ctx.body = fail({ msg: '查询数据失败' })
    }
  }
}

module.exports = new VaccineTypeController()
