const Vaccine = require('../model/vaccineModel')
class VaccineService {
  // 创建信息
  async createVaccine(data) {
    const res = await Vaccine.create(data)
    return res.dataValues
  }

  // 修改信息
  async updateInfo(data) {
    const { id, vaccine_name, vaccine_batch, vaccine_categroy, vaccine_manufacturer, vaccine_productDate, vaccine_overdueDate, vaccine_standard, vaccine_explain } = data

    const whereObj = { id }
    const newVaccine = {}
    vaccine_name && Object.assign(newVaccine, { vaccine_name })
    vaccine_batch && Object.assign(newVaccine, { vaccine_batch })
    vaccine_categroy && Object.assign(newVaccine, { vaccine_categroy })
    vaccine_manufacturer && Object.assign(newVaccine, { vaccine_manufacturer })
    vaccine_productDate && Object.assign(newVaccine, { vaccine_productDate })
    vaccine_overdueDate && Object.assign(newVaccine, { vaccine_overdueDate })
    vaccine_standard && Object.assign(newVaccine, { vaccine_standard })
    vaccine_explain && Object.assign(newVaccine, { vaccine_explain })

    const res = await Vaccine.update(newVaccine, {
      where: whereObj
    })
    return res > 0 ? true : false
  }

  // 删除信息
  async deleteInfo({ idArr }) {
    const whereObj = {
      id: ''
    }
    whereObj.id = idArr
    const res = await Vaccine.destroy({
      where: whereObj
    })
    return res > 0 ? true : false
  }

  // 查询信息
  async getInfo({ pageNo, pageSize, data }) {
    const res = await Vaccine.findAndCountAll({
      offset: parseInt((pageNo - 1) * pageSize),
      limit: parseInt(pageSize)
    })
    res.rows.unshift(res.count)
    return res.rows
  }

  // 条件查询
  async getInfoBy({ data }) {
    const { id, vaccine_name, vaccine_batch, vaccine_categroy, vaccine_manufacturer, vaccine_productDate, vaccine_overdueDate, vaccine_standard, vaccine_explain } = data
    const whereObj = {}
    id && Object.assign(whereObj, { id })
    vaccine_name && Object.assign(whereObj, { vaccine_name })
    vaccine_batch && Object.assign(whereObj, { vaccine_batch })
    vaccine_categroy && Object.assign(whereObj, { vaccine_categroy })
    vaccine_manufacturer && Object.assign(whereObj, { vaccine_manufacturer })
    vaccine_overdueDate && Object.assign(whereObj, { vaccine_overdueDate })
    vaccine_productDate && Object.assign(whereObj, { vaccine_productDate })
    vaccine_standard && Object.assign(whereObj, { vaccine_standard })
    vaccine_explain && Object.assign(whereObj, { vaccine_explain })

    const res = await Vaccine.findAll({
      where: whereObj
    })
    return res ? res : null
  }
}

module.exports = new VaccineService()
