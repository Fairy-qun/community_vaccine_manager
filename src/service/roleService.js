const Role = require('../model/roleModel')
class RoleService {
  async createInfo(data) {
    console.log(data)
    const res = await Role.create(data)
    return res.dataValues
  }
  async getInfo() {
    const res = await Role.findAll()
    // console.log(res);
    return res
  }
}

module.exports = new RoleService()
