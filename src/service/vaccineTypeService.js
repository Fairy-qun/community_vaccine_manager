const VaccineType = require('../model/vaccineTypeModel')
class VaccineTypeService {
  // 创建信息
  async createInfo(data) {
    const res = await VaccineType.create(data)
    return res.dataValues
  }

  // 删除信息
  async deleteInfo({ idArr }) {
    const whereObj = {
      id: ''
    }
    whereObj.id = idArr
    const res = await VaccineType.destroy({
      where: whereObj
    })
    return res > 0 ? true : false
  }

  // 查询信息
  async getInfo({ pageNo, pageSize, data }) {
    const res = await VaccineType.findAndCountAll({
      offset: parseInt((pageNo - 1) * pageSize),
      limit: parseInt(pageSize)
    })
    res.rows.unshift(res.count)
    return res.rows
  }

  // 条件查询
  async getInfoBy({ data }) {
    const { id, vaccineType_name } = data
    const whereObj = {}
    id && Object.assign(whereObj, { id })
    vaccineType_name && Object.assign(whereObj, { vaccineType_name })

    const res = await VaccineType.findAll({
      where: whereObj
    })
    return res ? res : null
  }
}

module.exports = new VaccineTypeService()
