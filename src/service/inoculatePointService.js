const InoculatePoint = require('../model/inoculatePointModel')
class InoculatePointService {
  // 创建信息
  async createInfo(data) {
    const res = await InoculatePoint.create(data)
    return res.dataValues
  }
  // 更新信息
  async updateInfo(data) {
    const { id, inoculatePoint_name, inoculatePoint_address, inoculatePoint_state } = data
    const whereObj = { id }
    const newInoculatePoint = {}
    inoculatePoint_name && Object.assign(newInoculatePoint, { inoculatePoint_name })
    inoculatePoint_address && Object.assign(newInoculatePoint, { inoculatePoint_address })
    inoculatePoint_state && Object.assign(newInoculatePoint, { inoculatePoint_state })
    const res = await InoculatePoint.update(newInoculatePoint, {
      where: whereObj
    })
    return res > 0 ? true : false
  }

  // 删除信息
  async deleteInfo(idArr) {
    const res = await InoculatePoint.destroy({
      where: { id: idArr }
    })
    return res > 0 ? true : false
  }

  // 查询信息
  async getInfo({ pageNo, pageSize, data }) {
    const res = await InoculatePoint.findAndCountAll({
      offset: parseInt((pageNo - 1) * pageSize),
      limit: parseInt(pageSize)
    })
    res.rows.unshift(res.count)
    return res.rows
  }
  // 条件查询
  async getInfoBy({ data }) {
    const { id, inoculatePoint_name, inoculatePoint_address, inoculatePoint_state } = data
    const whereObj = {}
    id && Object.assign(whereObj, { id })
    inoculatePoint_name && Object.assign(whereObj, { inoculatePoint_name })
    inoculatePoint_address && Object.assign(whereObj, { inoculatePoint_address })
    inoculatePoint_state && Object.assign(whereObj, { inoculatePoint_state })

    const res = await InoculatePoint.findAll({
      where: whereObj
    })
    return res ? res : null
  }
}

module.exports = new InoculatePointService()
