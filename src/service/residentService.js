const Resident = require('../model/residentModel')
class ResidentService {
  // 获取全部数据
  async getInfoAll() {
    const res = await Resident.findAll()
    return res
  }
  // 添加居民信息
  async createResident(data) {
    const res = await Resident.create(data)
    return res.dataValues
  }

  // 查询居民信息
  async getResidentInfoBy({ id, resident_name, resident_gender, resident_age, resident_mobile, resident_numberId, resident_address, resident_isInoculateFirst, resident_isInoculateSecond, resident_isInoculateThird }) {
    const whereObj = {}
    id && Object.assign(whereObj, { id })
    resident_name && Object.assign(whereObj, { resident_name })
    resident_gender && Object.assign(whereObj, { resident_gender })
    resident_age && Object.assign(whereObj, { resident_age })
    resident_mobile && Object.assign(whereObj, { resident_mobile })
    resident_numberId && Object.assign(whereObj, { resident_numberId })
    resident_address && Object.assign(whereObj, { resident_address })
    resident_isInoculateFirst && Object.assign(whereObj, { resident_isInoculateFirst })
    resident_isInoculateSecond && Object.assign(whereObj, { resident_isInoculateSecond })
    resident_isInoculateThird && Object.assign(whereObj, { resident_isInoculateThird })

    const res = await Resident.findAll({
      where: whereObj
    })
    return res ? res : null
  }

  // 获取居民信息
  async getResidentInfo({ pageNo, pageSize }) {
    console.log(pageNo, pageSize)
    const res = await Resident.findAndCountAll({
      offset: parseInt((pageNo - 1) * pageSize),
      limit: parseInt(pageSize)
    })
    // console.log(res.rows)
    // console.log(res.count)
    res.rows.unshift(res.count)
    return res.rows
  }

  // 更新居民信息
  async updateInfoById({ data }) {
    const { id, resident_name, resident_gender, resident_age, resident_mobile, resident_numberId, resident_address, resident_isInoculateFirst, resident_isInoculateSecond, resident_isInoculateThird } = data
    const whereObj = { id }
    const newUser = {}
    resident_name && Object.assign(newUser, { resident_name })
    resident_gender && Object.assign(newUser, { resident_gender })
    resident_age && Object.assign(newUser, { resident_age })
    resident_mobile && Object.assign(newUser, { resident_mobile })
    resident_numberId && Object.assign(newUser, { resident_numberId })
    resident_address && Object.assign(newUser, { resident_address })
    resident_isInoculateFirst && Object.assign(newUser, { resident_isInoculateFirst })
    resident_isInoculateSecond && Object.assign(newUser, { resident_isInoculateSecond })
    resident_isInoculateThird && Object.assign(newUser, { resident_isInoculateThird })

    const res = await Resident.update(newUser, {
      where: whereObj
    })
    return res[0] > 0 ? true : false
  }

  // 删除居民信息
  async deleteInfo(idArr) {
    const whereObj = {
      id: ''
    }
    console.log(idArr)
    whereObj.id = idArr
    const res = await Resident.destroy({
      where: whereObj
    })
    return res > 0 ? true : false
  }
}

module.exports = new ResidentService()
