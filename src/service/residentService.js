const Resident = require('../model/residentModel')
class ResidentService {
  // 添加居民信息
  async createResident(data) {
    const res = await Resident.create(data)
    return res.dataValues
  }

  // 查询居民信息
  async getResidentInfo({ id, resident_name, resident_gender, resident_age, resident_mobile, resident_numberId, resident_address, resident_isInoculateFirst, resident_isInoculateSecond, resident_isInoculateThird }) {
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

    const res = await Resident.findOne({
      where: whereObj
    })
    return res ? res.dataValues : null
  }

  // 获取居民信息
  async getResidentInfo() {
    const res = await Resident.findAll()
    return res
  }
}

module.exports = new ResidentService()
