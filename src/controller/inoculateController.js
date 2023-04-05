const { createInfo, deleteInfo, getInfo, getInfoBy, updateInfo } = require('../service/inoculateService')
const { success, fail } = require('../content')
class InoculateController {
  // 添加信息
  async createInfo(ctx, next) {
    const data = ctx.request.body
    const res = await createInfo(data)
    if (res) {
      ctx.body = success({ msg: '添加信息成功' })
    }
  }
  // 删除信息
  async deleteInfo(ctx, next) {
    if (ctx.request.body === undefined) {
      return (ctx.body = fail({ msg: '所需id参数不能为空' }))
    } else {
      const idArr = ctx.request.body.id
      const res = await deleteInfo({ idArr })
      if (res) {
        ctx.body = success({ msg: '删除数据成功' })
      } else {
        ctx.body = fail({ mes: '删除数据失败' })
      }
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

  // 修改信息
  async updateInfo(ctx, next) {
    if (ctx.request.body === undefined) {
      return (ctx.body = fail({ msg: '所需id参数不能为空' }))
    }
    const data = ctx.request.body
    const res = await updateInfo(data)
    if (res) {
      ctx.body = success({ msg: '修改信息成功' })
    } else {
      ctx.body = fail({ msg: '修改信息失败' })
    }
  }
}

module.exports = new InoculateController()
