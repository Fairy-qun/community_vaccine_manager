const { success, fail } = require('../content')
const { createInfo, updateInfo, deleteInfo, getInfo, getInfoBy } = require('../service/inoculatePointService')
class InoculatePointController {
  // 添加信息
  async createInfo(ctx, next) {
    const data = ctx.request.body
    const res = await createInfo(data)
    if (res) {
      ctx.body = success({ msg: '添加信息成功' })
    } else {
      ctx.body = fail({ msg: '添加信息失败' })
    }
  }

  // 更新信息
  async updateInfo(ctx, next) {
    const { id } = ctx.request.body
    if (ctx.request.body === undefined || !id) {
      return (ctx.body = fail({ msg: '所需参数ID不能为空' }))
    }
    const data = ctx.request.body
    const res = await updateInfo(data)
    if (res) {
      ctx.body = success({ msg: '更新数据成功' })
    } else {
      ctx.body = fail({ msg: '更新数据失败' })
    }
  }

  // 删除信息
  async deleteInfo(ctx, next) {
    if (ctx.request.body === undefined) {
      return (ctx.body = fail({ msg: '所需参数ID不能为空' }))
    }
    const idArr = ctx.request.body.id
    const res = await deleteInfo(idArr)
    if (res) {
      ctx.body = success({ msg: '删除数据成功' })
    } else {
      ctx.body = fail({ msg: '删除数据失败' })
    }
  }

  // 查询信息
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
    if (ctx.request.body === undefined) {
      return (ctx.body = fail({ msg: '所需id参数不能为空' }))
    }
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

module.exports = new InoculatePointController()
