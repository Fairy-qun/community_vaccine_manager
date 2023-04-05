const { success, fail } = require('../content')
const { createInfo, updateInfo, deleteInfo, getInfo } = require('../service/inoculatePointService')
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
    if (ctx.request.body === undefined) {
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
    let data = {
      pageNo: 1,
      pageSize: 10
    }
    const result = ctx.request.body
    if (result !== undefined) {
      for (let key in result) {
        data[key] = result[key]
      }
    }
    const res = await getInfo(data)
    if (res.length !== 0) {
      const count = res.length
      const data = []
      res.forEach(item => {
        data.push(item.dataValues)
      })
      return (ctx.body = {
        code: 0,
        data: data,
        total: count,
        msg: '获取数据成功'
      })
    } else {
      ctx.body = fail({ msg: '获取数据失败，暂无数据' })
    }
  }
}

module.exports = new InoculatePointController()
