const Inoculate = require('../model/inoculateModel')
class InoculateService {
  async createInfo(data) {
    const res = await Inoculate.create(data)
    return res.dataValues
  }

  // 删除信息
  async deleteInfo({ idArr }) {
    const whereObj = {
      id: ''
    }
    whereObj.id = idArr
    const res = await Inoculate.destroy({
      where: whereObj
    })
    return res > 0 ? true : false
  }
  // 查询信息
  async getInfo({ pageNo, pageSize, data }) {
    const res = await Inoculate.findAndCountAll({
      offset: parseInt((pageNo - 1) * pageSize),
      limit: parseInt(pageSize)
    })
    res.rows.unshift(res.count)
    return res.rows
  }

  // 条件查询
  async getInfoBy({ data }) {
    const { id, inoculate_name, resident_name, inoculate_date } = data
    const whereObj = {}
    id && Object.assign(whereObj, { id })
    inoculate_name && Object.assign(whereObj, { inoculate_name })
    resident_name && Object.assign(whereObj, { resident_name })
    inoculate_date && Object.assign(whereObj, { inoculate_date })

    const res = await Inoculate.findAll({
      where: whereObj
    })
    return res ? res : null
  }

  // 修改信息
  async updateInfo(data) {
    const { id, inoculate_name, vaccine_batch, inoculate_date } = data

    const whereObj = { id }
    const newInoculate = {}
    inoculate_name && Object.assign(newInoculate, { inoculate_name })
    vaccine_batch && Object.assign(newInoculate, { vaccine_batch })
    inoculate_date && Object.assign(newInoculate, { inoculate_date })

    const res = await Inoculate.update(newInoculate, {
      where: whereObj
    })
    return res > 0 ? true : false
  }
}

module.exports = new InoculateService()
