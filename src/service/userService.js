const User = require('../model/userModel')
class UserService {
  // 创建用户
  async createUser(user_name, user_password, user_gender, user_mobile, user_numberId, user_role) {
    const res = await User.create({
      user_name,
      user_password,
      user_gender,
      user_mobile,
      user_numberId,
      user_role
    })
    // console.log(res)
    return res.dataValues
  }

  // 查询用户
  async getUserInfo({ id, user_name, user_password, user_mobile, user_numberId, user_role, user_gender }) {
    const whereObj = {}
    id && Object.assign(whereObj, { id })
    user_name && Object.assign(whereObj, { user_name })
    user_password && Object.assign(whereObj, { user_password })
    user_gender && Object.assign(whereObj, { user_gender })
    user_mobile && Object.assign(whereObj, { user_mobile })
    user_numberId && Object.assign(whereObj, { user_numberId })
    user_role && Object.assign(whereObj, { user_role })

    const res = await User.findOne({
      where: whereObj
    })
    return res ? res.dataValues : null
  }

  // 根据相应字段更新数据
  async updateById({ id, user_name, user_password, user_mobile, user_numberId, user_role, user_gender }) {
    const whereObj = { id }
    const newUser = {}
    user_name && Object.assign(newUser, { user_name })
    user_password && Object.assign(newUser, { user_password })
    user_mobile && Object.assign(newUser, { user_mobile })
    user_numberId && Object.assign(newUser, { user_numberId })
    user_role && Object.assign(newUser, { user_role })
    user_gender && Object.assign(newUser, { user_gender })

    console.log(whereObj)
    console.log(newUser)
    const res = await User.update(newUser, { where: whereObj })
    return res[0] > 0 ? true : false
  }
}

module.exports = new UserService()
