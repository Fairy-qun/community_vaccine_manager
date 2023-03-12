const { DataTypes } = require('sequelize')
const seq = require('../db/seq')

// 创建User模型
const User = seq.define('user', {
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '用户名称，唯一'
  },
  user_password: {
    type: DataTypes.CHAR(64),
    allowNull: false,
    comment: '用户密码'
  },
  user_gender: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '用户性别'
  },
  user_mobile: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '用户手机号'
  },
  user_numberId: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '用户身份证号'
  },
  user_role: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0,
    comment: '用户角色 0：管理员，1：普通用户'
  }
})
// User.sync({ force: true })
module.exports = User
